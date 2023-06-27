const numbersFromMaximumToMinimum1 = function (max, min, multiplicity = 3) {
  if (max === 0 || min === 0 || max < min) {
    return false;
  }
  for (let i = max; i >= min; i--) {
    if (i % multiplicity === 0) {
      console.log(i);
    }
  }
  return true;
};

console.log(numbersFromMaximumToMinimum1(20, 15, 3));

const numbersFromMaximumToMinimum2 = function (max = 10, min = 1, multiplicity = 3) {
  if (max === 0 || min === 0 || max < min) {
    return false;
  }
  for (let i = max; i >= min; i--) {
    if (i % multiplicity === 0) {
      continue;
    }
		console.log(i);
  }
  return true;
};
 debugger
console.log(numbersFromMaximumToMinimum2());

const numbersFromMaximumToMinimum3 = function (
  max = 10,
  min = 1,
  multiplicity = 3
) {
  if (max === 0 || min === 0 || max < min) {
    return false;
  }
  let i = max;
  while (i >= min) {
    if (i % multiplicity === 0) {
			i--;
      continue;
    }
    console.log(i);
    i--;
  }
  return true;
};
// debugger
console.log(numbersFromMaximumToMinimum3());
