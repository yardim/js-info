// ================================
// if to ternary and logical constructions

// function checkAgeTernary(age) {
//   return age > 18 ? true : confirm('Parents allowed?');
// }

// function checkAgeLogical(age) {
//   return age > 18 || confirm('Parents allowed?');
// }

// const res = checkAgeTernary(19);
// console.log(res);

// const res2 = checkAgeLogical(19);
// console.log(res2);



// ================================
// min function
// function min(a, b) {
//   return a > b ? b : a;
// }

// console.log(min(2, 5)); // == 2
// console.log(min(3, -1)); // == -1
// console.log(min(1, 1)) // == 1



// ================================
// pow function

function pow(x, n) {
  let res = x;

  for (let i = 2; i <= n; i++) {
    res *= x;
  }

  return res;
}

const x = +prompt('Enter x:', '');
const n = +prompt('Enter n:', '');

console.log(pow(x, n));