'use strict';

// ============================
// accumulator with new

// function Accumulator(startingValue) {
//   this.value = startingValue || 0;
//
//   this.read = function () {
//     this.value += +prompt('Enter a value', '');
//   }
// }
//
// const accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);



// ============================
// calculator
//
// function Calculator() {
//   const operations = {
//     '+': function (a, b) {
//       return a + b;
//     },
//     '-': function (a, b) {
//       return a - b;
//     },
//   };
//
//   this.calculate = function (expression) {
//     const split = expression.split(' ');
//     const a = +split[0];
//     const b= +split[2];
//     const operator = split[1];
//     const operation = operations[operator];
//
//     if (operation) {
//       return operation(a, b);
//     }
//
//     return NaN;
//   };
//
//   this.addMethod = function (operator, operation) {
//     operations[operator] = operation;
//   };
// }
//
// const calculator = new Calculator();
// console.log(calculator.calculate('1 + 2'));
// console.log(calculator.calculate('10 - 3'));
// console.log(calculator.calculate('10 / 2'));
//
// calculator.addMethod('/', (a, b) => {
//   return a / b;
// });
// calculator.addMethod('*', (a, b) => {
//   return a * b;
// });
// calculator.addMethod('**', (a, b) => {
//   return Math.pow(a, b);
// });
//
// console.log(calculator.calculate('10 / 2'));
// console.log(calculator.calculate('10 * 2'));
// console.log(calculator.calculate('10 ** 2'));
// console.log(calculator.calculate('3 ** 3'));
