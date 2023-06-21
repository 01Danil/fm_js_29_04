let countTry = 0;
while (true) {
  const userInput = prompt("enter password", '***');
  countTry++;
	alert('try = ' + countTry);
	if (countTry >= 3) {
		alert('you used all your efforts')
		break
	}
  if (userInput === CORRECT_PASSWORD) {
    alert("welcome");
    break;
  }
}

