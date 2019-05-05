function bind (fn, obj) {
  return function () {
    return fn.apply(obj, arguments)
  }
}

function foo (something) {
  console.log(this.a, something)
  return this.a + something
}

var obj = {
  a: 2
}
var bar = bind(foo, obj)
var b = bar(3) // 2 3
console.log(b) // 5