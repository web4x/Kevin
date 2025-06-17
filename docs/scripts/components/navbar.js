document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.innerHTML = `
      <a href="index.html">Home</a>
      <a href="Kevin/pages/about.html">Über uns</a>
      <a href="Kevin/pages/services.html">Leistungen</a>
      <a href="Kevin/pages/contact.html">Kontakt</a>
    `;
  }
});