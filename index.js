const lang = prompt("Choose lang:\n1-ua\n2-it\n3-en\n4-es");
// debugger
switch (lang) {
  case "1":
  case "ua":
  case "ukraine":
    console.log("Привіт");
    break;
  case "2":
  case "it":
    console.log("Chao");
    break;
  case "3":
  case "en":
    console.log("Hi");
    break;
  case "4":
  case "es":
    console.log("Hola");
    break;
  default:
    console.log("Repeat choose");
    break;
}
console.log("end");

// if( lang === '1'  || lang === 'ua' ) {
// 	console.log('Привіт')
// } else if( lang === '2'  || lang === 'it' ) {
// 	console.log('Chao')
// } else if( lang === '3'  || lang === 'en' ) {
// 	console.log('Hi')
// } else if( lang === '4'  || lang === 'es' ) {
// 	console.log('Hola')
// } else {
// 	console.log('Repeat choose')
// }
// console.log('End')
