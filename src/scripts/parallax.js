document.addEventListener('DOMContentLoaded', () => {
  const parallaxElements = document.querySelectorAll('.parallax-layer');
  let ticking = false;
  let lastScrollY = window.scrollY;

  const updateParallax = () => {
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(lastScrollY * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax();
      });
      ticking = true;
    }
  });
});
