'use strict';

// ======================================
// User class

// function User() {
//   let _firstName;
//   let _surname;

//   this.setFirstName = function(firstName) {
//     _firstName = firstName;
//   }

//   this.setSurname = function(surname) {
//     _surname = surname;
//   }

//   this.getFullName = function() {
//     return _firstName + ' ' + _surname;
//   }
// }

// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");

// alert(user.getFullName()); // Петя Иванов



// ======================================
// Add water amount

// function CoffeeMachine(power, capacity) {
//   var waterAmount = 0;

//   var WATER_HEAT_CAPACITY = 4200;

//   function getTimeToBoil() {
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }

//   this.setWaterAmount = function (amount) {
//     if (amount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }
//     if (amount > capacity) {
//       throw new Error("Нельзя залить больше, чем " + capacity);
//     }

//     waterAmount = amount;
//   };

//   this.addWater = function (amount) {
//     const newAmount = waterAmount + amount;

//     if (newAmount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }

//     if (newAmount > capacity) {
//       throw new Error("Нельзя залить больше, чем " + capacity);
//     }

//     waterAmount = newAmount;
//   };

//   function onReady() {
//     alert('Кофе готов!');
//   }

//   this.run = function () {
//     setTimeout(onReady, getTimeToBoil());
//   };
// }

// var coffeeMachine = new CoffeeMachine(100000, 400);
// coffeeMachine.addWater(200);
// coffeeMachine.addWater(100);
// coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
// coffeeMachine.run();



// ======================================
// onReady setter and isRunning

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var isRunning = false;
  var onReady = function () {
    alert('Кофе готов!');
  };

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.isRunning = function () {
    return isRunning;
  }

  this.setWaterAmount = function (amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function (amount) {
    return waterAmount;
  };

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function () {
    isRunning = true;

    setTimeout(function () {
      isRunning = false;
      onReady();
    }, getTimeToBoil());
  };
}

var coffeeMachine = new CoffeeMachine(50000, 500);
coffeeMachine.setWaterAmount(150);
alert('До: ' + coffeeMachine.isRunning()); // До: false
coffeeMachine.run();
alert('В процессе: ' + coffeeMachine.isRunning());

coffeeMachine.setOnReady(function () {
  alert("После: " + coffeeMachine.isRunning());
});
