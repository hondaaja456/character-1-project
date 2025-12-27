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
  // Add other characters here...
];

// Select the modal and close button
const modal = document.getElementById("character-modal");
const closeModal = document.getElementById("close-modal");

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

// Function to close the modal
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// Event listener to open modal when a slice is clicked
document.querySelectorAll(".slice").forEach((slice, index) => {
  slice.addEventListener("click", () => openModal(index));
});
