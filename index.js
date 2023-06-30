"use strict";
// let n = 10;
// const str1 = "sada`" + n + "sad";
// const str2 = `let n = ${n}
// trenningMath('www,10') = ${trenningMath('www,10')}`;
// alert(str2);

// const sum = function (number1, number2) {
//   return number1 + number2;
// };
// const sub = function (number1, number2) {
//   return number1 - number2;
// };
// const mul = function (number1, number2) {
//   return number1 * number2;
// };
// const div = function (number1, number2) {
//   return number1 / num2;
// };
// const rem = function (number1, number2) {
//   return number1 % number2;
// };

// const arithmeticExample = function (number1 = -5, number2 = 7, operator = "+") {
//   let f = null;
//   switch (operator) {
//     case "+":
//       f = sum;
//       break;
//     case "-":
//       f = sub;
//       break;
//     case "*":
//       f = mul;
//       break;
//     case "/":
//       f = div;
//       break;
//     case "%":
//       f = rem;
//       break;
//     default:
//       null;
//   }
//   if (typeof f === "function") {
//     return f(number1, number2);
//   }
//   return false;
// };
// const correctAnswer = "-2";
// while (true) {
//   const userInput = prompt("how much - (-5 - 7) = ?");
//   if (isNaN(userInput) || userInput === "" || userInput === null) {
//     alert("enter the correct answer");
//   } else if (userInput > correctAnswer || userInput < correctAnswer) {
//     alert("error, please try again");
//   } else if (userInput === correctAnswer) {
//     alert("You guessed the correct answer - " + correctAnswer);
//     break;
//   }
// }
// console.log(arithmeticExample(-5, 7, "-"));

/**
 *
 * @param {number} number1
 * @param {number} number2
 * @param {string} operator *|-|+|/
 * @returns {boolean}
 */
const trenningMath = function (number1 = 10, number2 = 2, operator = "+") {
  if (isNaN(number1 * number2)) {
    return false;
  }
  let result = null;
  switch (operator) {
    case "*":
      result = number1 * number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "+":
      result = number1 + number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      return false;
  }
  while (true) {
    const answerUser = prompt(
      `${number1} ${operator} ${number2} = `,
      "you answer"
    );
    if (result === Number(answerUser)) {
      return true;
    }
  }
};

const message = trenningMath() ? "win" : "error";
alert(message);
