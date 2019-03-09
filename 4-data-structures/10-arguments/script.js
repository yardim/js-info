// =================================
// undefined arguments

// function f(x) {
//   if (arguments.length) {
//     return 1;
//   }

//   return 0;
// }

// console.log(f(undefined));
// console.log(f());



// =================================
// sum of arguments

function sum() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));