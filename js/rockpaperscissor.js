//grab all selectors
const playerText = document.querySelector("#playerText");
const comupterText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const allBtns = document.querySelectorAll(".btn");
//set unassign variables
let player;
let computer;
let result;
//for each loop
allBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    //selecting player
    playerText.textContent = `${player}`;
    comupterText.textContent = `${computer}`;
    resultText.textContent = checkWinner();
  })
);
function computerTurn() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissor";
  }
}
function checkWinner() {
  if (player === computer) {
    return "Draw!";
  } else if (computer === "Rock") {
    return player === "Paper" ? "You Win" : "You Loose!";
  } else if (computer === "Paper") {
    return player === "Scissor" ? "You Win" : "You Loose!";
  } else if (computer === "Scissor") {
    return player === "Rock" ? "You Win" : "You Loose!";
  }
}
