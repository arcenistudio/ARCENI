(() => {
  const icons = '<a href="https://www.instagram.com/thearceni/" target="_blank" rel="noopener noreferrer" aria-label="The ARCENI on Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" class="social-dot"></circle></svg></a><a href="https://www.youtube.com/@thearceni" target="_blank" rel="noopener noreferrer" aria-label="The ARCENI on YouTube" title="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.2 7.1a2.7 2.7 0 0 0-1.9-1.9C17.6 4.7 12 4.7 12 4.7s-5.6 0-7.3.5a2.7 2.7 0 0 0-1.9 1.9C2.3 8.8 2.3 12 2.3 12s0 3.2.5 4.9a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.3.5 7.3.5s5.6 0 7.3-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.9.5-4.9s0-3.2-.5-4.9Z"></path><path class="social-fill" d="m10 15.5 5-3.5-5-3.5v7Z"></path></svg></a><a href="https://www.linkedin.com/company/thearceni/" target="_blank" rel="noopener noreferrer" aria-label="The ARCENI on LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.3H2.8V21h2.4V8.3ZM4 3A1.5 1.5 0 1 0 4 6a1.5 1.5 0 0 0 0-3ZM21.2 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2v-1.8h-2.4V21h2.4v-6.3c0-1.7.3-3.4 2.5-3.4s2.5 1.9 2.5 3.5V21h2.4v-7.3Z"></path></svg></a>';

  const mount = () => {
    const header = document.querySelector('header.site-header,header.bball-nav,header.coaching-nav,header.basketball-nav,header.topbar,header.intro-header,header.archer-nav');
    if (!header) return;
    header.querySelectorAll('.arceni-partner-cta,.arceni-homepage-cta,.bball-nav-cta,.header-cta').forEach(element => element.remove());
    header.querySelectorAll('.site-nav-socials').forEach(element => element.remove());
    const social = document.querySelector('.bottom-social-footer,.collective-footer-social,.bball-footer-social,.homepage-footer-social');
    let navSocial;
    if (social?.tagName === 'FOOTER') {
      navSocial = document.createElement('nav');
      navSocial.innerHTML = social.innerHTML;
      social.remove();
    } else {
      navSocial = social || document.createElement('nav');
    }
    if (!social) navSocial.innerHTML = icons;
    navSocial.classList.add('site-nav-socials');
    navSocial.setAttribute('aria-label', 'ARCENI social media');
    header.append(navSocial);
    document.querySelectorAll('.homepage-footer-social').forEach(element => element.remove());
  };

  mount();
  window.setTimeout(mount, 0);
})();
