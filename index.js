let userChoice;
let computerChoice;
let isWinner = false;

while (!isWinner) {
  userChoice = prompt("Выбери камень, ножницы или бумага:");
  userChoice = userChoice.toLowerCase();

  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      computerChoice = "камень";
      break;

    case 1:
      computerChoice = "ножницы";
      break;

    case 2:
      computerChoice = "бумага";
      break;
  }

  if (
    userChoice === "камень" ||
    userChoice === "ножницы" ||
    userChoice === "бумага"
  ) {
    alert("Компьютер выбрал: " + computerChoice);

    if (userChoice === computerChoice) {
      alert("Ничья, играем ещё раз!");
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      alert("Ты выиграл!");
      isWinner = true;
    } else {
      alert("Ты проиграл!");
      isWinner = true;
    }
  } else {
    alert("Пожалуйста, введи корректный ход: камень, ножницы или бумага.");
  }
}
