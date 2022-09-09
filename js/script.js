function playGame(argMoveId) {
  const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
  printMessage("Ruch komputera to: " + computerMove);

  const playerMove = getMoveName(argMoveId);
  printMessage("Ruch gracza: " + playerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById("kamien").addEventListener("click", function () {
  playGame(1);
});
document.getElementById("nozyce").addEventListener("click", function () {
  playGame(2);
});
document.getElementById("papier").addEventListener("click", function () {
  playGame(3);
});

function buttonClicked(argMoveId) {
  let playerMove;
  if (argMoveId == 1) {
    playerMove = "kamien";
  } else if (argMoveId == 2) {
    playerMove = "nozyce";
  } else if (argMoveId == 3) {
    playerMove = "papier";
  } else {
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return;
  }
  displayResult(computerMove, playerMove);
}

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
