// function func() {
//   console.log(this.name);
// }
//
// const user = { name: 'Vasya' };
// user.f = func;
//
// user.f();



// =====================================
// calculator

// var calculator = {
//   read: function () {
//     this.val1 = +prompt('Enter value 1', '');
//     this.val2 = +prompt('Enter value 2', '');
//   },
//   sum: function () {
//     return this.val1 + this.val2;
//   },
//   mul: function () {
//     return this.val1 * this.val2;
//   }
// };
//
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );



// =====================================
// ladder

var ladder = {
  step: 0,

  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    console.log(this.step);
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep();
