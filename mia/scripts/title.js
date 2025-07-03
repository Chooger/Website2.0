document.addEventListener('DOMContentLoaded', () => {
    const titles = ["/M", "/MI", "/MIA", "/mia", "/...", "/choog luvs mia <3", "/mia", "/mia"];
    let index = 0;

    function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;8
    }

    setInterval(updateTitle, 900);
});
