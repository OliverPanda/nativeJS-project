function createCurry (fn, args) {
  var args = args || []
  var that = this
  return function () {
    var _args = [].slice.apply(arguments); // 获得剩下的参数
    [].push.apply(_args, args);
    if (_args.length < fn.length) {
      return createCurry.call(that, fn, _args)
    }
    return fn.apply(that, _args)
  }
}

// es6 currying
const currying = (fn, ...args) => {
  if (args.length >= fn.length) {
    return fn(...args)
  }
  return function (...args2) {
    return currying(fn, ...args, ...args2)
  }
}
