'use strict';

function sum(num1) {
  let currVal = num1;

  function inner(num2) {
    currVal += num2;
    return inner;
  }

  inner.toString = function () {
    return currVal;
  };

  return inner;
}


console.log(sum(1)(2)(3));

