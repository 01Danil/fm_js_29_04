"use strict";

function User(age) {
  if (typeof age !== "number") {
    return new TypeError("age must be number");
  }
  this.age = age;
}
new User("qwe");
