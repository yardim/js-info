'use strict';

// ================================
// print numbers per interval

// function printNumbersWithInterval() {
//   let number = 1;

//   let intervalId = setInterval(() => {
//     if (number === 20) {
//       clearInterval(intervalId);
//     }

//     console.log(number++);
//   }, 100);
// }

// printNumbersWithInterval();



// ================================
// print numbers with timeout

// function printNumbersWithInterval() {
//   let number = 1;
//   setTimeout(printNumber, 100);

//   function printNumber() {
//     if (number > 20) {
//       return;
//     }

//     console.log(number++);
//     setTimeout(printNumber, 100);
//   }
// }

// printNumbersWithInterval();



// =================================
// delay function

// function delay(f, delay) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), delay);
//   }
// }

// function f(x, y) {
//   console.log(x, y);
// }

// const f1000 = delay(f, 1000);
// const f1500 = delay(f, 1500);

// f1000('test', 'test 2');
// f1500('test 3', 'test 4');



// =================================
// debounce

function debounce(f, ms) {
  let timeoutId;

  return function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      f.apply(this, arguments);
    }, ms);
  }
}

function test(param) {
  console.log(param);
}

const debouncedTest = debounce(test, 1000);
debouncedTest('test 1');
debouncedTest('test 2');

setTimeout(() => {
  debouncedTest('test 3');
}, 900);

setTimeout(() => {
  debouncedTest('test 4');
}, 1500);

// ===========================
// throttle

// function throttle(f, ms) {
//     let isCalled = false;
//     let args;
//     let _this;

//     return function () {
//         if (!isCalled) {
//             f.apply(this, arguments);
//             isCalled = true;
//         } else {
//             args = arguments;
//             _this = this;
//             return;
//         }

//         setTimeout(() => {
//             if (args) {
//                 f.apply(_this, args);
//             }

//             isCalled = false;
//             args = null;
//         }, ms);
//     }
// }



// ===========================
// throttle 2.0

// function throttle(f, ms) {
//   let lastCallTime;
//   let timerId;

//   return function () {
//     const currentTime = Date.now();

//     if (!lastCallTime) {
//       f.apply(this, arguments);
//       lastCallTime = currentTime;
//       return;
//     }

//     if (currentTime - lastCallTime < 1000) {
//       clearTimeout(timerId);
//       timerId = setTimeout(() => {
//         f.apply(this, arguments);
//         lastCallTime = currentTime;
//       }, ms);
//     }
//   }
// }

// let log = '';

// function f(a) {
//   log += a;
//   console.log(log);
// }

// let f1000 = throttle(f, 1000);

// f1000(1);
// f1000(2);
// f1000(3);
