const calcFactorial = function (number = 1) {
  if (number < 0) {
    return null;
  };
  if (number === 0 || number === 1) {
    return 1;
  };
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

debugger
console.log(calcFactorial()); // 120
console.log(calcFactorial(3)); // 6
