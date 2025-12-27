const characters = [
  {
    name: "Character 1",
    gif: "https://hondaaja456.github.io/character-1-project/tigor.jpg", // Example gif
    level: 1,
    intimacy: 0,
    weapon: "Sword",
    element: "Fire",
    skills: [
      {
        name: "Flame Strike",
        description: "A powerful fire-based attack that damages all enemies in a radius.",
        sideEffects: "Can cause burn damage over time.",
      }
    ],
    color: "#ff7e5f", 
    glowColor: "#ff3b30",
  },





   },
  {
    name: "Character 2",
    gif: "https://hondaaja456.github.io/character-1-project/tigor.jpg",
    level: 2,
    intimacy: 5,
    weapon: "Bow",
    element: "Wind",
    skills: [
      {
        name: "arrow storm",
        description: "shots a magic arrow upwards splitting to thousands causing a storm of arrows coantinues damage in directed area.",
        sideEffects: "causing a bouncing air magic to another foe damage when hits foe companion",
      }
    ],
    
    color: "#feb47b", 
    glowColor: "#f39c12",
  },
  {
    name: "Character 3",
    gif: "https://hondaaja456.github.io/character-1-project/tigor.jpg",
    level: 3,
    intimacy: 10,
    weapon: "Hammer",
    element: "Earth",
    skills: [
      {
        name: "tetonic shock",
        description: "meelee aoe damage surrounds big range of area.",
        sideEffects: "slows enemy when it hits by 70% in 3 seconds, and buff your attack damage by 30% in 7s",
      }
    ],
    color: "#8e44ad", 
    glowColor: "#9b59b6",
  },
  {
    name: "Character 4",
    gif: "https://hondaaja456.github.io/character-1-project/tigor.jpg",
    level: 4,
    intimacy: 15,
    weapon: "Staff",
    element: "Water",
    skills: [
      {
        name: "tidal wave",
        description: "dash towards foe with aquatic wave in high speed..",
        sideEffects: "gives you a sheild 15% of your health, knocking back foe back.",
      }
    color: "#3498db", 
    glowColor: "#2980b9",
  },
  {
    name: "Character 5",
    gif: "https://hondaaja456.github.io/character-1-project/tigor.jpg",
    level: 5,
    intimacy: 20,
    weapon: "Dagger",
    element: "Light",
    skills: "Holy Light",
    color: "#f1c40f", 
    glowColor: "#f39c12",
  },
  {
    name: "Character 6",
    gif: "https://hondaaja456.github.io/character-1-project/tigor.jpg",
    level: 6,
    intimacy: 25,
    weapon: "Axe",
    element: "Dark",
    skills: "Shadow Strike",
    color: "#2c3e50", 
    glowColor: "#34495e",
  },


  
  // ... Add other characters with similar skill structure
];
    
 


// Modal references
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

  // Set the glow effect (color change for the modal)
  modalContent.style.boxShadow = `0 0 15px ${character.glowColor}, 0 0 30px ${character.glowColor}, 0 0 50px ${character.glowColor}`;

  // Show the modal with a fade-in effect
  modal.style.display = "flex";
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.transition = "opacity 0.3s ease-in-out";
    modal.style.opacity = 1;
  }, 10); // Small delay to allow transition to apply
}

// Function to close the modal
closeModal.addEventListener("click", function() {
  modal.style.transition = "opacity 0.3s ease-in-out";
  modal.style.opacity = 0;
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); // Wait for the fade-out to complete
});

// Allow closing modal when clicking outside the modal content
modal.addEventListener("click", function(e) {
  if (e.target === modal) {  // Check if the click is outside the modal content
    modal.style.transition = "opacity 0.3s ease-in-out";
    modal.style.opacity = 0;
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Wait for the fade-out to complete
  }
});

// Add event listeners to each slice
document.querySelectorAll(".slice").forEach((slice, index) => {
  slice.addEventListener("click", () => openModal(index));
});
