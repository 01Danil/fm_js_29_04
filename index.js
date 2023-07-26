"use strict";

// recursion
// рекурсия небезопасна !!!
// первым описываем базовый случай !!!

function recursion(num) {
  if (num === 0 || num < 0) {
    return;
  }
  console.log(num);
  recursion(num - 1);
}

recursion(4);

console.log("Info!!!");

/*
4! = 4 * 3!
3! = 3 * 2!
2! = 2 * 1!
1! = 1
*/

const factorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
	return n*factorial(n-1)
};
console.log(factorial(3))