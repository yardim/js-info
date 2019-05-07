'use strict';

function Machine(power) {
  this._enabled = false;

  this.enable = function () {
    this._enabled = true;
  };

  this.disable = function () {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);
  var waterAmount = 0;
  var timerId;

  this.setWaterAmount = function (amount) {
    waterAmount = amount;
  };

  function onReady() {
    alert('Кофе готов!');
  }

  this.run = function () {
    if (!this._enabled) {
      throw new Error('Ошибка, кофеварка выключена!');
    }

    timerId = setTimeout(onReady, 1000);
  };

  var parentDisable = this.disable;
  this.disable = function () {
    parentDisable.call(this, arguments);
    clearTimeout(timerId);
  }
}



// ===============================
// run only if enabled

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable();



// ===============================
// Fridge

function Fridge(power) {
  Machine.call(this, arguments);

  var food = [];

  var parentDisable = this.disable;
  this.disable = function() {
    if (food.length > 0) {
      throw new Error('Food still here!');
    }

    parentDisable.call(this);
  };

  this.addFood = function () {
    if (!this._enabled) {
      throw Error('Error, fridge is disabled');
    }

    if (food.length + arguments.length > power / 100) {
      throw Error('Error, too much food');
    }

    for (let i = 0; i < arguments.length; i++) {
      food.push(arguments[i]);
    }
  };

  this.getFood = function () {
    return food.slice();
  };

  this.removeFood = function (item) {
    var index = food.findIndex((foodItem) => foodItem.title === item.title);

    if (index === -1) {
      return;
    }

    food.splice(index, 1);
  };

  this.filterFood = function (func) {
    var result = [];

    for (let i = 0; i < food.length; i++) {
      var foodItem = food[i];

      if (func(foodItem)) {
        result.push(foodItem);
      }
    }

    return result;
  }
}

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood("котлета");
// fridge.addFood("сок", "варенье");

// var fridgeFood = fridge.getFood();
// alert(fridgeFood); // котлета, сок, варенье

// // добавление элементов не влияет на еду в холодильнике
// fridgeFood.push("вилка", "ложка");

// alert(fridge.getFood()); // внутри по-прежнему: котлета, сок, варенье



// ===============================
// New methods in a fridge

// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood({
//   title: "котлета",
//   calories: 100
// });
// fridge.addFood({
//   title: "сок",
//   calories: 30
// });
// fridge.addFood({
//   title: "зелень",
//   calories: 10
// });
// fridge.addFood({
//   title: "варенье",
//   calories: 150
// });

// fridge.removeFood("нет такой еды"); // без эффекта
// alert(fridge.getFood().length); // 4

// var dietItems = fridge.filterFood(function (item) {
//   return item.calories < 50;
// });

// dietItems.forEach(function (item) {
//   alert(item.title); // сок, зелень
//   fridge.removeFood(item);
// });

// alert(fridge.getFood().length); // 2



// ===============================
// Fridge - disable overwritten

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
