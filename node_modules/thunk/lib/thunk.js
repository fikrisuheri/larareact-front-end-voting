var P = require('pjs').P
var util = require('util');

var stack = function() {
  return (new Error).stack.split(/\s+at\s+/).slice(1);
}

var slice = [].slice;

var Thunk = P(function(thunk) {
  thunk.toString = function() {
    return '[Thunk '+util.inspect(this.fn)+' '+util.inspect(this.args)+']';
  }

  thunk.init = function(fn, args) {
    this.fn = fn;
    this.args = slice.call(args);
  };

  thunk.call = function() {
    return this.fn.apply(null, this.args);
  }

  thunk.trampoline = function() {
    var thunk = this;

    for (;;) {
      if (thunk instanceof Thunk) {
        thunk = thunk.call();
      }
      else {
        return thunk;
      }
    }
  }
});

function id(x) { return x; }

function makeTrampoline(def) {
  function recurse() { return Thunk(thunkfn, arguments); }
  var thunkfn = def(recurse);

  return function() {
    var args = slice.call(arguments);

    return Thunk(thunkfn, [id].concat(args)).trampoline();
  }
}

exports.makeTrampoline = makeTrampoline;
exports.Thunk = Thunk;
