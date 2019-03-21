'use strict';

function sum(num1) {
  let sum = num1;

  function inner(num2) {
    sum += num2;
  }

  inner.valueOf = function () {
    return sum;
  };

  inner.toString = function () {
    return sum;
  };

  return inner;
}


console.log(sum(1)(2));

