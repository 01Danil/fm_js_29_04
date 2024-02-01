"use strict";

const user11 = {
	id: 11,
  name: "Slon",
  age: 50,
};
const user1 = {
  id: 1,
  name: "Elon",
  age: 50,
};
const user2 = {
  id: 2,
  name: "Elen",
  age: 40,
};

const msgElon = ["has", "already", "been", "declared"];
const msgElen = ["Uncaught", "SyntaxError", "Unexpected", "Hi!"];

const usersMessage = new Map();
usersMessage.set(user1, msgElon);
usersMessage.set(user2, msgElen);

function getMsgs(user) {
  if (usersMessage.has(user)) {
    return usersMessage.get(user).forEach((msg) => {
      console.log(msg);
      return;
    });
  }
  console.log("404");
}

for (const key of usersMessage.keys()) {
  console.log(key.name, "says:");
  getMsgs(key);
}
