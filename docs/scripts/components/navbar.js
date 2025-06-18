document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Basis-Pfad für GitHub Pages
  const base = '/Kevin/';

  navbar.innerHTML = `
    <a href="${base}index.html">Home</a>
    <a href="${base}pages/about.html">Über uns</a>
    <a href="${base}pages/services.html">Leistungen</a>
    <a href="${base}pages/contact.html">Kontakt</a>
  `;
});