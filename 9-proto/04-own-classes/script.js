function CoffeeMachine(power) {
  this._waterAmount = 0;
  this._WATER_HEAP_CAPACITY = 4200;
  this.power = power
}

CoffeeMachine.prototype._getTimeToBoil = function () {
  return this._waterAmount * this._WATER_HEAP_CAPACITY * 80 / this.power;
}

CoffeeMachine.prototype.run = function () {
  setTimeout(() => {
    console.log('Coffee is ready!');
  }, this._getTimeToBoil());
}

CoffeeMachine.prototype.setWaterAmount = function (waterAmount) {
  this._waterAmount = waterAmount;
}

const coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
