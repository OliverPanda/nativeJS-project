
function varifyRequire (form) {
  // '字段名,输出的提示名字'
  var requireList = ['phone,输入手机号', 'gender,输入姓名', 'region, 选择城市', 'agree1,勾选条款', 'agree2,勾选条款', 'agree3,勾选条款']
  var result = requireList.some((row, index) => {
    var key = row.split(',')[0]
    var value = row.split(',')[1]
    if (!form[key]) {
      // Toast(`请${value}`)  // show tips
      return true
    }
  })
  if (result) {
    throw new Error('not blank')
  }
}
/*
  // 使用
  try {
    this.varifyRequire(this.form)
  } catch (error) {
    if (error.message === 'not blank') {
      return
    }
  }
*/