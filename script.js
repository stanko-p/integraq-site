  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 30));

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .exp-card, .why-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
 // --- Logika za slajder objava ---
const objaveSlider = document.getElementById('objaveSlider');
const prevObjavaBtn = document.getElementById('prevObjava');
const nextObjavaBtn = document.getElementById('nextObjava');

if (objaveSlider && prevObjavaBtn && nextObjavaBtn) {
  nextObjavaBtn.addEventListener('click', () => {
    const firstCard = objaveSlider.querySelector('.objava-card');
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth;
      const gap = 32; 
      objaveSlider.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  });

  prevObjavaBtn.addEventListener('click', () => {
    const firstCard = objaveSlider.querySelector('.objava-card');
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth;
      const gap = 32;
      objaveSlider.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  });
}
// --- Funkcija za "Pročitajte više" / proširivanje teksta u kartici ---
document.querySelectorAll('.expand-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // Sprečava da te link vrati na vrh stranice
    
    // Traži tekstualni element unutar iste objave
    const card = this.closest('.objava-card');
    const text = card.querySelector('.expandable-text');
    
    if (text) {
      text.classList.toggle('expanded');
      
      // Menja tekst dugmeta zavisno od stanja
      if (text.classList.contains('expanded')) {
        this.innerHTML = 'Prikaži manje <span>↑</span>';
      } else {
        this.innerHTML = 'Pročitajte više <span>→</span>';
      }
    }
  });
});
