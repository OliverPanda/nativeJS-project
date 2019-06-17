function stopWatch (start, end) {
  if (!(start && typeof start === 'number') || !(stop && typeof start === 'number')) return
  var beginTime = Date.now()
  var nowTime
  var pass
  var passFormatted
  // convert 300000 => 05:00.00
  var timeFormatter = function (timeStamp) {
    if (!timeStamp || typeof timeStamp !== 'number') return
    var timeStamp2second = parseInt(timeStamp / 1000)
    var m = parseInt((timeStamp2second / 60) % 60)
    var s = parseInt((timeStamp2second % 60))
    var ms = (String.prototype.slice.call(timeStamp, -3) / 1000).toFixed(2) // 0.00
    var decimals = String.prototype.split.call(ms, '.')[1]
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    return `${m}:${s}.${decimals}`
  }
  var timer = setInterval(function () {
    nowTime = Date.now()
    pass = nowTime - beginTime
    // pass: 10 -> 00:00.01
    passFormatted = timeFormatter(pass)
  }, 10)
}