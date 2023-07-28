"use strict";

const people = [
  { name: "Vladlen", age: 25, budget: 40000 },
  { name: "Elena", age: 17, budget: 3400 },
  { name: "Igor", age: 49, budget: 50000 },
  { name: "Mihail", age: 15, budget: 1800 },
  { name: "Vasilisa", age: 24, budget: 25000 },
  { name: "Victoria", age: 38, budget: 2300 },
];
console.log(people.length);

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (let person of people) {
//   console.log(person);
// }

//forEach - делает итерацию(увеличивает n и добавляет это значение к x) для каждого елемента 
// people.forEach(function (person) {
//   console.log(person);
// });

// people.forEach(person =>  console.log(person));

// Map - схож с методом forEach, создает масив и заносит в новую переменную
// const newPeople = people.map(person => person.age * 3);
// console.log(newPeople);

//Filter - филтрует по какому-либо условию исходный массив
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i]);
//   }
// }
// console.log(adults);

// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

//Reduce - служит для получения финального значения совершив итерацию по какому-то массиву
// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget;
// }
// console.log(amount);

// const amount = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount);

//Find - поиск элементов по значению
const igor = people.find((person) => person.name === "Igor");
console.log(igor);

//FindIndex - поиск элементов по индексу
const igorIndex = people.findIndex((person) => person.name === "Igor");
console.log(igorIndex);

// ====================================

const amount = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: Math.sqrt(person.budget),
    };
  })
  .reduce((total, person) => total + person.budget, 0);

console.log(amount);
