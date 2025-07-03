const nameElement = document.getElementById('name');

const texts = [
    "Mia", "...", "M", "Mi", "Mia", "MIa", "MIA", "mIA", 
    "miA", "mia", "...", "m", "i",
    "a", "mia", "Mia", "MIa", "MIA", "MIA!", "...", "MIA!", "...", "MIA!"
];

let currentIndex = 0;
const interval = 500;

function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, interval);