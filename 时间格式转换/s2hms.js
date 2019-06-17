function s2hms (t) {
  if (!t) {
    return
  }
  if (~~t || t < 1) {
    var tt = Math.round(Math.abs(t))
    var h = Math.floor((tt / 3600))
    var m = Math.floor((tt / 60) % 60)
    var s = tt % 60
    h = h >= 10 ? h : '0' + h
    m = m >= 10 ? m : '0' + m
    s = s >= 10 ? s : '0' + s
    return `${h}:${m}:${s}`
  } else {
    // 当时间等于0的时候，如果不返回的话，currentTime一开始时间等于0，则无法使用timeFormat返回一个值而现实空
    return t
  }
}