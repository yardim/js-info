'use strict';

// ======================================
// Scope

// const name = 'Vasya';

// function sayHi(userName) {
//   alert(userName);
// }

// sayHi(name);



// ======================================
// nested functions

function sayHiBye(firstName, lastName) {
  console.log("Привет, " + getFullName());
  console.log("Пока, " + getFullName());

  function getFullName() {
    debugger;
    return firstName + " " + lastName;
  }
}

sayHiBye("Вася", "Пупкин"); // Привет, Вася Пупкин ; Пока, Вася Пупкин
