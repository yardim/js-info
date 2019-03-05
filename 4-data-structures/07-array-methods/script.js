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

// var arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => {
//   return a - b;
// });

// console.log(arr);



// =======================================
// copy and sort arr

// const arr = ['HTML', 'JS', 'CSS'];
// const sorted = arr.slice().sort();
// console.log(arr);
// console.log(sorted);



// =======================================
// shake arr

// const arr = [1, 2, 3, 4, 5];

// arr.sort(() => {
//   if (Math.random() > 0.5) {
//     return 1;
//   }

//   return -1;
// });

// console.log(arr);



// =======================================
// sort objects
// const vasya = { name: "Вася", age: 23 };
// const masha = { name: "Маша", age: 18 };
// const vovochka = { name: "Вовочка", age: 6 };

// const people = [vasya, masha, vovochka];

// people.sort((personA, personB) => personA.age - personB.age);

// // теперь people: [vovochka, masha, vasya]
// console.log(people) // 6



// =======================================
// print list

// const list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

// function printListWithCycle(list) {
//   do {
//     console.log(list.value);
//   } while (list = list.next);
// }

// // printListWithCycle(list);

// function printListWithRecursion(list) {
//   console.log(list.value);

//   if (list.next) {
//     printListWithRecursion(list.next);
//   }
// }

// // printListWithRecursion(list);

// function printReverseListWithCycle(list) {
//   const arr = [];

//   do {
//     arr.push(list.value);
//   } while (list = list.next);

//   arr.reverse();
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// printReverseListWithCycle(list);

// function printReverseListWithRecursion(list) {
//   if (list.next) {
//     printReverseListWithRecursion(list.next);
//   }

//   console.log(list.value);
// }

// printReverseListWithRecursion(list);



// =======================================
// filter anagrams

// function normalize(str) {
//   return str
//     .split('')
//     .sort()
//     .join('')
//     .toLowerCase();
// }

// function aclean(arr) {
//   const normalized = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = normalize(arr[i]);
//     normalized.push(element);
//   }

//   const clear = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = normalize(arr[i]);

//     if(normalized.indexOf(element, i + 1) < 0) {
//       clear.push(arr[i]);
//     }
//   }

//   return clear;
// }

// const arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
// aclean(arr);



// =======================================
// get only unique values

function unique(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (arr.indexOf(el, i + 1) < 0) {
      unique.push(el)
    }
  }

  console.log(unique);
}

const strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"];

unique(strings);
