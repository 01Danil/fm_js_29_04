// Conditional (ternary) operator

//true | false
const isEven = function (number = 0) {
	return number % 2 === 0;
};
console.log(isEven());

// 'even' | 'odd'
const returnEvenOrOdd = function (number = 0) {
	return ( number % 2 === 0 ) ? 'even' : 'odd';
};
console.log(returnEvenOrOdd());