"use strict";

class User {
  /**
   *
   * @param {string} name
   * @param {string} sname
   * @param {number} age
   */
  constructor(name, sname, age) {
    this.name = name;
    this.sname = sname;
    this.age = age; // setter
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("value must be number");
    }
    if (age < 0 || age > MAX_AGE) {
      throw new RangeError(`range must be: 0 ... ${MAX_AGE}`);
    }
    this._age = age;
  }
  getFullName() {
    return `${this.name} ${this.sname}`;
  }
  isAdult() {
    return this.age >= ADULT_AGE;
  }
}

const userNew = new User("Tim", "Le", 55);
const userNew2 = new User("Tom", "Bom", 25);
userNew.age = 12;
console.log(userNew.age);
console.log(userNew);

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
