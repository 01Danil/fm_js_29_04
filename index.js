// найти периметр квадрата
// строна*4

// /**
//  * 
//  * @param {number} side 
//  * @returns {null | number}
//  */
// const calcPerimetrSquare = function (side = 0){
// 	if( side < 0 ){
// 		return null;
// 	}
// 	return side * 4;
// };
// const result = calcPerimetrSquare(8);
// console.log(result);

/** Age check
 * 
 * @param {number} age 
 * @returns {boolean}
 */
const isAdult = function (age){
	return age >=18
};
const result = isAdult(17);
console.log(result);