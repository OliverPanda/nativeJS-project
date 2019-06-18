// 事件循环机制在node和浏览器中的不同
setTimeout(() => {
  console.log('timeout1')
  new Promise((resolve) => {
    console.log('promise1')
    resolve()
  }).then(() => {
    console.log('promise-then1')
  })
}, 0)

setTimeout(() => {
  console.log('timeout2')
  new Promise((resolve) => {
    console.log('promise2')
    resolve()
  }).then(() => {
    console.log('promise-then2')
  })
}, 0)