// ===================================
// add numbers

// alert(addNumbers());

// function addNumbers() {
//   var x = +prompt('Enter x:', '');
//   var y = +prompt('Enter y:', '');

//   return x + y;
// }



// ===================================
// fibBinet

// function fibBinet(n) {
//   var fi = (1 + Math.sqrt(5)) / 2;

//   return Math.round(Math.pow(fi, n) / Math.sqrt(5));
// }

// console.log(fibBinet(77));



// ===================================
// random from 0 to max

// function random(max) {
//   return Math.random() * max;
// }

// console.log(random(3));



// ===================================
// random from min to max

// function random(min, max) {
//   var section = max - min;
//   return Math.random() * section + min;
// }

// console.log(random(3, 6));



// ===================================
// random integer from min to max

function randomInteger(min, max) {
  var section = max - min + 1;
  var rand = Math.floor(Math.random() * section);

  return min + rand;
}

console.log(randomInteger(3, 6));