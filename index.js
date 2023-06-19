
const number1 = prompt ('enter number', '');
const number2 = prompt ('enter number', '');
/**
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns {boolean}
 */
const numberCheck = function (number1 = 10, number2 = 5){
	const result = number1 % number2;
	return result > 0 || result < 0;
};
const result = numberCheck();
console.log (result);


/**
 * 
 * @param {number} num 
 * @returns {boolean}
 */
const numberCheck2 = function (num = 0, first = 20, second = 7){
	return num > first && num % second === 0; 
}