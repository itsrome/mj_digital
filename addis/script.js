// Active nav highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul a:not(.nav-cta)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    const isActive = a.getAttribute('href') === `#${current}`;
    a.style.color = isActive ? '#5b21f5' : '';
  });
});
