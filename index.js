"use strict"; // es2015

const cat1 = {
  //literal
  name: "Muha",
  isMale: false,
  age: 3,
  breed: "street",
  color: "grey",
  say: function () {
    return "meow";
  },
  run: function () {
    return "i'm runing";
  },
};
// alert (cat1);
console.log(cat1);
console.log(cat1.age);
cat1.age++;
console.log(cat1.say());
console.log(cat1.run());
cat1.colorEye = "green";
console.log(cat1);
//cat1.colorEye = undefined;
delete cat1.breed;
console.log(cat1);



const dog1 = {
  name: "Lika",
  isMale: false,
  say: function () {
    return "Gav";
  },
};
console.log(dog1);

const dog2 = {
  name: "Charly",
  isMale: true,
  say: function () {
    return "Af";
  },
};
console.log(dog2);