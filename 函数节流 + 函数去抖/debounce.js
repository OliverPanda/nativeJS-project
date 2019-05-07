function debounce (fn, wait) {
  var first = true
  var timer = null
  var that = this
  return function () {
	var args = arguments
	if (first) {
	  fn.apply(that, args)
	  first = false
	  return false
	}
	if (timer) {
	  return false
	}
	timer = setTimeout(() => {
	  clearTimeout(timer)
	  timer = null
	  args = null // 设置null触发垃圾回收
	  fn.apply(that, args)
	}, wait)
  }
}