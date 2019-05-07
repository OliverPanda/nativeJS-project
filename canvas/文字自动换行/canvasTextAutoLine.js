/* eslint-disable */
export default (str, canvas, initX, initY, lineHeight) => {
  var ctx = canvas.getContext('2d')
  var lineWidth = 0
  var canvasWidth = canvas.width * 0.8
  var lastSubStrIndex = 0
  for (let i = 0; i < str.length; i++) {
    lineWidth += ctx.measureText(str[i]).width
    if (lineWidth > canvasWidth - 30) { // 减去initX,防止边界出现的问题
      ctx.fillText(str.substring(lastSubStrIndex, i), initX, initY)
      initY += lineHeight
      lineWidth = 0
      lastSubStrIndex = i
    }
    if (i === str.length - 1) {
      ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY)
    }
  }
}