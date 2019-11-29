export default function inherits (child, father) {
  if (arguments.length !== 2) {
    throw new Error('必须指定子类和父类')
  }
  arguments.forEach(elm => {
    if (typeof elm !== 'function') {
      throw new Error('子类和父类都必须是function')
    }
  })
  var F = function () {}
  F.prototype = father.prototype
  child.prototype = new F()
  child.prototype.constructor = child
}
