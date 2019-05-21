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
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
console.log(fibo(9));
console.log(fibo(10));



// ======================================
// Fibonachi

function fiboCycle(n) {
  if (n === 1) {
    return 0;
  }

  if (n <= 3) {
    return 1
  }

  let nMin2 = 1;
  let nMin1 = 1;
  let current;

  for (let i = 4; i <= n; i += 1) {
    current = nMin1 + nMin2;
    nMin2 = nMin1;
    nMin1 = current;
  }

  return current;
}

console.log(fiboCycle(1));
console.log(fiboCycle(2));
console.log(fiboCycle(3));
console.log(fiboCycle(4));
console.log(fiboCycle(5));
console.log(fiboCycle(6));
console.log(fiboCycle(7));
console.log(fiboCycle(8));
console.log(fiboCycle(9));
console.log(fiboCycle(10));