const character = document.getElementById('character');
const toilet = document.getElementById('toilet');
const poop = document.getElementById('poop');

let characterX = 0;
let characterY = 0;

// Function to move the character
function moveCharacter(direction) {
    switch (direction) {
        case 'ArrowLeft':
            characterX -= 10;
            break;
        case 'ArrowRight':
            characterX += 10;
            break;
        case 'ArrowUp':
            characterY -= 10;
            break;
        case 'ArrowDown':
            characterY += 10;
            break;
    }}
    character.style.left = characterX + 'px';
    character.style.top = characterY + 'px';
    // ... (previous moveCharacter code)

    // Check if character reaches the toilet
// Event listener to move character with arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key.startsWith('Arrow')) {
        moveCharacter(e.key);
    }
});

// Event listener to trigger the "shits" when the space bar is pressed
// ... (previous code)

// Event listener to trigger the "shits" when the space bar is released
document.addEventListener('keyup', (e) => {
    if (e.key === ' ') {
        // Show the "poop" element
        poop.style.left = characterX + 'px';
        poop.style.top = characterY + 'px';
        poop.style.display = 'block';

        // Hide the "poop" element after a delay (adjust the delay as needed)
        setTimeout(() => {
            poop.style.display = 'none';
        }, 1000); // 1000 milliseconds (1 second) delay

        // Check if "poop" reaches the toilet and trigger transition
        if (
            characterX + poop.offsetWidth >= toilet.offsetLeft &&
            characterX <= toilet.offsetLeft + toilet.offsetWidth &&
            characterY + poop.offsetHeight >= toilet.offsetTop &&
            characterY <= toilet.offsetTop + toilet.offsetHeight
        ) {
            window.location.href = 'life1.html';
        }
    }
});
