function foo () {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
var bar = obj.foo // 换个别名，丢失了this
var a = 'oops, global'
bar() // 'oops, global'而不是预想中对象属性引用链的2，造成了this丢失
