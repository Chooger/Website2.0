document.addEventListener('DOMContentLoaded', () => {
    const titles = ["/s", "/so", "/sof", "/soft", "/softc", "/softch", "/softchi", "/softchi!"];
    let index = 0;

    function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;8
    }

    setInterval(updateTitle, 355);
});
