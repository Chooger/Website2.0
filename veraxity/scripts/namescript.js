const nameElement = document.getElementById('name');

const texts = [
    "V", "Ve", "Ver", "Vera", "Verax", "Veraxi", "Veraxit", "Veraxity", "Veraxity", "Veraxit", "Veraxi", "Verax", "Vera", "Ver", "Ve", "V"
];

let currentIndex = 0;
const interval = 500;

function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, interval);
