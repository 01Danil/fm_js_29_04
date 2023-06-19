// const triangleOnThreeSides = function (firstSide = 3, secondSide = 4, thirdSide = 5) {
// 	return firstSide + secondSide > thirdSide && secondSide + thirdSide > firstSide && firstSide + thirdSide > secondSide
// };
// console.log(triangleOnThreeSides(1,1,10)); 

const calkVolumeSfera = function (radius = 100, PI = 3.14) {
	if ( radius <=0 ) {
		return NaN; // false, null
	}
	return 4*PI*(radius**3)/3;
};
console.log(calkVolumeSfera(23, 3.1415926));