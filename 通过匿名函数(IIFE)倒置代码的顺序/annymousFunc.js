// 通过匿名函数(IIFE)倒置代码的顺序
var a = 2
(function IIFE (def) {
  console.log('先执行IIFE')
  def(window)
})(function def (global) {
  console.log('后执行def')
  var a = 3
  console.log(a)
  console.log(global.a)
})

// 测试结果： 2 is not a function 