// Lightbox
document.querySelectorAll('.photo-card img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').classList.add('open');
  });
});
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});

// Fade in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});
