"use strict"; // es2015

// function Dog(name, IsMale) {
//   this.name = name;
//   this.IsMale = IsMale;
//   this.say = function (voice = 'Wof') {
//     return voice;
//   };
// }

// const testDog = new Dog();
// console.log(testDog);
// const dog1 = new Dog("Oskar", true);
// console.log(dog1);
// console.log(dog1.say());

function User(name, sname, age) {
  this.name = name;
  this.sname = sname;
  this.age = age;
  this.getFullName = function (fullName = name + "" + sname) {
    return fullName;
  };
}

const user1 = new User("Tom ", "Kruz", 18);
console.log(user1);
console.log(user1.getFullName());
const user2 = new User("David ", "Beckhem", 18);
console.log(user2);
console.log(user2.getFullName());
const user3 = new User("Danil ", "Kucheryavko", 18);
console.log(user3);
console.log(user3.getFullName());
