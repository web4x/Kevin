document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.innerHTML = `
      <a href="index.html">Home</a>
      <a href="pages/about.html">Über uns</a>
      <a href="pages/services.html">Leistungen</a>
      <a href="pages/contact.html">Kontakt</a>
    `;
  }
});