/**
 * 
 * @param {需要去重的数组} target 
 * 利用new Set进行去重， new Set之后返回Set对象，用Array.from转成数组
 * 或者有更干脆的写法， 直接用ES6结构 [...new Set(target)]
 */
function unique (target) {
  return Array.from(new Set(target))
}