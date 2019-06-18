setTimeout(() => {
  console.log('timeout1')
}, 0)

new Promise(function (resolve) {
  console.log('promise1')
  for(var i = 0; i < 100; i++) {
    i == 99 && resolve()
  }
  console.log('promise2')
}).then(function () {
  console.log('then1')
})

console.log('global1')

// promise1 promise2 global1 then1 timeout1