varifyRequire (form) {
  // 懒得用对象形式了， '字段名,输出的提示名字'
  var requireList = ['shoe_type,款式', 'name,姓名', 'phone,手机号码', 'shoe_size,码数']
  requireList.some((row, index) => {
	var key = row.split(',')[0]
	var value = row.split(',')[1]
	if (!form[key]) {
	  // show tips
	  return true
	}
  })
}