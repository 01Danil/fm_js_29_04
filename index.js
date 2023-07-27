"use strict";

//const userName = new String("Elon");
//const userName = "Elon".toUpperCase();

// let userName = "Elon";
// userName = userName.toUpperCase();

/**
написать функцию, которая преобразует строку к Jaden case - каждая слова с большой буквы 'To Be Or Not To Be'
1) Разбить строку на слова - split => array
2) Перебираем массив с каждым словом: 
- найти первую букву и сделать большой => [0] toUpperCase
- остальные буквы сделать маленькими => substring(1) to LowerCase
- склеить первую букву и оставшиеся слово (+)
3) Массив превратить назад в строку => join('')
4) Вернуть полученную строку
 */
function stringToUpper(string, separeted = " ") {
  return string
    .split(separeted) // 1) Разбить строку на слова - split => array
    .map(function (element) {
      // 2) Перебираем массив ...
      // - найти первую букву и сделать большой => [0] toUpperCase
      // склеить +
      // остальные буквы сделать маленькими
      return element[0].toUpperCase() + element.substring(1).toLowerCase();
    }) // новый массив из правильных слов
    .join(separeted); // 3) Массив превратить назад в строку => join('')
}
console.log(stringToUpper("tO be OR Not TO bE"));

const str = "tO be OR Not TO bE";
function stringToJadenCase(str) {
  let words = str.split(" ");
  let stringFinal = "";

  for (let i = 0; i < words.length; i++) {
    let first = words[i].substring(0, 1).toUpperCase();
    let leftovers = words[i].substring(1).toLowerCase();
    stringFinal += first + leftovers + " ";
  }
  return stringFinal;
}
console.log(stringToJadenCase(str));

function splitString(string, separeted) {
  const arrayOfString = string.split(separeted);
  for (let i = 0; i < arrayOfString.length; i++) {
    arrayOfString[i] =
      arrayOfString[i].substring(0, 1).toUpperCase() +
      arrayOfString[i].substring(1).toLowerCase();
  }
  return arrayOfString.join(separeted);
}
const tempestString = "sadsadsa dsadas das dss adsa sa sa sad asd";
const space = " ";
console.log(splitString(tempestString, space));
