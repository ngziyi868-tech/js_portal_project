let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date")

date.textContent = currentDate;

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);