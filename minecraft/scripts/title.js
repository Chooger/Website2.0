  document.addEventListener("DOMContentLoaded", function () {
      const title = "---MiNeCrAfT iS AkIdS GaMe---";
      const speed = 500;

      function moveTitle() {
          let index = 0;
          function updateTitle() {
              document.title = title.substring(index) + title.substring(0, index);
              index = (index + 1) % title.length;
          }
          setInterval(updateTitle, speed);
      }

      moveTitle();

      const sidebar = document.querySelector('.sidebar');
      const toggleButton = document.querySelector('.toggle-button');

      toggleButton.addEventListener('click', () => {
          sidebar.classList.toggle('active');
      });
  });