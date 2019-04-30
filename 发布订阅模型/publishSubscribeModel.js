// 发布订阅模型
function Publisher () {
  this.handlers = {} // 订阅者
}
Publisher.prototype = {
  // 订阅事件
  on: function (eventType, callback) {
      var isExit = eventType in this.handlers
      // 同一事件确保只订阅一次
      if (!isExit) {
          this.handlers[eventType] = []
      }
      this.handlers[eventType].push(callback)
      return this
  },
  // 发送信息
  emit: function (eventType) {
      var handlerArgs = Array.prototype.slice.call(arguments, 1)
      for (var i = 0; i < this.handlers[eventType].length; i++) {
        this.handlers[eventType][i].apply(this, handlerArgs);
      }
      return this
  },
  // 移除订阅
  off: function (eventType, handler) {
      var currentEvent = this.handlers[eventType]
      var len = 0
      if (currentEvent) {
          len = currentEvent.length
          currentEvent.forEach(function (item, index) {
              if (item === handler) {
                  currentEvent.splice(index, 1)
              }
          })
      }
      return this
  }
}
// 订阅者
var sub = new Publisher()
sub.on('a', function (data) {
  console.log(1 + data)
})
sub.emit('a', '我是第一次调用的参数')