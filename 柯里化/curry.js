function createCurry (fn, args) {
  var args = args || []
  var that = this
  return function () {
    var _args = [].slice.apply(arguments);
    [].push.apply(_args, args);
    if (_args.length < fn.length) {
      return createCurry.call(that, fn, _args)
    }
    return fn.apply(that, _args)
  }
}

// es6 currying
const combo = (fn, ...args) => {
  // TODO: 请在此处完善代码
  if (args.length >= fn.length) {
    return fn(...args)
  }
  return function (...args2) {
    return combo(fn, ...args, ...args2)
  }
}
