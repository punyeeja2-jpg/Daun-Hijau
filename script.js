/* AUTO SLIDER */
document.querySelectorAll('.slider').forEach(slider => {
  let x = 0;
  setInterval(() => {
    x += 340;
    if (x >= slider.scrollWidth) x = 0;
    slider.scrollTo({ left: x, behavior: 'smooth' });
  }, 3000);
});

/* FADE IN */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade').forEach(el => obs.observe(el));

/* WA PULSE */
const wa = document.querySelector('.wa-float');
setInterval(() => {
  wa.style.transform = 'scale(1.1)';
  setTimeout(() => wa.style.transform = 'scale(1)', 300);
}, 3000);
