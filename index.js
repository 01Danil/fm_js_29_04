/* Логическое сложение ИЛИ || */
/* Возвращает первую правду или последнюю ложь */
/* 1+0=1 1+1=2 0+1=1 0+0=0 */


/* Логическое умножение И && */
/* Возвращает последнюю правду или первую ложь */
/* 1*0=0  0*1=0  0*0=0  1*1=1 */

// let cond = 'cxcz' || 10;
// console.log(cond);


let number = 21;

let min = 10;
let max = 20;

if( number<min || number>max ){
	console.log('You win', number)
}

// if( number>=min && number<=max){
// 	console.log('You win!', number)
// };