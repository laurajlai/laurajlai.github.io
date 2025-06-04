// loads header
function loadHeader() {
  fetch('../nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('replace_with_navbar').outerHTML = data;
    });
}
document.addEventListener('DOMContentLoaded', loadHeader);