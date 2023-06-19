/**
 * 
 * @param {Number} firstSide 
 * @param {Number} secondSide 
 * @param {Number} thirdSide 
 * @returns {Boolean}
 */
const triangleOnThreeSides = function (firstSide = 3, secondSide = 4, thirdSide = 5) {
	return firstSide + secondSide > thirdSide && secondSide + thirdSide > firstSide && firstSide + thirdSide > secondSide
};
console.log(triangleOnThreeSides(1,1,10)); 