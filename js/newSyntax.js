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
    User.amountUser++;
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
  get fullName() {
    return `${this.name} ${this.sname}`;
  }
  set fullName(fullNameStr) {
    if (typeof fullNameStr !== "string") {
      throw new TypeError("must be string");
    }
    const arrayFullName = fullNameStr.split(" ").filter((w) => w !== "");
    if (arrayFullName.length !== 2) {
      throw new RangeError("must be 2");
    }
    this.name = arrayFullName[0];
    this.sname = arrayFullName[1];
  }
  isAdult() {
    return this.age >= ADULT_AGE;
  }
  static amountUser = 0;
  static createTestUser() {
    return new User("Anonim", "Anonims", 22);
  }
}
const test = User.createTestUser();
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
    this.days = days; // setter
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("value must be string");
    }
    if (name.length < MIN_LATTER || name.length > MAX_LETTER) {
      throw new RangeError(
        `range must be or ${MIN_LATTER} to ${MAX_LETTER} letter`
      );
    }
    this._name = name;
  }
  get sname() {
    return this._sname;
  }
  set sname(sname) {
    if (typeof sname !== "string") {
      throw new TypeError("value must be string");
    }
    if (sname.length < MIN_LATTER || sname.length > MAX_AGE) {
      throw new RangeError(`range must be or ${MIN_LATTER} to ${MAX_LETTER}`);
    }
    this._sname = sname;
  }
  get rate() {
    return this._rate;
  }
  set rate(rate) {
    if (typeof rate !== "number") {
      throw new TypeError("value must be number");
    }
    if (rate < 0) {
      throw RangeError("range must be from 0");
    }
    this._rate = rate;
  }
  get days() {
    // get - возвращаем значение свойства
    return this._days;
  }
  set days(days) {
    // set - устанавливаем значение свойства
    if (typeof days !== "number") {
      throw new TypeError("value must be numbet");
    }
    if (days < 0 || days > MaxWorkingDays) {
      throw new RangeError(`range nust be: 0 ... ${MaxWorkingDays} days`);
    }
    this._days = days;
  }
  getSalary() {
    return this.rate * this.days; // - this.days - обращаемся к getter
  }
}

const newWoker = new Woker("Elton", "Jon", 25, 24);
console.log(newWoker.getSalary());
console.log(newWoker);
