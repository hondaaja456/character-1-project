const characters = [
  {
    name: "Character 1",
    gif: "https://hondaaja456.github.io/character-1-project/tigor.jpg", // Example gif
    level: 1,
    intimacy: 0,
    weapon: "Sword",
    element: "Fire",
    skills: "Flame Strike",
    color: "#ff7e5f", // Specific color for the background gradient
  },
  {
    name: "Character 2",
    gif: "char2.gif",
    level: 2,
    intimacy: 5,
    weapon: "Bow",
    element: "Wind",
    skills: "Arrow Storm",
    color: "#feb47b",
  },
  {
    name: "Character 3",
    gif: "char3.gif",
    level: 3,
    intimacy: 10,
    weapon: "Hammer",
    element: "Earth",
    skills: "Earthquake",
    color: "#8e44ad",
  },
  {
    name: "Character 4",
    gif: "char4.gif",
    level: 4,
    intimacy: 15,
    weapon: "Staff",
    element: "Water",
    skills: "Tidal Wave",
    color: "#3498db",
  },
  {
    name: "Character 5",
    gif: "char5.gif",
    level: 5,
    intimacy: 20,
    weapon: "Dagger",
    element: "Light",
    skills: "Holy Light",
    color: "#f1c40f",
  },
  {
    name: "Character 6",
    gif: "char6.gif",
    level: 6,
    intimacy: 25,
    weapon: "Axe",
    element: "Dark",
    skills: "Shadow Strike",
    color: "#2c3e50",
  },
];

// Function to open the modal and set the character data
function openModal(characterIndex) {
  const character = characters[characterIndex];
  const modalContent = modal.querySelector(".modal-content");

  // Set modal background gradient color
  modalContent.style.background = `linear-gradient(to right, ${character.color}, #ffffff)`;

  // Set character data in the modal
  document.getElementById("character-gif").src = character.gif;
  document.getElementById("character-name").innerText = character.name;
  document.getElementById("character-level").innerText = character.level;
  document.getElementById("character-intimacy").innerText = character.intimacy;
  document.getElementById("character-weapon").innerText = character.weapon;
  document.getElementById("character-element").innerText = character.element;
  document.getElementById("character-skills").innerText = character.skills;

  // Show the modal
  modal.style.display = "flex";
}

// Event listener to open modal when a slice is clicked
document.querySelectorAll(".slice").forEach((slice, index) => {
  slice.addEventListener("click", () => openModal(index));
});
