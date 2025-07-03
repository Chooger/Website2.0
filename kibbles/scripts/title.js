document.addEventListener('DOMContentLoaded', () => {
    const titles = ["/K", "/Ki", "/Kib", "/Kibb", "/Kibbl", "/Kibble", "/Kibbles", "/KIBBLES!"];
    let index = 0;

    function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;8
    }

    setInterval(updateTitle, 355);
});
