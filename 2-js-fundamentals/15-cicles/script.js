// =======================================
// Even numbers

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }



// =======================================
// Switch <for> to <while>

// var i = 0;

// while (i < 3) {
//   console.log('Number ' + i + '!');
//   i++;
// }



// =======================================
// Number greater than 100

// while (true) {
//   var number = prompt('Enter number greater than 100', '');

//   if (number > 100 || number === null) break;
// }



// =======================================
// Simple numbers

for (var i = 2; i < 10; i++) {
  var isSimple = true;

  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      isSimple = false;
      break;
    }
  }

  if (isSimple) {
    console.log(i);
  }
}
