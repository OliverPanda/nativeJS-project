// 深拷贝使用场景: 对象或者数组赋值，特别是对象中还有对象的
/**
 * 
 * @param { 被拷贝的对象或者数组 } p 
 * @param { 被拷贝初始数组，默认{} } d 
 */
function deepCopy (p, d) {
  var c = d || {}
  for(var i in p) {
    if (typeof p[i] === 'object') {
      // 如果对象里还有对象或者数组的话，继续深拷贝
      c[i] = (p[i].constructor === Array) ? [] : {}
      deepCopy(p[i], c[i])
    } else {
      // 如果i不是对象的话，直接浅拷贝
      c[i] = p[i]
    }
  }
  return c
}
