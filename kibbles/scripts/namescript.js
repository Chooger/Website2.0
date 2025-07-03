const nameElement = document.getElementById('name');

const texts = [
    "K", "Ki", "Kib", "Kibb", "Kibbl", "Kibble", "Kibbles", "KIBBLES!", "Kibble", "Kibbl", "Kibb", "Kib", "Ki", "K"
];

let currentIndex = 0;
const interval = 500;

function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, interval);