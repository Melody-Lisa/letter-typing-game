const input = document.getElementById("letter");
const result = document.getElementById("result");

// Auto-focus input field on page load
window.onload = function() {
    input.focus();
};

// Keep focus on the input field
input.addEventListener("blur", function() {
    setTimeout(() => input.focus(), 10);
});

// Allow only one character in the contenteditable div
input.addEventListener("input", function () {
    const letter = input.textContent.trim(); // Get the latest letter

    if (letter.length > 1) {
        input.textContent = letter.charAt(letter.length - 1); // Keep only the last typed letter
        moveCaretToEnd(input); // Ensure caret stays at the end
    }

    showLetter(); // Call showLetter immediately after updating input
});

// Move the caret (cursor) to the end of the contenteditable div
function moveCaretToEnd(el) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false); // Move caret to end
    selection.removeAllRanges();
    selection.addRange(range);
}

// Convert input letter to uppercase and lowercase
function showLetter() {
    const letter = input.textContent.trim(); // Use textContent for contenteditable div

    if (letter.length === 1) {
        result.innerHTML = `${letter.toUpperCase()} ${letter.toLowerCase()}`;
    } else {
        result.innerHTML = ""; // Clear result if no valid letter is entered
    }
}
