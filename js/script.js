let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log("Wylosowana liczba to: " + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamien";
  } else if (argMoveId == 2) {
    return "nozyce";
  } else if (argMoveId == 3) {
    return "papier";
  }

  printMessage("Nie znam ruchu o id " + argMoveId + ".");
  return "nieznany ruch";
}

printMessage("Ruch komputera to: " + computerMove);

let playerInput = prompt("Wybierz swój ruch! 1: kamien, 2: papier, 3: nozyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = getMoveName;

if (playerInput == "1") {
  playerMove = "kamien";
} else if (playerInput == "2") {
  playerMove = "nozyce";
} else if (playerInput == "3") {
  playerMove = "papier";
}

printMessage("Twój ruch to: " + playerMove);

function displayResult(computerMove, playerMove) {
  printMessage("Zagralem " + computerMove + " , a Ty " + playerMove);

  if (computerMove == playerMove) {
    printMessage("Remis...");
  } else if (computerMove == "kamien" && playerMove == "papier") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "kamien" && playerMove == "nozyce") {
    printMessage("Komputer wygrywa :((");
  } else if (computerMove == "nozyce" && playerMove == "kamien") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "nozyce" && playerMove == "papier") {
    printMessage("Komputer wygrywa :((");
  } else if (computerMove == "papier" && playerMove == "nozyce") {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == "papier" && playerMove == "kamien") {
    printMessage("Komputer wygrywa :((");
  } else {
    printMessage("Wybierz numer od 1 do 3");
  }
}

displayResult(computerMove, playerMove);
