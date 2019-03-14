// 'use strict';

// ============================
// sum with closure

// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }

// console.log(sum(2)(3));



// ============================
// string buffer

// function makeBuffer() {
//   let buffer = '';

//   const bufferFunction = function (str) {
//     if (str !== undefined) {
//       buffer += str;
//       return;
//     }

//     return buffer;
//   }

//   bufferFunction.clear = function() {
//     buffer = '';
//   }

//   return bufferFunction;
// }

// const buffer = makeBuffer();

// buffer('a');
// buffer('b');
// buffer('c');
// buffer(0);
// buffer(1);
// buffer(0);
// buffer(false);
// console.log(buffer());

// buffer.clear();
// console.log(buffer());



// ============================
// sort function

// const users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// function byField(field) {
//   return function(user1, user2) {
//     return user1[field] > user2[field] ? 1 : -1;
//   }
// }

// users.sort(byField('age'));
// console.log(users);



// ============================
// filter function

// function filter(arr, func) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (func(element)) {
//       newArr.push(element);
//     }
//   }

//   return newArr;
// }

// function inBetween(lowBorder, topBorder) {
//   return function(item) {
//     return item >= lowBorder && item <= topBorder;
//   }
// }

// function inArray(arr) {
//   return function(item) {
//     return arr.indexOf(item) >= 0;
//   }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( filter(arr, (item) => item % 2 === 0) );
// console.log( filter(arr, inBetween(3, 6)) );
// console.log( filter(arr, inArray([1, 2, 10])) );



// ============================
// functions army

function makeArmy() {
  const shooters = [];
  const makeShooter = function(number) {
    return function() {
      return number;
    }
  };

  for (var i = 0; i < 10; i++) {
    const shooter = makeShooter(i);
    shooters.push(shooter);
  }

  return shooters;
}

const army = makeArmy();
console.log(army[0]());
console.log(army[1]());
console.log(army[9]());
