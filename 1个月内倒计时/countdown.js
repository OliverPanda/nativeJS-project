function countdown (endTimeStampMs) {
  if (!endTimeStampMs) {
    return
  }
  var now = Date.now()
  // 时间大于结束时间
  if (now > endTimeStampMs) {
    clearInterval(this.timer)
    // callback()
    return '即刻开跑'
  }
  var between = (endTimeStampMs - now) / 1000
  var d = parseInt(between / 3600 / 24)
  var h = (d * 24) + parseInt((between / 3600) % 24)
  var m = parseInt((between / 60) % 60)
  var s = parseInt(between % 60)
  h = h < 10 ? `0${h}` : h
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  return `${h}:${m}:${s}`
}