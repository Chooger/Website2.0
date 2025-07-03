const nameElement = document.getElementById('name');

const texts = ["ν", "νσ", "νσχ", "νσχi", "νσχiє", "-νσχiє-", "νσχiє", "-νσχiє-", "νσχiє", "νσχi", "νσχ", "νσ", "ν",
];

let currentIndex = 0;
const interval = 500;

function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, interval);