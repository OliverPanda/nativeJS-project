function pagination (data, count) {
  var isArr = function (something) {
    return (Object.prototype.toString.call(something) === '[object Array]')
  }
  var isNumber = function (something) {
    return (Object.prototype.toString.call(something) === '[object Number]')
  }
  if (!isArr(data)) {
    throw new Error('data should be an Array')
  }
  if (!isNumber(count)) {
    throw new Error('data should be Number')
  }
  let newArr = []
  var totalPage = Math.ceil(data.length / count)
  for (let i = 0; i < totalPage; i++) {
    newArr.push(data.slice(i * count, (i + 1) * count))
  }
  return newArr
}