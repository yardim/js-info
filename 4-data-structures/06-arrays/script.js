// =====================================
// last good

// const goods = ['Monitor', 'Keyboard', 'Smartphone'];
// console.log(goods[goods.length - 1]);



// =====================================
// new good

// goods.push('Computer');
// console.log(goods);



// =====================================
// music styles

// function changePreLastStyle(styles) {
//   if (styles.length < 2) {
//     return;
//   }

//   styles[styles.length - 2] = 'Classic';
// }

// const styles = ['Djazz', 'Bluse'];
// console.log(styles);

// styles.push('Rock');
// console.log(styles);

// changePreLastStyle(styles);
// console.log(styles);

// styles.shift();
// console.log(styles);

// styles.unshift('Rap', 'Raggy');
// console.log(styles);



// =====================================
// random value

// function getRandomArrayValue(arr) {
//   const length = arr.length;
//   const randomIndex = Math.floor(Math.random() * length);

//   return arr[randomIndex];
// }

// const goods = ['Monitor', 'Keyboard', 'Smartphone'];
// console.log(getRandomArrayValue(goods));



// =====================================
// calc

// function calcEntrance() {
//   const numbers = [];
  
//   while (true) {
//     let answer = prompt('Enter a number', '');
//     let number = +answer;

//     if (answer === '' || answer === null || isNaN(number)) {
//       break;
//     }

//     numbers.push(number);
//   }

//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }

// const result = calcEntrance();
// console.log(result);



// =====================================
// find in arr

// function find(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }

//   return -1;
// }

// const arr = ["test", 2, 1.5, false];
// let res = find(arr, 'test');
// console.log(res);

// res = find(arr, 2);
// console.log(res);

// res = find(arr, 1.5);
// console.log(res);

// res = find(arr, 0);
// console.log(res);




// =====================================
// filter range

// function filterRange(arr, a, b) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= a && arr[i] <= b) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// const arr = [5, 4, 3, 8, 0];
// const res = filterRange(arr, 3, 5);
// console.log(res);
// console.log(arr);



// =====================================
// eratosphen

function getSimpleNumbers(n) {
  if (n < 2) {
    return 1;
  }

  const allNumbers = [];

  for (let i = 2; i < n; i++) {
    allNumbers.push(i);
  }

  for (let p = allNumbers[0]; p * p < n; ) {
    const newNumbers = [];

    
  }

  console.log(allNumbers);
}

getSimpleNumbers(10);