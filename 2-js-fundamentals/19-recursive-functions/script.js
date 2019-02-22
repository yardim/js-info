// ======================================
// Sum to with a cycle

// function sumTo(n) {
//   let res = n;

//   for (let i = 1; i < n; i++) {
//     res += i;
//   }

//   return res;
// }



// ======================================
// Sum to with a recursion

// function sumTo(n) {
//   if (n === 1) {
//     return n;
//   }

//   return n + sumTo(n - 1);
// }



// ======================================
// Sum to with a recursion

// function sumTo(n) {
//   return (1 + n) / 2 * n;
// }

// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(100));



// ======================================
// Factorial

// function factorial(n) {
//   if (n === 1) {
//     return n;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));



// ======================================
// Fibonachi

function fibo(n) {
  if (n <= 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(7));
console.log(fibo(10));
