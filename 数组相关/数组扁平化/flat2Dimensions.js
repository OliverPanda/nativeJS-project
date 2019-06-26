// Vue 扁平化children里的写法
function flat2Dimensions (targetArr) {
  for (let i = 0; i < targetArr.length; i++) {
    if (Array.isArray(targetArr[i])) {
      return Array.prototype.concat.apply([], targetArr)
    }
  }
  return targetArr
}

// 我自己的方法
function flatFromTwo2One (targetArr) {
  return [].concat.apply([], targetArr)
}

/**
 * test example
var a = [1,2,3,[4]]
[].concat.apply([], a) // [1, 2, 3, 4]
Array.prototype.concat.apply([], a) // [1, 2, 3, 4]
var b = [[1], [2], [3,4]]
[].concat.apply([], b) // [1, 2, 3, 4]
Array.prototype.concat.apply([], b) // [1, 2, 3, 4]
 */
