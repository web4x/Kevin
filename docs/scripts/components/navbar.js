document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
  const base = '/my-web-project/';

  navbar.innerHTML = `
    <a href="https://web4x.github.io/Kevin/">Home</a>
    <a href="https://web4x.github.io/Kevin/pages/about.html">Über uns</a>
    <a href="https://web4x.github.io/Kevin/pages/services.html">Leistungen</a>
    <a href="https://web4x.github.io/Kevin/pages/contact.html">Kontakt</a>
 
});