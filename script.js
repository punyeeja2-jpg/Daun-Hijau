/* AUTO SLIDER (AMAN MOBILE) */
if (window.innerWidth > 768) {
  document.querySelectorAll('.slider').forEach(slider => {
    let pos = 0;
    setInterval(() => {
      pos += 340;
      if (pos >= slider.scrollWidth) pos = 0;
      slider.scrollTo({ left: pos, behavior: 'smooth' });
    }, 3000);
  });
}

/* FADE IN */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));
