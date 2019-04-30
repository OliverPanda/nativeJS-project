// 新建模块
function CoolModule () {
  // 私有变量 S
  var something = 'cool'
  var another = [1, 2, 3]
  function doSomething () {
    console.log(something)
  }
  function doAnother () {
    console.log(another.join('!'))
  }
  // 私有变量 E

  // 定义公有方法， 返回私有变量或者执行私有函数
  return {
    doSomething: doSomething,
    doAnother: doAnother
  }
}

var foo = CoolModule()
foo.doSomething() // cool
foo.doAnother() // 1!2!3

// 模块需要具备两个条件
/*
  1. 有外部的封闭函数，且被调用一次
  2. 封闭函数必须返回至少一个内部函数，这样才能在私有作用域行程闭包并且可以访问和修改私有状态
*/