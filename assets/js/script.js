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


// Type only one letter into input field
input.addEventListener("keydown", function(e) {
    if (input.textContent.length >= 1 && e.key !== "Backspace") {
        e.preventDefault();
    }
});

// Convert input letter to uppercase and lowercase
function showLetter() {
    const letter = input.textContent.trim(); // Use textContent for contenteditable div

    if (letter.length === 1) {
        result.innerHTML = `${letter.toUpperCase()} ${letter.toLowerCase()}`;
    }
}

// Listen for input changes
input.addEventListener("input", showLetter);
