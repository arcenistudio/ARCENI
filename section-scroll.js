(() => {
  const sections = Array.from(document.querySelectorAll('section, footer'))
    .filter(section => section.getClientRects().length)
    .sort((a, b) => a.getBoundingClientRect().top + window.scrollY - (b.getBoundingClientRect().top + window.scrollY));

  if (sections.length < 2) return;

  const nav = document.createElement('div');
  nav.className = 'section-scroll-nav';
  nav.innerHTML = '<button class="section-scroll-control" type="button"><span class="section-scroll-label">scroll</span><span class="section-scroll-icon" aria-hidden="true">↓</span></button>';
  document.body.appendChild(nav);

  const button = nav.querySelector('button');
  const icon = nav.querySelector('.section-scroll-icon');
  let direction = 'down';
  let lastY = window.scrollY;
  let activeIndex = 0;

  const sectionTitle = section => {
    const heading = section.querySelector('h1, h2, h3');
    return heading ? heading.textContent.replace(/\s+/g, ' ').trim() : 'section';
  };

  const update = () => {
    const marker = window.scrollY + window.innerHeight * 0.45;
    activeIndex = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top + window.scrollY <= marker) activeIndex = index;
    });

    const targetIndex = Math.max(0, Math.min(sections.length - 1, activeIndex + (direction === 'down' ? 1 : -1)));
    const target = sections[targetIndex];
    if (!target) return;

    icon.textContent = direction === 'down' ? '↓' : '↑';
    button.dataset.direction = direction;
    button.setAttribute('aria-label', `Scroll ${direction} to ${sectionTitle(target)}`);
    button.dataset.target = String(targetIndex);
  };

  button.addEventListener('click', () => {
    const target = sections[Number(button.dataset.target)];
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
