const sum = function (num1, num2) {
  return num1 + num2;
};
const sub = function (num1, num2) {
  return num1 - num2;
};
const mul = function (num1, num2) {
  return num1 * num2;
};
const div = function (num1, num2) {
  return num1 / num2;
};
const rem = function (num1, num2) {
  return num1 % num2;
};

const calculate = function (num1 = 10, num2 = 2, operator = "+") {
	num1 = pronpt ();
	num2 = prompt ();
  if (isNaN(num1 * num2)) {
    return false;
  }

  let f = null;
  switch (operator) {
    case "+":
      f = sum;
      break;
    case "-":
      f = sub;
      break;
    case "*":
      f = mul;
      break;
    case "/":
      f = div;
      break;
    case "%":
      f = rem;
      break;
    default:
      return null;
  }
  if (typeof f === "function") {
    return f(num1, num2);
  }
  return false;
};

console.log(typeof calculate);
console.log(calculate(undefined, undefined, "-"));
console.log(calculate(4,5,'*'))

const hightOrderFunction = function ( num1, num2, func) {
	return func (num1, num2); //div(74,3)
};
console.log(hightOrderFunction(4,3,mul));
console.log(hightOrderFunction(74,3,div));

