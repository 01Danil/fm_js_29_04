"use strict";

// let userInput;
// let userInputNumber;

// while (true) {
//   userInput = prompt("Enter number");
//   userInputNumber = Number(userInput);
//   if (userInputNumber > 0 && Number.isInteger(userInputNumber)) {
//     break;
//   }
// }
// let sum = 0;
// for (let i = 1; i <= userInputNumber; i++) {
//   sum += i;
// }
// console.log(sum);

class Book {
  constructor(autor, bookTitle, yearOfPublishing, publishingHouse) {
    this.autor = autor;
    this.bookTitle = bookTitle;
    this.yearOfPublishing = yearOfPublishing;
    this.publishingHouse = publishingHouse;
  }
  set yearOfPublishing(yearOfPublishing) {
    const date = new Date().getFullYear();
    if (yearOfPublishing > date) {
      throw new RangeError("Wrong date");
    }
    this._yearOfPublishing = yearOfPublishing;
  }
}

class EBook extends Book {
  constructor(autor, bookTitle, yearOfPublishing, publishingHouse, format, electronicNumber) {
    super(autor, bookTitle, yearOfPublishing, publishingHouse);
    this.format = format;
    this.electronicNumber = electronicNumber;
  }
}

const book = new EBook ('Elon Musk', 'Way Up', 2000, 'Publishing House', 'pdf', 123)
