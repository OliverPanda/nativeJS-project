<template>
  <!-- loading bar -->
  <div class="loading-modal" @touchmove.stop.prevent v-if="isShowLoading">
    <div class="loading-box">
      <div class="loading-bar">
        <div class="loading-inner" :style="{width: percent + '%'}"></div>
      </div>
      <div class="loading-text">{{ percent }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preload',
  props: {
    sourceList: {
      type: Array,
      default: []
    },
    baseImgUrlList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      isShowLoading: false,
      percent: 0
    }
  },
  methods: {
    preLoad () {
      if (this.baseImgUrlList.length !== this.sourceList.length) {
        console.error('baseImgList and sourceList length must be equal!')
        return
      }
      // 合并为一个数组
      let preloadImgList = this.baseImgUrlList.reduce((acc, curr, idx) => {
        let fullPathArr = this.sourceList[idx].reduce((_acc, _curr, index) => {
          _acc.push(curr + _curr)
          return _acc
        }, [])
        return acc.concat(fullPathArr)
      }, [])
      // 实例preload对象
      var loader = new resLoader(preloadImgList, {
        onStart: (total) => {
          console.time()
          this.isShowLoading = true
          console.log('start:' + total)
        },
        onProgress: (current, total) => {
          this.percent = Math.ceil(100 * current / total)
        },
        onComplete: (total) => {
          console.log('加载完毕:' + total + '个资源')
          console.timeEnd()
          this.isShowLoading = false
          this.$emit('load-complete', total)
        }
      })
    }
  },
  watch: {
    sourceList (newVal, oldVal) {
      if (newVal && newVal.length > 0) {
        this.preLoad()
      }
    }
  }
}
</script>

<style>
  /* =========
  loading style
===================== */
  .loading-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #e3e3e3;
    background-size: 100% 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    color: #101010;
    text-align: center;
    z-index: 999;
  }

  /* ghost element to vertical center */
  .loading-modal::before {
    content: " ";
    display: inline-block;
    height: 100%;
    width: 1px;
    vertical-align: middle;
  }

  .loading-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 5.6rem;
  }

  .loading-bar {
    width: 100%;
    height: .34rem;
    border-radius: 1rem;
    background: #02080d;
    box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.11), inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .loading-inner {
    width: 30%;
    height: 100%;
    border-radius: .34rem;
    background: #000;
    /* background-image: linear-gradient(97deg, #8392FF, #6692FF); */
  }

  .loading-text {
    font-size: 17px;
    color: #101010;
    padding-top: .3rem;
  }
</style>
