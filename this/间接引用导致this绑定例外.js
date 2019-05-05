function foo () {
  console.log(this.a)
}

var a = 2
var o = {
  a: 3,
  foo: foo
}
var p = {
  a: 4
}

o.foo() // 3
(p.foo = o.foo)() // p.foo = o.foo返回值是目标函数foo的引用，相当于foo(), 隐式绑定到全局对象
