"use strict";
// function StudentPrototype() {
//   this.toString = function () {
//     return `${this.name} ${this.sname}`;
//   };
//   this.read = function () {
//     return this.name + " is reading";
//   };
//   this.eat = function () {
//     return this.name + " is eating";
//   };
// }
// function Student(name, sname, age = 22) {
//   this.name = name;
//   this.sname = sname;
//   this.age = age;
// }
// Student.prototype = new StudentPrototype();

// const student = new Student("Elon", "Musk", 50);
// console.log(student);

function LadderProto() {
  this.up = function () {
    this.step++;
		return this;
  };
  this.down = function () {
    this.step--;
		return this;
  };
  this.showStep = function () {
    return this.step;
  };
}
function Ladder() {
  this.step = 0;
}

Ladder.prototype = new LadderProto();

const stairs = new Ladder();
console.log(stairs.showStep()); // 0
console.log(stairs.up().up().up().down().up().showStep());
// ladder.up();
// console.log(ladder.showStep()); // 1
// ladder.up();
// console.log(ladder.showStep()); // 2
// ladder.up();
// console.log(ladder.showStep()); // 3
// ladder.down();
// console.log(ladder.showStep()); // 2
