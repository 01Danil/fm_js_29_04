"use strict";

function createMap(str) {
  const mapStr = new Map();
  for (const letter of str) {
    if (mapStr.has(letter)) {
      const value = mapStr.get(letter);
      mapStr.set(letter, value + 1);
    } else {
      mapStr.set(letter, 1);
    }
  }
  return mapStr;
}

function compare(str1, str2) {
  const mapStr1 = createMap(str1);
  const mapStr2 = createMap(str2);
  console.log(mapStr1);
  console.log(mapStr2);
  if (mapStr1.size !== mapStr2.size) {
    return false;
  }
  for (const letter of mapStr1.keys()) {
    if (mapStr1.get(letter) !== mapStr2.get(letter)) {
      return false;
    }
  }
  return true;
}

console.log(compare("test", "sett"));
console.log(compare("love", "move"));
console.log(compare("qwerty", "qwer"));
