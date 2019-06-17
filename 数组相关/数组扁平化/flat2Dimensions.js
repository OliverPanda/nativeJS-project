function flat2Dimensions (children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

/**
var a = [1,2,3,[4]]
[].concat.apply([], a) // [1, 2, 3, 4]
Array.prototype.concat.apply([], a) // [1, 2, 3, 4]
var b = [[1], [2], [3,4]]
[].concat.apply([], b) // [1, 2, 3, 4]
Array.prototype.concat.apply([], b) // [1, 2, 3, 4]
 */
