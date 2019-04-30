function throttle (callback, delay) {
  var timer = null
  var that = this
  return function () {
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(that, args)
    }, delay)
  }
}