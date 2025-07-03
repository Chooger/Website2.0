const nameElement = document.getElementById('name');

const texts = [
    "defualtuser0", "defualtuser0!", "defualtuser0", "defualtuser", "defualtuse", "defualtus", "defualtu", "defualt", 
    "defual", "defua", "defu", "def", "de", "d", "default", "user", "0"
    ];

let currentIndex = 0;
const interval = 500;

function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, interval);