"use strict";

// Деструктуризация - способ создать переменную

// const fullName = (user) => {
//   return `${user.commonInfo.name} ${user.commonInfo.sname}`;
// };

// const fullName = ({ commonInfo: { name, sname } }) => {
//   return `${name} ${sname}`;
// };

const fullName = ({
  commonInfo: { sname },
  contactInfo: {
    phone: { work: phoneWork },
  },
}) => {
  return `${sname} ${phoneWork}`;
};

const user = {
  commonInfo: {
    id: 1,
    name: "Elon",
    sname: "Musk",
    bday: {
      day: 28,
      month: 6,
      year: 1971,
    },
  },
  contactInfo: {
    phone: {
      home: "123-23-23",
      work: "456-45-45",
    },
    adress: {
      country: "USA",
      town: "NY",
    },
    email: "elon@gmail.com",
  },
  professional: "engineer",
};

const { professional, ...restUser } = user; // второй случай оператора ...rest

const arr = [1000, 2, 78, 5, 6, 445];
const [first, ...restArr] = arr;
const [,,third,,qwe] = arr;

// const {
//   professional,
//   contactInfo: { email },
//   commonInfo: {
//     bday: { day: userBDay },
//   },
// } = user;
// console.log(email);
// console.log(professional);
// console.log(userBDay);

// const { professional: userProf } = user; // userProf - Деструктуризация
// console.log(userProf);

// const { professional} = user; // userProf - Деструктуризация
// console.log(professional);
