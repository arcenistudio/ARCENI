(() => {
  if (!document.querySelector('link[data-arceni-menu-style]')) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'site-menu.css';
    style.dataset.arceniMenuStyle = 'true';
    document.head.append(style);
  }
  const header = document.querySelector('header.site-header, header.bball-nav, header.coaching-nav, header.basketball-nav, header.topbar, header.intro-header, header.archer-nav, header.contact-nav, header.workshop-nav');
  if (!header || header.dataset.arceniMenuReady === 'true') return;
  // Keep pages with an existing CTA navbar instead of replacing it with Explore.
  if (header.classList.contains('bball-nav') || header.querySelector('nav .button, nav .header-cta, nav .header-cta-mobile, nav .bball-nav-cta')) {
    header.classList.add('arceni-original-cta-header');
    return;
  }
  header.dataset.arceniMenuReady = 'true';
  [...header.querySelectorAll('nav, .menu-button, .header-cta-mobile')].forEach(element => element.remove());
  if (document.body.classList.contains('homepage-page')) {
    const cta = document.createElement('a');
    cta.className = 'arceni-homepage-cta';
    cta.href = 'contact.html';
    cta.textContent = 'Partner With Us ↗';
    header.append(cta);
    return;
  }
  const trigger = document.createElement('button');
  trigger.className = 'arceni-homepage-menu-button';
  trigger.type = 'button';
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', 'arceni-homepage-menu');
  trigger.textContent = 'Explore';
  header.append(trigger);
  const menu = document.createElement('nav');
  menu.className = 'arceni-homepage-menu';
  menu.id = 'arceni-homepage-menu';
  menu.setAttribute('aria-label', 'Main navigation');
  menu.innerHTML = `
    <div class="arceni-homepage-menu-group">
      <p>The Consulting</p>
      <a href="consulting.html#project-management-home"><span class="arceni-homepage-menu-icon" aria-hidden="true">01</span><span><strong>Project Management</strong><small>Align people, priorities and delivery from concept to completion.</small></span></a>
      <a href="consulting.html#consulting-contact"><span class="arceni-homepage-menu-icon" aria-hidden="true">02</span><span><strong>Capacity Building</strong><small>Strengthen the systems, skills and resources behind meaningful work.</small></span></a>
      <a href="consulting.html#consulting-contact"><span class="arceni-homepage-menu-icon" aria-hidden="true">03</span><span><strong>Custom Consulting</strong><small>Shape a practical engagement around your organization’s goals.</small></span></a>
    </div>
    <div class="arceni-homepage-menu-group">
      <p>The Basketball</p>
      <a href="basketball.html#bball-approach"><span class="arceni-homepage-menu-icon" aria-hidden="true">01</span><span><strong>Player Development</strong><small>Build fundamentals, confidence, discipline and game awareness.</small></span></a>
      <a href="basketball.html#bball-contact"><span class="arceni-homepage-menu-icon" aria-hidden="true">02</span><span><strong>Team Support</strong><small>Develop shared standards, communication and team culture.</small></span></a>
      <a href="basketball.html#bball-contact"><span class="arceni-homepage-menu-icon" aria-hidden="true">03</span><span><strong>Program Inquiry</strong><small>Find the right development pathway for a player, team or organization.</small></span></a>
    </div>
    <div class="arceni-homepage-menu-group">
      <p>The Collective</p>
      <a href="collective.html#archer-program"><span class="arceni-homepage-menu-icon" aria-hidden="true">01</span><span><strong>The Archer</strong><small>One-to-one coaching for direction, confidence and purposeful progress.</small></span></a>
      <a href="collective.html#archer-workshops"><span class="arceni-homepage-menu-icon" aria-hidden="true">02</span><span><strong>The Catalyst</strong><small>Workshops for reflection, shared learning and practical action.</small></span></a>
      <a href="collective.html#registration"><span class="arceni-homepage-menu-icon" aria-hidden="true">03</span><span><strong>Enrollment</strong><small>Register your interest and start a conversation with ARCENI.</small></span></a>
    </div>`;
  header.append(menu);
  const setOpen = open => { trigger.setAttribute('aria-expanded', String(open)); menu.classList.toggle('is-open', open); };
  trigger.addEventListener('click', () => setOpen(trigger.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('click', event => { if (!header.contains(event.target)) setOpen(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
})();
