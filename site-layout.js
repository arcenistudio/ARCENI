(() => {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --max: 1240px;
      --site-layout-width: 1240px;
      --site-gutter: clamp(20px, 5vw, 72px);
    }

    *, *::before, *::after { box-sizing: border-box; }
    html, body { min-width: 320px; overflow-x: hidden; }
    img, video, iframe { max-width: 100%; }
    img { height: auto; }
    button, input, select, textarea { max-width: 100%; }

    .about-page .shell,
    .reflections-shell,
    .contact-main,
    .reflections-shell {
      max-width: var(--site-layout-width);
    }

    .archer-hero,
    .archer-page > .section,
    .catalyst-hero,
    .events-section,
    .catalyst-contact,
    .contact-main,
    .intro-hero,
    .consulting,
    .reflections-shell {
      width: min(100% - clamp(40px, 10vw, 144px), var(--site-layout-width));
      margin-left: auto;
      margin-right: auto;
    }

    .archer-hero,
    .catalyst-hero,
    .intro-hero { padding-left: 0; padding-right: 0; }

    .archer-page > .section { padding-left: 0; padding-right: 0; }

    @media (max-width: 900px) {
      .about-page .shell,
      .reflections-shell,
      .contact-main,
      .reflections-shell { max-width: 100%; }

      .section-grid,
      .archer-contact,
      .catalyst-contact,
      .contact-hero,
      .about-hero,
      .about-introduction,
      .about-framework,
      .coaching-hero,
      .coaching-section,
      .basketball-coach-section,
      .impact-coach { grid-template-columns: 1fr; }

      .program-grid,
      .event-grid,
      .process-grid,
      .gain-showcase,
      .about-principles,
      .about-faq-list,
      .impact-services-grid,
      .impact-testimonials-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

      .section-heading,
      .events-heading,
      .about-faq-heading { align-items: flex-start; flex-direction: column; }
    }

    @media (max-width: 600px) {
      .archer-hero,
      .archer-page > .section,
      .catalyst-hero,
      .events-section,
      .catalyst-contact,
      .contact-main,
      .intro-hero,
      .consulting,
      .reflections-shell { width: calc(100% - 40px); }

      .program-grid,
      .event-grid,
      .process-grid,
      .gain-showcase,
      .about-principles,
      .about-faq-list,
      .impact-services-grid,
      .impact-testimonials-grid,
      .contact-form,
      .archer-contact-form,
      .catalyst-contact-form { grid-template-columns: 1fr; }

      .contact-field.wide,
      .contact-submit,
      .contact-note,
      .archer-contact-field.wide,
      .archer-contact-submit,
      .archer-contact-note,
      .catalyst-contact-field.wide,
      .catalyst-contact-submit,
      .catalyst-contact-note { grid-column: 1; }

      .hero-actions,
      .intro-actions,
      .actions { flex-direction: column; align-items: stretch; }

      .hero-actions .button,
      .intro-actions .button,
      .actions .button { width: 100%; }
    }
  `;
  document.head.appendChild(style);
})();
