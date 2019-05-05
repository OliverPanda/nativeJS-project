// 硬绑定： call, apply, bind
function foo (something) {
  console.log(this.a, something)
  return this.a + something
}

var obj = {
  a: 2
}

// bar包裹函数
var bar = function () {
  return foo.apply(obj, arguments) // foo硬绑定到Obj上
}

var b = bar(3)
console.log(b) // 5