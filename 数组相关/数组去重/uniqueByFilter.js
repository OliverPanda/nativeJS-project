/**
 * 
 * @param {需要去重的数组} target
 * indexOf(searchValue, start=0)
 * arr: 会传入target
 * 对数组使用indexOf()会返回第一个匹配到的index， 所以只会返回第一次匹配
 */
function unique (target) {
  return target.filter((item, index, arr) => arr.indexOf(item, 0) === index)
}