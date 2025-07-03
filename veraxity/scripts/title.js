document.addEventListener('DOMContentLoaded', () => {
    const titles = ["/V", "/Ve", "/Ver", "/Vera", "/Verax", "/Veraxi", "/Veraxit", "/Veraxity", 
    "/Veraxity", "/Veraxit", "/Veraxi", "/Verax", "/Vera", "/Ver", "/Ve", "/V"];
    let index = 0;

    function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;8
    }

    setInterval(updateTitle, 355);
});
