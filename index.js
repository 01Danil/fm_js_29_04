"use strict";

// const toString = function () {
//   return `${this.name} ${this.sname}`;
// };
// const animal = {
//   // name: "aninimus",
//   eat: function () {
//     return this.name + " is eating";
//   },
// };
// const man = {
//   countFingers: 5,
//   name: "human",
//   read: function () {
//     return this.name + " is reading";
//   },
// };

// const student = {
//   id: 1,
//   name: "Elon",
//   sname: "Musk",
//   age: 50,
//   toString, // toString: toString,
// };
// man.__proto__ = animal;
// student.__proto__ = man;
// // student.__proto__ = animal; // перезапишет
// console.log(student);
// console.log(student.read());
// console.log(man.eat());

// const student2 = {
//   id: 2,
//   name: "Bob",
//   sname: "Rob",
//   age: 33,
//   toString: toString,
// };

// console.log(student.toQwerty); // undefined
// console.log(student2);
// console.log(student2.toString());
// console.log(student2.toString === student.toString);

const rabbit = {
  countPaw: 4,
  jump: function () {
    return "i`m jumping";
  },
};

const rabbitPet = {
  name: "Nelly",
  pet: function () {
    return "pet " + this.name;
  },
};

const rabbitMagic = {
  say: function () {
    return this.say;
  },
};
rabbitPet.__proto__ = rabbit;
rabbitMagic.__proto__ = rabbitPet;
console.log(rabbit);
console.log(rabbit.countPaw);
console.log(rabbit.jump());
console.log(rabbitPet.name);
console.log(rabbitPet.pet());
console.log(rabbitMagic.say("yes"));
