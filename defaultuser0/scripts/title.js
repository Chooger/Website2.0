document.addEventListener('DOMContentLoaded', () => {
    const titles = ["/d", "/de", "/def", "/defa", "/defau", "/defaul", "/default", "/defaultu", "/defaultus", "/defaultuse", "/defaultuser", "/defaultuser0"];
    let index = 0;

    function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;8
    }

    setInterval(updateTitle, 355);
});
