'use strict';

// =============================
// logging

// function work(a, b) {}

// function makeLogging(f, log) {
//   return function() {
//     const joinedArgs = [].join.call(arguments, ', ');
//     log.push(joinedArgs);

//     return f.apply(this, arguments);
//   }
// }

// const log = [];
// work = makeLogging(work, log);

// work(1);
// work(5);

// console.log(log);



// =============================
// caching

function makeCaching(f) {
  let lastArg;
  let cache;

  return function (arg) {
    if (lastArg === arg) {
      return cache;
    }

    cache = f(arg);
    lastArg = arg;

    return cache;
  }
}

function f(x) {
  return Math.random() * x;
}

f = makeCaching(f);

let a, b;

a = f(1);
b = f(1);

console.log(a, b, a === b);

b = f(2);

console.log(a, b, a === b);
