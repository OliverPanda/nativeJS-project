/**
 * 无论多少维度都好
 * 把数组最终扁平化为以为数组
 * 思路： 对数组递归循环 => 子项不是数组, 放到结果数组中, 子项是数组, 传入已有的结果递归判断
 */

function allFlat (targetArr, result = []) {
  for (const value of targetArr) {
    if (Array.isArray(value)) {
      allFlat(value, result)
    } else {
      result.push(value)
    }
  }
  return result
}

/** test result 
allFlat([1,2,3,[4], [5]])
(5) [1, 2, 3, 4, 5]
allFlat([1,2,3,[4], [5, [6]]])
(6) [1, 2, 3, 4, 5, 6]
 */