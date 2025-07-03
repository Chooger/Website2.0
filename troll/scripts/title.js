document.addEventListener("DOMContentLoaded", function () {
    const title = " YOU GOT TROLLED LOL!";
    const speed = 150;

    function moveTitle() {
        let index = 0;
        function updateTitle() {
            document.title = title.substring(index) + title.substring(0, index);
            index = (index + 1) % title.length;
        }
        setInterval(updateTitle, speed);
    }

    moveTitle();
});