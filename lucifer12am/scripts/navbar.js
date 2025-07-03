<script>
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".navbar__menu");
    const toggle = document.querySelector("#mobile-menu");

    toggle.addEventListener("click", function() {
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });
});
</script>
