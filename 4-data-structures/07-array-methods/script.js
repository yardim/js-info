// =======================================
// add class

// function addClass(obj, cls) {
//   const existingClasses = obj.className.split(' ');

//   if (existingClasses.indexOf(cls) >= 0) {
//     return;
//   }

//   cls = cls.trim();
//   existingClasses.push(cls);

//   obj.className = existingClasses.join(' ');
// }

// const obj = {
//   className: 'open menu'
// };

// addClass(obj, 'new');
// console.log(obj);

// addClass(obj, 'open');
// console.log(obj);

// addClass(obj, 'me');
// console.log(obj);



// =======================================
// camelize

// function camelize(str) {
//   const strElements = str.split('-');

//   for (let i = 1; i < strElements.length; i++) {
//     const element = strElements[i];
//     let firstLetter = element[0];
//     strElements[i] = firstLetter.toUpperCase() + element.slice(1);
//   }

//   return strElements.join('');
// }

// console.log(camelize('left-border-width'));



// =======================================
// remove class

// function removeClass(obj, cls) {
//   const classes = obj.className.split(' ');
//   const newClasses = [];

//   for (let i = 0; i < classes.length; i++) {
//     const curClass = classes[i];

//     if (cls !== curClass) {
//       newClasses.push(curClass)
//     }
//   }

//   obj.className = newClasses.join(' ');
// }

// const obj = {
//   className: 'my open menu menu'
// };

// removeClass(obj, 'open')
// console.log(obj);

// removeClass(obj, 'menu')
// console.log(obj);



// =======================================
// filter array on place

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// const arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);



// =======================================
// back sort

var arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => {
  return a - b;
});

console.log(arr);
