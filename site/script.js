// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? '#c9a84c' : '';
  });
});
