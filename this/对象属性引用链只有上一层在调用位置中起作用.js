// 对线属性引用链： this自动绑定到拥有该函数的对象中， 如果是对象中的对象，只会绑定到上一层对象

function foo () {
  console.log(this.a)
}
var obj2 = {
  a: 42,
  foo: foo
}
var obj1 = {
  a: 2,
  obj2: obj2
}

console.log(obj2.obj2.foo()) // 42 this只会绑定到上一层，也就是obj2中，并非因为foo在obj2中生命