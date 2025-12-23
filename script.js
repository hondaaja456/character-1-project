// Select all slices
const slices = document.querySelectorAll('.slice');

slices.forEach(slice => {
  slice.addEventListener('click', () => {
    const charId = slice.dataset.character;
    // For testing: alert the character
    alert(`Character ${charId} selected!`);
    
    // You can redirect to a character page like this:
    // window.location.href = `character.html?char=${charId}`;
  });
});
