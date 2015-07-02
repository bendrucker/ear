'use strict'

var test = require('tape')
var Listeners = require('./')

test(function (t) {
  t.plan(3)
  var listeners = Listeners()
  listeners() // noop
  var remove = listeners.add(function (a, b) {
    t.equal(this, null)
    t.equal(a, 1)
    t.equal(b, 2)
  })
  listeners(1, 2)
  remove()
  listeners()
})

test('only accept functions', function (t) {
  var listeners = Listeners()
  t.throws(listeners.add, /is not a function/)
  t.end()
})
