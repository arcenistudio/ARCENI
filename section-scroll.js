(() => {
  const sections = Array.from(document.querySelectorAll('section, main > form, .contact-main > form, footer'))
    .filter(section => section.getClientRects().length)
    .filter(section => !section.parentElement.closest('section'))
    .sort((a, b) => a.getBoundingClientRect().top + window.scrollY - (b.getBoundingClientRect().top + window.scrollY));

  if (sections.length < 2) return;

  const nav = document.createElement('div');
  nav.className = 'section-scroll-nav';
  nav.innerHTML = '<button class="section-scroll-control" type="button"><span class="section-scroll-label">Scroll</span><span class="section-scroll-icon" aria-hidden="true"></span></button>';
  document.body.appendChild(nav);

  const button = nav.querySelector('button');
  const icon = nav.querySelector('.section-scroll-icon');
  let direction = 'down';
  let lastY = window.scrollY;
  let activeIndex = 0;

  const sectionTitle = section => {
    const heading = section.querySelector('h1, h2, h3');
    const labelledBy = section.getAttribute('aria-labelledby');
    const label = labelledBy ? document.getElementById(labelledBy)?.textContent : section.getAttribute('aria-label');
    return (heading?.textContent || label || (section.tagName === 'FOOTER' ? 'footer' : 'section')).replace(/\s+/g, ' ').trim();
  };

  const update = () => {
    const marker = window.scrollY + window.innerHeight * 0.45;
    activeIndex = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top + window.scrollY <= marker) activeIndex = index;
    });

    const scrollDirection = activeIndex === 0
      ? 'down'
      : activeIndex === sections.length - 1
        ? 'up'
        : direction;
    const targetIndex = Math.max(0, Math.min(sections.length - 1, activeIndex + (scrollDirection === 'down' ? 1 : -1)));
    const target = sections[targetIndex];
    if (!target) return;

    icon.textContent = scrollDirection === 'down' ? '\u2193' : '\u2191';
    button.dataset.direction = scrollDirection;
    button.setAttribute('aria-label', `Scroll ${scrollDirection} to ${sectionTitle(target)}`);
    button.dataset.target = String(targetIndex);
  };

  button.addEventListener('click', () => {
    const target = sections[Number(button.dataset.target)];
    if (target) {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
      target.scrollIntoView({ behavior, block: 'start' });
    }
  });

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (Math.abs(y - lastY) > 2) direction = y > lastY ? 'down' : 'up';
    lastY = y;
    update();
  }, { passive: true });

  window.addEventListener('resize', update, { passive: true });
  update();
})();
