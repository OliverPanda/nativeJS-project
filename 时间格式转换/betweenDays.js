function betweenDays (start, end) {
  // date1,date2格式为'2019-6-11 18:52:40' || '2019-6-11'
  start = start.indexOf(' ') >= 0 ? start.split(' ')[0] : start
  end = end.indexOf(' ') >= 0 ? end.split(' ')[0] : end
  var startStamp = new Date(start).getTime()
  var endStamp = new Date(end).getTime()
  var betweenSecond = (endStamp - startStamp) / 1000
  var d = Math.floor(betweenSecond / (24 * 3600))
  return `${d}天`
}