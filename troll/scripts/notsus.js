document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.querySelectorAll('.user-ip').forEach(span => {
            span.textContent = data.ip;
        });
    })
    .catch(error => {
        document.querySelectorAll('.user-ip').forEach(span => {
            span.textContent = 'Unable to retrieve IP';
        });
        console.error('Error fetching IP address:', error);
    });
});
