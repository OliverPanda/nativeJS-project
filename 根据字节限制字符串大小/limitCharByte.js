function limitCharByte (str, limitByte) {
  if (typeof str !== 'string') {
    throw new Error('str must be a string')
    return
  }
  var byteLen = 0
  var len = str && str.length
  var limitIndex = 0
  if (len) {
    for (var i = 0; i < len + 1; i++) {
      if (str.charCodeAt(i) > 255) {
        // 中文
        byteLen += 2
      } else {
        byteLen++
      }
      if (limitByte >= byteLen) {
        // 超过传入的最大字节数
        limitIndex = i + 1
      }
    }
    return str.slice(0, limitIndex)
  } else {
    return ''
  }
}
