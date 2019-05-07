<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>;
    </transition>
    <preload :sourceList='sourceList' :baseImgUrlList='imgBaseUrlList'></preload>
  </div>
</template>

<script>
import Preload from '@/components/preload'
export default {
  name: 'app',
  data () {
    return {
      sourceList: [],
      imgBaseUrlList: [this.imgBaseUrl]
    }
  },
  components: {
    Preload
  },
  mounted () {
    this.sourceList = [
      [
        '/bg-1.png',
        '/bg-2.png',
        '/bg-3.png',
        '/bg-4.png',
        '/bg-5.png',
        '/bg-6.png',
        '/bg-7.png',
        '/running_1@2x.png',
        '/running_2@2x.png'
      ]
    ]
  }
}
</script>

<style>
  /* --- reset style --- */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html, body {
    line-height: 1;
    width: 100%;
  }
  body, html {
    font-family: 'FZHei-B01S', 'Hiragino Sans GB', 'Microsoft Yahei', 'Helvetica Neue', 'Luxi Sans', 'DejaVu Sans', Tahoma, STHeiti, Arial, Helvetica, sans-serif;
  }
  body {
    color: #fff;
    background-color: rgba(0, 0, 0, .75);
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  input {
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  button{
    border: 1px solid transparent;
    background: transparent;
    padding: 0;
    margin: 0;
  }
  /* 清除select箭头 */
  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: #FFFFFF;
    text-decoration: none;
  }
  *:focus {
    outline: none;
  }
  * {
    box-sizing: border-box;
  }
  * { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }

  ;
  /* router fade */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  #app {
    width: 100%;
    margin: 0 auto;
  }

  /* clear fix */
  .clearfix:after {
    content: "\200B";
    display: block;
    height: 0;
    clear: both;
  }
  .clearfix { *zoom: 1; }

  /* -- media query -- */
  @media screen and (max-width: 321px) {
    body {
      font-size: 16px
    }
  }

  @media screen and (min-width: 321px) and (max-width: 400px) {
    body {
      font-size: 17px
    }
  }

  @media screen and (min-width: 400px) and (max-width: 840px) {
    body {
      font-size: 19px
    }
  }

  @media screen and (min-width: 840px) {
    body {
      font-size: 22px
    }
  }
</style>
