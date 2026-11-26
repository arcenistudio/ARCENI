(() => {
  const socialMarkup = '<a href="https://www.instagram.com/thearceni/" target="_blank" rel="noopener noreferrer" aria-label="ARCENI on Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" class="social-dot"></circle></svg></a><a href="https://www.youtube.com/@thearceni" target="_blank" rel="noopener noreferrer" aria-label="ARCENI on YouTube" title="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.2 7.1a2.7 2.7 0 0 0-1.9-1.9C17.6 4.7 12 4.7 12 4.7s-5.6 0-7.3.5a2.7 2.7 0 0 0-1.9 1.9C2.3 8.8 2.3 12 2.3 12s0 3.2.5 4.9a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.3.5 7.3.5s5.6 0 7.3-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.9.5-4.9s0-3.2-.5-4.9Z"></path><path class="social-fill" d="m10 15.5 5-3.5-5-3.5v7Z"></path></svg></a><a href="https://www.linkedin.com/company/thearceni/" target="_blank" rel="noopener noreferrer" aria-label="ARCENI on LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.3H2.8V21h2.4V8.3ZM4 3A1.5 1.5 0 1 0 4 6a1.5 1.5 0 0 0 0-3ZM21.2 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2v-1.8h-2.4V21h2.4v-6.3c0-1.7.3-3.4 2.5-3.4s2.5 1.9 2.5 3.5V21h2.4v-7.3Z"></path></svg></a>';

  const style = document.createElement('style');
  style.textContent = '.brand,.bball-brand{font-size:19px!important;font-weight:400!important;letter-spacing:.16em!important;text-decoration:none!important}.brand sup,.bball-brand sup{font-size:9px!important;letter-spacing:0!important}.site-intro{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;background:#fff;color:#171615;animation:siteIntroCurtain .8s cubic-bezier(.76,0,.24,1) 1.2s forwards}.site-intro-wordmark{font-size:clamp(22px,3vw,34px);font-weight:400;letter-spacing:.28em;opacity:0;transform:translateX(-18px);filter:blur(8px);animation:siteIntroWordmark .8s cubic-bezier(.22,1,.36,1) forwards}.site-intro-wordmark sup{font-size:.42em;letter-spacing:0}@keyframes siteIntroWordmark{from{opacity:0;letter-spacing:.28em;transform:translateX(-18px);filter:blur(8px)}to{opacity:1;letter-spacing:.18em;transform:translateX(0);filter:blur(0)}}@keyframes siteIntroCurtain{to{clip-path:inset(0 0 100% 0);opacity:0}}@media(prefers-reduced-motion:reduce){.site-intro{display:none}}.site-chrome-home{display:inline-flex;align-items:center;gap:10px;margin-left:auto;color:inherit;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.site-chrome-home span{font-size:17px;font-weight:400}.site-chrome-socials{display:flex;align-items:center;gap:16px;margin-left:auto}.site-chrome-socials a{display:grid;width:28px;height:28px;place-items:center;color:inherit;opacity:.82;transition:opacity .2s ease,transform .2s ease}.site-chrome-socials a:hover,.site-chrome-socials a:focus-visible{opacity:1;transform:translateY(-2px)}.site-chrome-socials svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.7}.site-chrome-socials .social-fill,.site-chrome-socials .social-dot{fill:currentColor;stroke:none}.site-chrome-footer{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px max(20px,calc((100% - 1240px)/2));border-top:1px solid #ded9d4;background:#f4f1ee;color:#68615e;font-size:10px;letter-spacing:.08em;text-transform:uppercase}.site-chrome-footer-links{display:flex;align-items:center;gap:20px;order:2}.site-chrome-footer-links a{color:inherit;font-weight:700}.site-chrome-footer-back{display:inline-flex;align-items:center;gap:10px;margin-left:auto;color:#171615;font-weight:700;order:3}.site-chrome-footer-back span{font-size:18px;font-weight:400}@media(max-width:700px){.site-chrome-home{margin-left:auto}.site-chrome-socials{gap:12px;margin-left:auto}.site-chrome-footer{align-items:flex-start;flex-direction:column;padding:20px}.site-chrome-footer-links{flex-wrap:wrap;gap:12px;order:2}.site-chrome-footer-back{margin-left:0;order:3}}';
  document.head.append(style);

  const menuStyle = document.createElement('style');
  menuStyle.textContent = '.site-home-menu-button{display:inline-flex;align-items:center;gap:12px;margin-left:auto;padding:10px 0;border:0;background:transparent;color:inherit;font:inherit;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}.site-home-menu-button::after{content:"+";font-size:18px;font-weight:400;line-height:.6;transition:transform .2s ease}.site-home-menu-button[aria-expanded="true"]::after{transform:rotate(45deg)}.site-home-menu{position:absolute;top:100%;right:max(20px,calc((100% - 1240px)/2));z-index:30;display:none;width:min(520px,calc(100% - 40px));padding:24px;background:#242427;color:#f4f1ee;box-shadow:0 24px 60px rgba(0,0,0,.28)}.site-home-menu.is-open{display:block}.site-home-menu a{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0;border-bottom:1px solid rgba(244,241,238,.14);color:#f4f1ee;font-size:16px}.site-home-menu a:last-child{border-bottom:0}.site-home-menu a span{color:#b8b0b3;font-size:18px}.site-home-menu-section{margin:0 0 18px;color:rgba(244,241,238,.58);font-size:9px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}.site-home-menu-socials{display:flex;justify-content:space-between;gap:18px;margin-top:18px;padding-top:18px;border-top:1px solid rgba(244,241,238,.14)}.site-home-menu-socials a{display:grid;align-items:center;justify-content:center;width:30px;height:30px;padding:0;border:0;color:rgba(244,241,238,.7);font-size:11px}.site-home-menu-socials a:hover,.site-home-menu-socials a:focus-visible{color:#fff}.site-home-menu-socials svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.7}.site-home-menu-socials .social-fill,.site-home-menu-socials .social-dot{fill:currentColor;stroke:none}@media(max-width:700px){.site-home-menu-button{margin-left:0}.site-home-menu{top:100%;right:0;left:0;width:100%;padding:22px 20px}.site-home-menu a{font-size:15px}}';
  document.head.append(menuStyle);

  const menuOverride = document.createElement('style');
  menuOverride.textContent = '.site-home-menu{background:#fff;color:#171615;border:1px solid #171615;box-shadow:0 24px 60px rgba(0,0,0,.16)}.site-home-menu a{color:#171615;border-bottom-color:rgba(23,22,21,.16)}.site-home-menu a span{color:#68615e}.site-home-menu-section{color:rgba(23,22,21,.58)}.site-home-menu-socials{border-top-color:rgba(23,22,21,.16)}.site-home-menu-socials a{color:rgba(23,22,21,.7)}.site-home-menu-socials a:hover,.site-home-menu-socials a:focus-visible{color:#171615}';
  document.head.append(menuOverride);
  const homepageMenuStyle = document.createElement('style');
  homepageMenuStyle.textContent = '.homepage-mega-menu{display:none!important;position:absolute;top:100%;right:max(20px,calc((100% - 1240px)/2));width:min(1080px,calc(100% - 40px));grid-template-columns:repeat(3,minmax(0,1fr));gap:0;padding:0;background:#171615;border:1px solid rgba(244,241,238,.2);box-shadow:0 24px 60px rgba(23,22,21,.28);color:#f4f1ee;text-transform:none}.homepage-mega-menu.is-open{display:grid!important}.homepage-mega-group{min-height:250px;padding:30px 30px 34px;border-right:1px solid rgba(244,241,238,.16)}.homepage-mega-group:last-child{border-right:0}.homepage-mega-group p{margin:0 0 24px;color:rgba(244,241,238,.52);font-size:9px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}.homepage-mega-group a{display:grid;grid-template-columns:34px 1fr;column-gap:12px;align-items:start;margin:0 -10px;padding:13px 10px;border-radius:0;color:#f4f1ee;font-size:14px;font-weight:600;letter-spacing:0;text-transform:none;transition:background .2s ease}.homepage-mega-group a:hover,.homepage-mega-group a:focus-visible{background:rgba(244,241,238,.1)}.homepage-mega-icon{display:grid;width:34px;height:28px;align-items:start;justify-items:start;color:#b8b0b3;font-size:9px;letter-spacing:.12em;line-height:1}.homepage-mega-copy{display:grid;gap:7px;padding-top:0}.homepage-mega-copy small{max-width:24ch;color:rgba(244,241,238,.58);font-size:11px;font-weight:400;line-height:1.55}.site-home-menu-button.menu-button{display:inline-flex;align-items:center;justify-content:center;padding:11px 14px;border:1px solid currentColor;background:transparent;color:inherit;font:inherit;font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer}.site-home-menu-button.menu-button:hover,.site-home-menu-button.menu-button:focus-visible{background:rgba(127,127,127,.12)}@media(max-width:800px){.homepage-mega-menu{right:20px;left:20px;width:auto;grid-template-columns:1fr;padding:0}.homepage-mega-group{min-height:0;padding:22px 24px 24px;border-right:0;border-bottom:1px solid rgba(244,241,238,.16)}.homepage-mega-group:last-child{border-bottom:0}.homepage-mega-group p{margin-bottom:16px}.site-home-menu-button.menu-button{padding:10px 12px}}';
  document.head.append(homepageMenuStyle);

  document.querySelector('.bball-preloader')?.remove();
  if (!document.querySelector('.site-intro')) {
    const intro = document.createElement('div');
    intro.className = 'site-intro';
    intro.setAttribute('role', 'status');
    intro.setAttribute('aria-label', 'Loading ARCENI');
    intro.innerHTML = '<span class="site-intro-wordmark">ARCENI<sup>®</sup></span>';
    document.body.prepend(intro);
  }

  const header = document.querySelector('header.site-header,header.bball-nav,header.coaching-nav,header.basketball-nav,header.topbar,header.intro-header,header.archer-nav');
  const currentPage = (window.location.pathname.split(/[\\/]/).pop() || 'index.html').toLowerCase();
  if (header) {
    header.querySelectorAll('.nav, .main-nav, .bball-nav-links, .header-cta, .bball-nav-cta, .menu-button, .homepage-socials').forEach((element) => element.remove());
  }
  if (header && currentPage === 'index.html' && !header.querySelector('.site-home-menu-button')) {
    const menuButton = document.createElement('button');
    menuButton.className = 'site-home-menu-button';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'site-home-menu');
    menuButton.textContent = 'Menu';
    const menu = document.createElement('nav');
    menu.className = 'site-home-menu';
    menu.id = 'site-home-menu';
    menu.setAttribute('aria-label', 'ARCENI menu');
    menu.innerHTML = '<p class="site-home-menu-section">Explore ARCENI</p><a href="consulting.html">Consulting <span aria-hidden="true">↗</span></a><a href="basketball.html">Basketball <span aria-hidden="true">↗</span></a><a href="collective.html">Collective <span aria-hidden="true">↗</span></a><div class="site-home-menu-socials">' + socialMarkup + '</div>';
    menuButton.className = 'site-home-menu-button menu-button';
    menuButton.textContent = 'Explore';
    menu.setAttribute('aria-label', 'Main navigation');
    menu.className = 'site-home-menu homepage-mega-menu';
    menu.innerHTML = '<div class="homepage-mega-group"><p>The Consulting</p><a href="consulting.html#project-management-home"><span class="homepage-mega-icon" aria-hidden="true">01</span><span class="homepage-mega-copy">Project Management<small>Align people, priorities and delivery from concept to completion.</small></span></a><a href="consulting.html#consulting-contact"><span class="homepage-mega-icon" aria-hidden="true">02</span><span class="homepage-mega-copy">Capacity Building<small>Strengthen the systems, skills and resources behind meaningful work.</small></span></a><a href="consulting.html#consulting-contact"><span class="homepage-mega-icon" aria-hidden="true">03</span><span class="homepage-mega-copy">Custom Consulting<small>Shape a practical engagement around your organization’s goals.</small></span></a></div><div class="homepage-mega-group"><p>The Basketball</p><a href="basketball.html#bball-approach"><span class="homepage-mega-icon" aria-hidden="true">01</span><span class="homepage-mega-copy">Player Development<small>Build fundamentals, confidence, discipline and game awareness.</small></span></a><a href="basketball.html#bball-contact"><span class="homepage-mega-icon" aria-hidden="true">02</span><span class="homepage-mega-copy">Team Support<small>Develop shared standards, communication and team culture.</small></span></a><a href="basketball.html#bball-contact"><span class="homepage-mega-icon" aria-hidden="true">03</span><span class="homepage-mega-copy">Program Inquiry<small>Find the right development pathway for a player, team or organization.</small></span></a></div><div class="homepage-mega-group"><p>The Collective</p><a href="collective.html#archer-program"><span class="homepage-mega-icon" aria-hidden="true">01</span><span class="homepage-mega-copy">The Archer<small>One-to-one coaching for direction, confidence and purposeful progress.</small></span></a><a href="collective.html#archer-workshops"><span class="homepage-mega-icon" aria-hidden="true">02</span><span class="homepage-mega-copy">The Catalyst<small>Workshops for reflection, shared learning and practical action.</small></span></a><a href="collective.html#registration"><span class="homepage-mega-icon" aria-hidden="true">03</span><span class="homepage-mega-copy">Enrollment<small>Register your interest and start a conversation with ARCENI.</small></span></a></div>';
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { menuButton.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); }
    });
    header.append(menuButton, menu);
  }
  if (header && !header.querySelector('.site-chrome-socials')) {
    const socials = document.createElement('nav');
    socials.className = 'site-chrome-socials';
    socials.setAttribute('aria-label', 'ARCENI social media');
    socials.innerHTML = socialMarkup;
    header.append(socials);
  }

  document.querySelectorAll('footer').forEach((footer) => {
    if (!footer.classList.contains('site-chrome-footer')) footer.style.display = 'none';
  });

  if (!document.querySelector('.site-chrome-footer')) {
    const footer = document.createElement('footer');
    footer.className = 'site-chrome-footer';
    footer.setAttribute('aria-label', 'ARCENI footer');
    footer.innerHTML = '<span>© 2026 ARCENI</span><span>Nairobi · Kenya · Global</span><nav class="site-chrome-footer-links" aria-label="Site navigation"><a href="index.html#home">Home</a><a href="consulting.html">Consulting</a><a href="basketball.html">Basketball</a><a href="collective.html">Collective</a></nav><a class="site-chrome-footer-back" href="index.html#home">BACK TO HOME <span aria-hidden="true">↗</span></a>';
    document.body.append(footer);
  }

  document.querySelectorAll('.site-chrome-socials, .site-home-menu-socials, .site-chrome-footer-back, .homepage-mega-menu, .site-home-menu, .site-home-menu-button, .menu-button').forEach((element) => element.remove());
  document.querySelectorAll('header.site-header,header.bball-nav,header.coaching-nav,header.basketball-nav,header.topbar,header.intro-header,header.archer-nav').forEach((pageHeader) => {
    if (pageHeader.querySelector('.site-menu-trigger')) return;
    const homeLink = document.createElement('a');
    homeLink.className = 'site-menu-trigger';
    homeLink.href = 'index.html#home';
    homeLink.textContent = 'HOME';
    pageHeader.append(homeLink);
    return;
    const menuTrigger = document.createElement('button');
    menuTrigger.className = 'site-menu-trigger';
    menuTrigger.type = 'button';
    menuTrigger.setAttribute('aria-expanded', 'false');
    menuTrigger.setAttribute('aria-controls', 'site-menu-panel');
    menuTrigger.textContent = 'MENU';
    const menuPanel = document.createElement('nav');
    menuPanel.className = 'site-menu-panel';
    menuPanel.id = 'site-menu-panel';
    menuPanel.setAttribute('aria-label', 'ARCENI menu');
    menuPanel.innerHTML = '<button class="site-menu-close" type="button" aria-label="Close menu">×</button><a href="index.html#home"><span>Work</span><span aria-hidden="true">›</span></a><details><summary><span>Services</span><span aria-hidden="true">⌄</span></summary><div class="site-menu-submenu"><a href="consulting.html">Consulting <span aria-hidden="true">↗</span></a><a href="basketball.html">Basketball <span aria-hidden="true">↗</span></a><a href="collective.html">Collective <span aria-hidden="true">↗</span></a></div></details><a href="index.html#about"><span>About</span><span aria-hidden="true">›</span></a><a href="index.html#career"><span>Career</span><span aria-hidden="true">›</span></a><a href="index.html#contact"><span>Contact</span><span aria-hidden="true">›</span></a>';
    const closeMenu = () => { menuTrigger.setAttribute('aria-expanded', 'false'); menuPanel.classList.remove('is-open'); };
    menuTrigger.addEventListener('click', () => {
      const open = menuTrigger.getAttribute('aria-expanded') === 'true';
      menuTrigger.setAttribute('aria-expanded', String(!open));
      menuPanel.classList.toggle('is-open', !open);
    });
    menuPanel.querySelector('.site-menu-close').addEventListener('click', closeMenu);
    menuPanel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
    pageHeader.append(menuTrigger, menuPanel);
  });
  const siteMenuStyle = document.createElement('style');
  siteMenuStyle.textContent = '.site-menu-trigger{position:relative;z-index:31;display:inline-flex;align-items:center;justify-content:center;margin-left:auto;padding:11px 14px;border:1px solid currentColor;background:transparent;color:inherit;font:inherit;font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;cursor:pointer}.site-menu-trigger:hover,.site-menu-trigger:focus-visible{background:rgba(127,127,127,.12)}.site-menu-panel{position:absolute;top:100%;right:0;z-index:30;display:none;width:min(460px,100vw);padding:24px 28px 30px;background:#fff;border:1px solid rgba(23,22,21,.18);box-shadow:0 24px 60px rgba(23,22,21,.18);color:#171615}.site-menu-panel.is-open{display:block}.site-menu-close{display:block;margin:0 0 24px auto;padding:0;border:0;background:transparent;color:#171615;font:32px/1 Arial,sans-serif;font-weight:300;cursor:pointer}.site-menu-panel>a,.site-menu-panel>details>summary{display:flex;align-items:center;justify-content:space-between;gap:18px;width:100%;padding:16px 0;border:0;border-bottom:1px solid rgba(23,22,21,.12);background:transparent;color:#171615;font:inherit;font-size:17px;font-weight:400;text-align:left;cursor:pointer;list-style:none}.site-menu-panel>details>summary::-webkit-details-marker{display:none}.site-menu-panel>details>summary span:last-child{font-size:20px;transition:transform .2s ease}.site-menu-panel>details[open]>summary span:last-child{transform:rotate(180deg)}.site-menu-submenu{padding:4px 0 10px 16px}.site-menu-submenu a{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid rgba(23,22,21,.08);color:#68615e;font-size:12px}.site-menu-submenu a:last-child{border-bottom:0}.site-menu-panel>a:hover,.site-menu-panel>a:focus-visible,.site-menu-submenu a:hover,.site-menu-submenu a:focus-visible{color:#68615e}@media(max-width:700px){.site-menu-trigger{padding:10px 12px}.site-menu-panel{right:0;width:min(420px,100vw);padding:22px 22px 28px}.site-menu-panel>a,.site-menu-panel>details>summary{font-size:18px}}';
  document.head.append(siteMenuStyle);
  const heroCtaStyle = document.createElement('style');
  heroCtaStyle.textContent = '.consulting-hero .hero-actions .button,.collective-hero-actions .button{display:inline-flex;min-width:190px;align-items:center;justify-content:space-between;gap:18px;padding:14px 16px;border-width:1px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;transition:transform .2s ease,background .2s ease}.consulting-hero .hero-actions .button:hover,.consulting-hero .hero-actions .button:focus-visible,.collective-hero-actions .button:hover,.collective-hero-actions .button:focus-visible{transform:translateY(-2px)}@media(max-width:800px){.consulting-hero .hero-actions .button,.collective-hero-actions .button{width:100%;max-width:340px}}';
  document.head.append(heroCtaStyle);
  const footerStyle = document.createElement('style');
  footerStyle.textContent = '.site-chrome-footer-socials{display:flex;align-items:center;gap:14px;order:3}.site-chrome-footer-socials a{display:grid;width:28px;height:28px;place-items:center;color:inherit;opacity:.82;transition:opacity .2s ease,transform .2s ease}.site-chrome-footer-socials a:hover,.site-chrome-footer-socials a:focus-visible{opacity:1;transform:translateY(-2px)}.site-chrome-footer-socials svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.7}.site-chrome-footer-socials .social-fill,.site-chrome-footer-socials .social-dot{fill:currentColor;stroke:none}@media(max-width:700px){.site-chrome-footer-links,.site-chrome-footer-socials{order:1}.site-chrome-footer>span{order:2}.site-chrome-footer-back{order:3}}';
  document.head.append(footerStyle);
  const footerAlignmentStyle = document.createElement('style');
  footerAlignmentStyle.textContent = '.site-chrome-footer>span:first-child{order:1}.site-chrome-footer>span:nth-child(2){margin-left:auto;order:3}@media(max-width:700px){.site-chrome-footer>span:nth-child(2){margin-left:0;order:2}}';
  document.head.append(footerAlignmentStyle);
  const responsiveSafetyStyle = document.createElement('style');
  responsiveSafetyStyle.textContent = '*,:before,:after{box-sizing:border-box}html,body{width:100%;max-width:100%;overflow-x:hidden}img,svg,video,canvas{max-width:100%}input,select,textarea,button{max-width:100%;font:inherit}@media(max-width:700px){.site-chrome-footer{flex-wrap:wrap;gap:12px}.site-chrome-footer-links{width:100%;flex-wrap:wrap}.site-chrome-footer>span:nth-child(2){width:100%}}';
  document.head.append(responsiveSafetyStyle);

  // Keep every site navbar intentionally minimal: logo plus social links only.
  document.querySelectorAll('header.site-header,header.bball-nav,header.coaching-nav,header.basketball-nav,header.topbar,header.intro-header,header.archer-nav').forEach((pageHeader) => {
    pageHeader.querySelectorAll(':scope > *').forEach((element) => {
      if (!element.matches('.brand, .bball-brand, .site-nav-socials, .arceni-socials, .site-chrome-socials')) element.remove();
    });

    const existingSocials = pageHeader.querySelector('.site-nav-socials, .arceni-socials, .site-chrome-socials');
    pageHeader.querySelectorAll('.site-nav-socials, .arceni-socials, .site-chrome-socials').forEach((element) => {
      if (element !== existingSocials) element.remove();
    });
    if (!existingSocials) {
      const socials = document.createElement('nav');
      socials.className = 'site-chrome-socials';
      socials.setAttribute('aria-label', 'ARCENI social media');
      socials.innerHTML = socialMarkup;
      pageHeader.append(socials);
    }
  });

  // Footers should not contain social links; social links belong in the navbar only.
  document.querySelectorAll('footer .site-chrome-footer-socials, footer .bball-footer-social, footer .collective-footer-social, footer .homepage-footer-social, footer.bottom-social-footer, footer nav[aria-label*="social" i]').forEach((element) => element.remove());
})();
