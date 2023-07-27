"use strict";
// когда мы подключаем строгий режим - "use strict", то функции, которые мы объявляем обычными способами с помощью декларации, либо когда функция объявленна с помощью выражения они перестают видеть окружение в котором находятся и у них появляеться свой "this", функции теперь не отталкиваются от Window, они не видят Window, у них формируется собственное окружение.

/*
напишите функцию стрелка, которая принимает два числа и возвращает большее из двух чисел
n1>n2 ? n1 : n2
*/

const twoNumber = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
};
console.log(twoNumber(4, 6));

// const getMaxFromTwoNumber = (n1, n2) => {return n1 > n2 ? n1 : n2;};

const getMaxFromTwoNumber = (n1, n2) => (n1 > n2 ? n1 : n2);
console.log(getMaxFromTwoNumber(8, 6));

const showArgs = (a, b, ...c) => {
  console.log(c);
  c.forEach((item) => {
    console.log(this);
  });
};

showArgs(1, 2, 3, 4, 5); // undefined

const obj = {
  prop: 12,
  showArgs,
};
obj.showArgs(1, 1, 1, 1, 1); // {object}
