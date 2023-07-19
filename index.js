"use strict";
/**
 *
 * @param {function} howSay
 * @param {string} word
 */
function sayWord(howSay, word = "qwerty") {
  howSay(word);
}

sayWord(console.log, "asd");
// sayWord(alert, "dog");
// sayWord(prompt, "dog");
// sayWord(confirm, "dog");
