/**
 * promise: 三个状态，pending(默认), fulfilled(resolved), rejected
 * 从promise使用入手, new Promise((resolve, reject) => {}), Promise是一个带回调函数的类，回调函数接受两个参数resolve, reject
 * resolve, reject到底是什么？ 什么类型的参数 --  用法： resolve(data), 所以resolve, reject都是函数
 * then方法： 返回一个promise对象, 能运行then里的回调说明上一个Promise状态为resolved
 * 参考: https://juejin.im/post/5b83cb5ae51d4538cc3ec354, https://github.com/xieranmaya/blog/issues/3
 */
const isFunc = variable => typeof variable === 'function'

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor (handler) {
    if (!isFunc(handler)) {
      throw new Error('MyPromise must recept a function as parameter')
    }
    this._state = PENDING
    this._value = undefined
    this._fulfilledQueue = [] // fulfill回调集，可能在promise上有多个回调
    this._rejectedQueue = []
    // 防止回调中报错没被捕捉
    try {
      handler(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      this._reject(err)
    }
  }

  // _resolve + _reject
  _resolve (val) {
    const run = () => {
      if (this._state != PENDING) {
        return
      }
      const runfulfilled = (value) => {
        let cb
        while (cb = this._fulfilledQueue.unshift()) {
          cb(value)
        }
      }
      const runRejected = (error) => {
        let cb
        while (cb = this._rejectedQueue.unshift()) {
          cb(error)
        }
      }
      /* 
        如果resolve的参数val为Promise对象，根据val的返回状态
        进行runfulfilled或者runRejected的操作
      */
      if (val instanceof MyPromise) {
        val.then(value => {
          this._value = value
          this._status = fulfillED
          runfulfilled(value)
        }, err => {
          this._value = err
          this._status = REJECTED
          runRejected(err)
        })
      }
    }
    setTimeout(run, 0) // 支持同步的Promise -- ? 没懂
  }
  
  _reject (err) {
    if (this._status !== PENDING) {
      return
    }
    const run = () => {
      this._status = REJECTED
      this._value = err
      let cb
      while (cb = this._rejectedQueue.unshift()) {
        cb(err)
      }
    }
    setTimeout(run, 0)
  }

  // then方法
  then (onfulfilled, onRejected) {
    const { _value, _status } = this
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 执行成功函数封装 --- S ---
      let fulfilled = value => {
        try {
          if (!isFunc(onFulfilledNext)) {
            onFulfilledNext(value) 
          } else {
            let res =  onFulfilled(value);
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }
        } catch (err) {
          onRejectedNext(err)
        }
      }
      // 执行成功函数封装 --- E ---
      // 执行失败函数封装 --- S ---
      let rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error)
          } else {
              let res = onRejected(error);
              if (res instanceof MyPromise) {
                // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                res.then(onFulfilledNext, onRejectedNext)
              } else {
                //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                onFulfilledNext(res)
              }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err)
        }
      }
      // 执行失败函数封装 --- E ---      
      switch (_status) {
        // 当状态为pending时，将then方法回调函数加入执行队列等待执行
        case PENDING:
          this._fulfilledQueues.push(fulfilled)
          this._rejectedQueues.push(rejected)
          break
        // 当状态已经改变时，立即执行对应的回调函数
        case FULFILLED:
          fulfilled(_value)
          break
        case REJECTED:
          rejected(_value)
          break
      }
    })
  }

  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
  static resolve (value) {
    // 如果参数是MyPromise实例，直接返回这个实例
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }
  static reject (value) {
    return new MyPromise((resolve ,reject) => reject(value))
  }
  // ** all方法！ 异步队列等，可以参考
  static all (list) {
    return new MyPromise((resolve, reject) => {
      let values = [] // 返回值的合集
      let count = 0 // 观察者 count >= list.length表示全部promise都执行完
      for (let [i, p] of list.entries()) {
        // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
        this.resolve(p).then(res => {
          values[i] = res
          count++
          // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
          if (count === list.length) resolve(values)
        }, err => {
          // 有一个被rejected时返回的MyPromise状态就变成rejected
          reject(err)
        })
      }
    })
  }
  // race
  static race (list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        // 只要有一个实例状态改变, promise的状态就改变
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }
  finally (cb) {
    return this.then(
      value  => MyPromise.resolve(cb()).then(() => value),
      reason => MyPromise.resolve(cb()).then(() => { throw reason })
    )
  }
}