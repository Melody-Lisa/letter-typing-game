const input = document.getElementById("letter");
const result = document.getElementById("result");
const audioBtn = document.getElementById("audio-btn");
const audioElement = document.getElementById("letter-sound");
let audioEnabled = false; // Audio starts off

// Default audio button state
document.getElementById("off").style.display = "block";
document.getElementById("on").style.display = "none";

// Auto-focus input field on page load
window.onload = function () {
    input.focus();
};

// Keep focus on the input field
input.addEventListener("blur", function () {
    setTimeout(() => input.focus(), 10);
});

// Allow only one character in the contenteditable div
input.addEventListener("input", function () {
    const letter = input.textContent.trim();

    if (letter.length > 1) {
        input.textContent = letter.charAt(letter.length - 1);
        moveCaretToEnd(input);
    }

    showLetter();
    if (audioEnabled) {
        playSound();
    }
});

// Move the caret (cursor) to the end of the contenteditable div
function moveCaretToEnd(el) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
}

// Convert input letter to uppercase and lowercase
function showLetter() {
    const letter = input.textContent.trim();
    result.innerHTML = letter.length === 1 ? `${letter.toUpperCase()} ${letter.toLowerCase()}` : "";
}

// Play the letter sound
function playSound() {
    const letter = input.textContent.trim().toUpperCase();
    if (letter.length === 1) {
        const filePath = `assets/audio/${letter}-sound.wav`;
        audioElement.src = filePath;
        audioElement.load(); // Ensures the new file is ready to play
        audioElement.play().catch(error => console.error("Audio play failed", error));
    }
}

// Toggle audio button state
audioBtn.addEventListener("click", function () {
    audioEnabled = !audioEnabled;

    if (audioEnabled) {
        document.getElementById("off").style.display = "none";
        document.getElementById("on").style.display = "block";
    } else {
        document.getElementById("off").style.display = "block";
        document.getElementById("on").style.display = "none";
    }
});
