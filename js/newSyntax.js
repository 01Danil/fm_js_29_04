"use strict";

class User {
  constructor(name, sname, age) {
    this.name = name;
    this.sname = sname;
    this.age = age;
  }
  getFullName() {
    return `${this.name} ${this.sname}`;
  }
  isAdult() {
    return this.age >= ADULT_AGE;
  }
}

const userNew = new User("Tim", "Le", 50);
const userNew2 = new User("Tom", "Bom", 25);
console.log(userNew.getFullName());




class Woker {
  constructor(name, sname, rate, days) {
    this.name = name;
    this.sname = sname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days + ` $`;
  }
}

const newWoker = new Woker("Elton", "Jon", 25, 24);
// console.log(newWoker.getSalary())
