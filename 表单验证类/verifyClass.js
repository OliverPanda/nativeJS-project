function Verify () {
  // 绑定作用域
  var _self = this
  // 私有变量_createCurry, _check, check
  var _createCurry = function createCurry (fn, args) {
    var args = args || []
    var _self = this
    return function () {
      var _args = [].slice.apply(arguments);
      [].push.apply(_args, args)
      if (_args.length < fn.length) {
        return createCurry.call(_self, fn, _args)
      }
      return fn.apply(_self, _args)
    }
  }

  var check = function check (targetString, reg) {
    return reg.test(targetString)
  }

  var _check = _createCurry(check)
  _self.checkPhone = _check(/^1\d{10}$/)
  _self.checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)
  // 身份证
  _self.checkId = _check(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
  // 只能中文
  _self.checkChinese = _check(/[\u4e00-\u9fa5]/)
  // 邮编
  _self.checkPostCode = _check(/[1-9]\d{5}(?!\d)/)
  // 只能是字母
  _self.checkOnlyCharacter = _check(/^[a-zA-Z]*$/)
}
