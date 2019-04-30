function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  fn() // 虽然是obj.foo的引用，但this丢失
}
var obj = {
  a: 2,
  foo: foo
}
var a = 'oops, global'
doFoo( obj.foo ) // 'oops, global'

setTimeout(obj.foo, 100) // 'oops, global'