console.log('golb1');

setTimeout(function() {
    console.log('timeout1');
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })
})

setImmediate(function() {
    console.log('immediate1');
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function() {
        console.log('immediate1_then')
    })
})

new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
})

setTimeout(function() {
    console.log('timeout2');
    new Promise(function(resolve) {
        console.log('timeout2_promise');
        resolve();
    }).then(function() {
        console.log('timeout2_then')
    })
})
new Promise(function(resolve) {
    console.log('glob2_promise');
    resolve();
}).then(function() {
    console.log('glob2_then')
})

setImmediate(function() {
    console.log('immediate2');
    new Promise(function(resolve) {
        console.log('immediate2_promise');
        resolve();
    }).then(function() {
        console.log('immediate2_then')
    })
})