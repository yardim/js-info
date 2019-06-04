'use strict';

// ======================================
// defer for functions

// Function.prototype.defer = function(ms) {
//   setTimeout(this, ms);
// }

// function f() {
//   console.log('Hi!');
// }

// f.defer(1000);



// ======================================
// defer with arguments

Function.prototype.defer = function(ms) {
  const _this = this;

  return function() {
    setTimeout(() => {
      _this.apply(null, arguments)
    }, ms);
  }
}

const obj = {};

obj.f = function(arg1, arg2) {
  console.log('arg 1', arg1);
  console.log('arg 2', arg2);
}

obj.f.defer(1000)(1, 2);
