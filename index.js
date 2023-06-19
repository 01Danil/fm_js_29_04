// const triangleOnThreeSides = function (firstSide = 3, secondSide = 4, thirdSide = 5) {
// 	return firstSide + secondSide > thirdSide && secondSide + thirdSide > firstSide && firstSide + thirdSide > secondSide
// };
// console.log(triangleOnThreeSides(1,1,10)); 

// const calkVolumeSfera = function (radius = 100, PI = 3.14) {
// 	if ( radius <=0 ) {
// 		return NaN; // false, null
// 	}
// 	return 4*PI*(radius**3)/3;
// };
// console.log(calkVolumeSfera(23, 3.1415926));

const userInput = prompt ('Enter something 1');
const ValueToUser = function () {
	if (userInput === null || userInput === '') {
		return 'Повторите ввод';
	}
	return 'Ты ввел: ' + userInput;
};
console.log(ValueToUser());

const f = function () {
	const input = prompt ('Input something 2');
	if (input === null || input === '') {
		return 'Repeat input';
	}
	return 'You enter: ' + input;
};
console.log(f());

const userValueReturn = function () {
	const inputValue = prompt ('Enter something 3')
	if (inputValue) {
		return 'You enter ' + inputValue;
	}
	return 'Repeat input';
};
console.log(userValueReturn());
