// const monthNumber = prompt("Enter month number\n1-winter\n2-spring\n3-summer\n4-fall");

// switch (monthNumber) {
//   case '1':
//   case '2':
//   case '12':
//     console.log("winter");
//     break;
//   case '3':
//   case '4':
//   case '5':
//     console.log("spring");
//     break;
//   case '6':
//   case '7':
//   case '8':
//     console.log("summer");
//     break;
//   case '9':
//   case '10':
//   case '11':
//     console.log("fall");
//     break;
//   default:
//     console.log("Please, enter the month as a number");
//     break;
// }
// console.log('end')



const monthNumber = prompt('Enter month number');

if (isNaN(monthNumber) || monthNumber === "") {
  console.log("error");
} else if (monthNumber === '1' || monthNumber === '2' || monthNumber === '12') {
  console.log("winter");
} else if (monthNumber === '3' || monthNumber === '4' || monthNumber === '5') {
  console.log("spring");
} else if (monthNumber === '6' || monthNumber === '7' || monthNumber === '8') {
  console.log("summer");
} else if (monthNumber === '9' || monthNumber === '10' || monthNumber === '11') {
  console.log("fall");
} else {
  console.log("Please, enter the month as a number");
}
