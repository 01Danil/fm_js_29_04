"use strict";
/*
- наследование
- инкапсуляция
- полифомирзм
*/
class User {
  constructor(name, sname, age) {
    this._name = name;
    this._sname = sname;
    this.age = age; // setter
    this.isBan = false;
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
  getfullName() {
    return `${this._name} ${this._sname}`;
  }
}
class Moderator extends User {
  constructor(name, sname, age, rights) {
    super(name, sname, age); // ссылка на конструктор родителя
    this.rights = rights;
  }
  deleteMessage(id) {
    return `${this.getfullName()} delete massege ${id}`;
  }
  sayName() {
    return `${this._name}`;
  }
}
class Admin extends Moderator {
  constructor(name, sname, age, rights, prop) {
    super(name, sname, age, rights);
    this.prop = prop;
  }
  // ban(user) {
  // 	if(user instanceof User) {
  // 		user.ifBan = true;
  // 	}
  //   throw new TypeError('not user!!!')
  // }
  // unBan(user) {
  //   if(user instanceof User) {
  // 		user.ifBan = false;
  // 	}
  //   throw new TypeError('not user!!!')
  // }
  toggleBan(user) {
    if (user instanceof User) {
      return (user.ifBan = !user.ifBan);
    }
    throw new TypeError("not user!!!");
  }
}
const user = new User("Rob", "Bob", 24);
const admin = new Admin("Elon", "Musk", 50, { rule: 5 }, 789);
console.log(admin.getfullName());
console.log(admin.toggleBan(user));

// const mod1 = new Moderator("Elon", "Musk", 50, { rule: 1 });
// console.log(mod1.deleteMessage(2));
// console.log(mod1.sayName());

class Squirrel {
  constructor(name, color, jump) {
    this.name = name;
    this.color = color;
    this.jump = jump;
  }
  getNameWhoJumping() {
    return `${this.name} is jumping`;
  }
}
class FlySquirrel extends Squirrel {
  constructor(name, color, jump, distance, fly) {
    super(name, color, jump);
    this.distance = distance;
    this.fly = fly;
  }
  getNameWhoFlying() {
    return `${this.name} is flying`;
  }
}
class MagicSquirrel extends FlySquirrel {
  constructor(name, color, jump, distance, fly, songs, dance, sing) {
    super(name, color, jump, distance, fly);
    this.songs = songs;
    this.dance = dance;
    this.sing = sing;
  }
  getNameWhoDancing() {
    return `${this.name} is dancing`;
  }
  getNameWhoSing() {
    return `songs: ${this.songs.join(", ")}.`;
  }
}
const squirrel = new Squirrel("Sarra", "Orange", "Yes");
const flySquirrel = new FlySquirrel("Mishal", "Green", "Yes", 500, "Yes");
const magicSquirrel = new MagicSquirrel(
  "Luna",
  "Yellow",
  "Yes",
  500,
  "Yes",
  ["p1", "p2", "p3"],
  "Yes"
);
console.log(squirrel.getNameWhoJumping());
console.log(flySquirrel.getNameWhoFlying());

console.log(magicSquirrel.getNameWhoJumping());
console.log(magicSquirrel.getNameWhoFlying());
console.log(magicSquirrel.getNameWhoDancing());
console.log(magicSquirrel);
console.log(magicSquirrel.getNameWhoSing());