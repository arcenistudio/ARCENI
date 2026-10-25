(() => {
  const selectors = [
    'main > section',
    'main > main > section',
    'body > section',
    '.shell > section',
    '.shell > main > section',
    '.home-shell > section',
    '.basketball-page > section'
  ];
  const sections = [...new Set(selectors.flatMap(selector => [...document.querySelectorAll(selector)]))];

  if (!sections.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

  document.body.classList.add('site-scroll-ready');
  sections.forEach(section => section.classList.add('site-scroll-reveal'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('site-scroll-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

  sections.forEach(section => observer.observe(section));
})();
