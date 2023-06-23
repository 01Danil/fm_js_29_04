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

// function User(name, sname, age) {
//   this.name = name;
//   this.sname = sname;
//   this.age = age;
//   this.getFullName = function () {
//     return this.name + " " + this.sname;
//   };
// }

// const user1 = new User("Tom", "Kruz", 18);
// user1.sname = 'Musk';
// console.log(user1.sname);
// console.log(user1);
// console.log(user1.getFullName());

// const user2 = new User("David", "Beckhem", 18);
// console.log(user2);
// console.log(user2.getFullName());

// const user3 = new User("Danil", "Kucheryavko", 18);
// console.log(user3);
// console.log(user3.getFullName());

// function Country(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function () {
//     return this.population / this.area;
//   };
// }

// const usa = new Country("USA", 333287557, 3796742);
// console.log(usa);
// console.log(usa.getDensity());

// const ukraine = new Country("Ukraine", 36744636, 603628);
// console.log(ukraine);
// console.log(ukraine.getDensity());

// const russia = new Country("Russia", 146447424, 17125191);
// console.log(russia);
// console.log(russia.getDensity());

// const territoryDifferenceUsaAndUkrain = usa.area / ukraine.area;
// console.log("Разница в территории США и Украина - " + territoryDifferenceUsaAndUkrain);
// const populationDifferenceUsaAndUkrain = usa.population / ukraine.population;
// console.log("Разница в населении США и Украина - " + populationDifferenceUsaAndUkrain);

// const territoryDifferenceUsaAndRussia = russia.area / usa.area;
// console.log("Разница в территории Россия и США - " + territoryDifferenceUsaAndRussia);
// const populationDifferenceUsaAndRussia = usa.population / russia.population;
// console.log("Разница в населении США и Россия - " + populationDifferenceUsaAndRussia);

// const territoryDifferenceRussiaAndUkrain = russia.area / ukraine.area;
// console.log("Разница в территории Россия и Украина - " + territoryDifferenceRussiaAndUkrain);
// const populationDifferenceRussiaAndUkrain = russia.population / ukraine.population;
// console.log("Разница в населении Россия и Украина - " + populationDifferenceRussiaAndUkrain);

function Auto(marka = "BMW", maxSpeed = 450) {
  this.name = marka;
  this.maxSpeed = maxSpeed;
  this.speed = 0;
  // this.accelerate = function (value = 10) {
  //   if (value > 0) {
  //     this.speed += value;
  //   }
  //   if (this.speed > this.maxSpeed) {
  //     return (this.speed = this.maxSpeed);
  //   }
  //
  // };

  this.accelerate = function (value = 10) {
    if (value < 0) {
      return this.speed;
    }
    this.speed += value;
    if (this.speed > this.maxSpeed) {
      return (this.speed = this.maxSpeed);
    }
    return this.speed;
  };

  this.decelerate = function (value = 10) {
    if (value < 0) {
      return this.speed;
    }
    this.speed -= value;
    if (this.speed <= 0) {
      return (this.speed = 0);
    }
    return this.speed;
  };
  this.stop = function () {
    return (this.speed = 0);
  };
}

const auto = new Auto();
console.log(auto);
console.log(auto.accelerate(70));
console.log(auto.accelerate(70));
console.log(auto.speed);
console.log(auto.decelerate(20));
console.log(auto.speed);
console.log(auto.stop());



// ==============================================================================
//Example

// 11111111111111111111111111111111111111
// const uniqueObject = {
//   prop1: 12,
// 	say: function () {
//     return "meow";
//   },
// };
// console.log(uniqueObject);
// console.log(uniqueObject.say());

// 22222222222222222222222222222222222222
// function Country(name, population, area) {
//   this.name = name;
//   this.getDensity = function () {
//     return this.population / this.area;
//   };
// }
// const usa = new Country("USA", 333287557, 3796742);
// console.log(usa);
// console.log(usa.getDensity());
