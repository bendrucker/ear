'use strict'

module.exports = Ear

function Ear () {
  var callbacks = []

  function listeners () {
    var args = arguments
    var i = 0
    var length = callbacks.length
    for (; i < length; i++) {
      var callback = callbacks[i]
      callback.apply(null, args)
    }
  }

  listeners.add = function (listener) {
    if (typeof listener !== 'function') throw new TypeError(listener + ' is not a function')

    callbacks.push(listener)
    return function remove () {
      var i = 0
      var length = callbacks.length
      for (; i < length; i++) {
        if (callbacks[i] === listener) {
          callbacks.splice(i, 1)
          return
        }
      }
    }
  }

  return listeners
}
