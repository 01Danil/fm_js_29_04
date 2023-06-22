let countTry = "0";
while (true) {
  const userInput = prompt("enter password");
  countTry++;
  if (isNaN(userInput) || userInput === "" || userInput === null) {
    alert("enter the password in numbers");
		break
  }
  if (userInput < 12) {
    alert("password less");
  }
  if (userInput > 12) {
    alert("password more");
  }
  if (userInput === CORRECT_PASSWORD) {
    alert("You guessed and made " + countTry + " attempts" );
    break;
  }
}
