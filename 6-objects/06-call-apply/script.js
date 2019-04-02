// ==================================
// sum args

// function sumArgs() {
//   return [].reduce.call(arguments, (a, b) => a + b);
// }

// console.log(sumArgs(1, 2, 3));



// ==================================
// apply all args

function applyAll() {
  const func = arguments[0];
  const args = [].slice.call(arguments, 1);

  return func.apply(null, args);
}

console.log(applyAll(Math.max, 2, -3, 3));
console.log(applyAll(Math.min, 2, -3, 3));

function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function (a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function (a, b) {
    return a * b;
  });
}

console.log(applyAll(sum, 1, 2, 3));
console.log(applyAll(mul, 2, 3, 4));
