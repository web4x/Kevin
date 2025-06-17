document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Prüfe, ob wir auf der Startseite oder in /pages/ sind
  const isRoot = location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname === '/my-web-project/';
  const prefix = isRoot ? '' : '../';

  navbar.innerHTML = `
    <a href="${prefix}index.html">Home</a>
    <a href="${prefix}pages/about.html">Über uns</a>
    <a href="${prefix}pages/services.html">Leistungen</a>
    <a href="${prefix}pages/contact.html">Kontakt</a>
  `;
});