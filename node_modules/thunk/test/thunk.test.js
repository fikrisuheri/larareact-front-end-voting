var assert = require('assert');
var thunk = require('./..');

function backtrace() {
  return (new Error).stack.split(/\s+at\s+/).slice(1);
}

function uniq(list) {
  var out = [];

  out.push(list[0]);

  for (var i = 1; i < list.length; i += 1) {
    if (list[i] !== list[i-1]) out.push(list[i]);
  }

  return out;
}

describe('simple recursion', function() {
  var gcd = thunk.makeTrampoline(function(recurse) {
    return function(cc, a, b) {
      // prevent infinite loop on NaN
      if (isNaN(a) || isNaN(b)) return cc(NaN);
      if (a === 0 || b === 0) return cc(Infinity);

      // ensure a < b
      if (a > b) {
        var tmp = a;
        a = b; b = tmp;
      }

      var mod = b % a;

      // if a divides b, the gcd is a
      if (mod === 0) return cc(a);

      // otherwise recurse with Euclid's algorithm
      return recurse(cc, mod, a);
    }
  });

  it('returns the right things', function() {
    assert.equal(3, gcd(9, 12));
    assert.equal(1, gcd(5, 12));
    assert.equal(Infinity, gcd(0, 0));
  });
});

describe('stateful recursion', function() {
  var factorial = thunk.makeTrampoline(function(recurse) {
    function multiplier(cc, n) {
      return function(m) { return cc(m * n); };
    }

    return function(cc, n) {
      if (n <= 1) return cc(1);

      return recurse(multiplier(cc, n), n - 1);
    };
  });

  it('still returns the right things', function() {
    assert.equal(120, factorial(5));
    assert.equal(1, factorial(0));
  });
});

describe('stack size', function() {
  var testy = thunk.makeTrampoline(function(recurse) {
    return function(cc, out, n) {
      if (n === 0) return cc(out, 0);

      out.push(backtrace().length);

      return recurse(cc, out, n - 1);
    };
  });

  it('has a constant stack size', function() {
    var out = [];
    testy(out, 5);
    assert.equal(1, uniq(out).length, 'constant stack size throughout the computation');
  });
});
