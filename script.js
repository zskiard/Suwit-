const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");

let choices = ["Orang", "Gajah", "Semut"];

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const playerWins =
        (playerChoice === "Gajah" && computerChoice === "Orang") ||
        (playerChoice === "Orang" && computerChoice === "Semut") ||
        (playerChoice === "Semut" && computerChoice === "Gajah");
     const gameResult = playerChoice === computerChoice
        ? "DRAW!"
        : playerWins
            ? "YOU WIN!"
            : "YOU LOSE!";

     playerDisplay.textContent = "PLAYER: " + playerChoice;
     computerDisplay.textContent = "COMPUTER: " + computerChoice;
     resultDisplay.textContent = gameResult;
     resultDisplay.className = gameResult === "DRAW!"
        ? "draw"
        : playerWins
            ? "win"
            : "lose";
}