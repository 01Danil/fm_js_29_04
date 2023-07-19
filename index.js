"use strict";
//concat
// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const myArrayConcat1 = [1, 2, 3];
const myArrayConcat2 = [4, 5, 6];
const myArrayConcatUnionArrays = myArrayConcat1.concat(myArrayConcat2);
console.log(myArrayConcatUnionArrays);

//reverse
//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const myArrayRevers1 = [1, 2, 3];
const myArrayReversResult = myArrayRevers1.reverse();
console.log(myArrayReversResult);

//push, unshift
//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const myArrayPush = [1, 2, 3];
const myArrayPushResult = myArrayPush.push(4, 5, 6);
console.log(myArrayPush);
console.log(myArrayPushResult); // длина массива

const myArrayUnshift = [1, 2, 3];
myArrayUnshift.unshift(4, 5, 6);
console.log(myArrayUnshift);

//shift, pop
//5. Дан массив ['js','css', 'html']. Выведите на экран первый элемент и удалите его.
//6. Дан массив ['js','css', 'html']. Выведите на экран последний элемент и удалите его.
const myArrayShift = ["js", "css", "html"];
console.log("myArrayShift до - " + myArrayShift);
const myArrayShiftResult = myArrayShift.shift();
console.log("myArrayShift после - " + myArrayShift);
console.log("Удаленный элемент - " + myArrayShiftResult);

const myArrayPop = ["js", "css", "html"];
console.log("myArrayPop до - " + myArrayPop);
const myArrayPopResult = myArrayPop.pop();
console.log("myArrayPop после - " + myArrayPop);
console.log("Удаленный элемент - " + myArrayPopResult);

//slice
//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const myArraySlice1 = [1, 2, 3, 4, 5];
console.log(myArraySlice1.slice(0, 3));
const myArraySlice2 = [1, 2, 3, 4, 5];
console.log(myArraySlice1.slice(3));

//splice

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
let myArraySplice1 = [1, 2, 3, 4, 5];
myArraySplice1.splice(1, 2);
console.log(myArraySplice1);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
let myArraySplice2 = [1, 2, 3, 4, 5];
let myArraySpliceResult = myArraySplice2.splice(1, 3);
console.log(myArraySpliceResult);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let myArraySplice3 = [1, 2, 3, 4, 5];
myArraySplice3.splice(3, 0, "a", "b", "c");
console.log(myArraySplice3);


// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, &#39;a&#39;, &#39;b&#39;, 2, 3, 4, &#39;c&#39;, 5, &#39;e&#39;].
let myArraySplice4 = [1, 2, 3, 4, 5];
myArraySplice4.splice(0, 5, 1, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
console.log(myArraySplice4);

// sort
// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const myArraySort = [3, 4, 1, 2, 7];
myArraySort.sort();
console.log(myArraySort);


// //1. Необходимо создать функцию hasElem, которая параметрами будетпринимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
// /**
//  * 
//  * @param {array} arr 
//  * @param {string} str
//  * @returns {boolean}	
//  */
// const hasElem = function (arr, str) {
// 	return arr.includes(str);
// };

// //2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число.
// //Если есть - вернуть true, а если нет - вернуть false.
// /**
//  * Return true if the number is in an array, otherwise returns false
//  * @param {array} arr 
//  * @param {number} num 
//  * @returns {boolean}
//  */
// const hasNum = function (arr, num) {
//   return arr.includes(num);
// }

// //3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
// //Если есть -  вернуть true[2,2,1], а если нет - вернуть false[1,2,1]
// /**
//  * Checks if an array contains two identical numbers together
//  * @param {array} arr 
//  * @returns {boolean}
//  */
// const hasTwoIdenticalNumbersTogether = function (arr) {
//   return arr.some((element, index, arr) => index !== 0 && element === arr[index - 1]);
// }

// //4. Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()
// /**
//  * Returns n-size array of random numbers, range from min to max 
//  * @param {number} size 
//  * @param {number} min 
//  * @param {number} max 
//  * @returns {array}
//  */
// const createRandomArr = function (size, min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   const arr = Array(size).fill(0);
//   arr.forEach((e, i, arr) => arr[i] = Math.floor(Math.random() * (max - min + 1)) + min);
//   return arr;
// }
// console.log(createRandomArr(10, 5, 33));

// //5. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
// /**
//  * Calculates average of array
//  * @param {array} arr 
//  * @returns {number}
//  */
// const avg = function (arr) {
//   if (arr.length === 0) return 0;
//   return arr.reduce((accumulator, current) => accumulator + current) / arr.length;
// }
// console.log(avg([12, 15, 20, 25, 59, 79]));
