const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const nameInput = document.getElementById("nameInput");
const sortButton = document.getElementById("sortButton");
const tryAgainButton = document.getElementById("tryAgainButton");
const result = document.getElementById("result");

function getRandomHouse() {
  const randomIndex = Math.floor(Math.random() * houses.length);
  return houses[randomIndex];
}

function assignHouse() {
  const name = nameInput.value.trim();
  if (name === "") {
    result.textContent = "⚠️ Please enter your name first!";
    return;
  }
  const house = getRandomHouse();
  result.textContent = `${name} belongs in ${house}!`;
}

sortButton.addEventListener("click", assignHouse);
tryAgainButton.addEventListener("click", assignHouse);
