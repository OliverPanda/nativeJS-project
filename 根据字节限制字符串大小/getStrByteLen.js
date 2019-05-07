function getCharByteLen (str) {
  if (typeof str !== 'string') {
    throw new Error('str must be a string')
    return 0
  }
  var byteLen = 0
  var len = str && str.length
  if (str) {
    for (var i = 0; i < len; i++) {
      if (str.charCodeAt(i) > 255) {
        byteLen += 2
      } else {
        byteLen++
      }
    }
    return byteLen
  } else {
    return 0
  }
}
