(()=>{
  const header=document.querySelector('header.home-nav,header.topbar,header.basketball-nav,header.coaching-nav,header.contact-nav');
  if(!header) throw new Error('ARCENI menu requires a page header.');

  const trigger=document.createElement('button');
  trigger.className='arceni-menu-trigger';
  trigger.type='button';
  trigger.setAttribute('aria-controls','arceni-site-menu');
  trigger.setAttribute('aria-expanded','false');
  trigger.innerHTML='<span>Menu</span><span class="arceni-menu-trigger-icon" aria-hidden="true"><span></span><span></span></span>';
  header.append(trigger);

  const dialog=document.createElement('dialog');
  dialog.className='arceni-menu-dialog';
  dialog.id='arceni-site-menu';
  dialog.setAttribute('aria-label','Site menu');
  dialog.innerHTML=`
    <div class="arceni-menu-panel">
      <div class="arceni-menu-top">
        <a class="arceni-menu-brand" href="index.html">ARCENI<sup>®</sup></a>
        <button class="arceni-menu-close" type="button" aria-label="Close menu">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg>
        </button>
      </div>
      <nav class="arceni-menu-nav" aria-label="Main navigation">
        <button class="arceni-menu-services-toggle" type="button" aria-expanded="true" aria-controls="arceni-menu-services">Our Work<span class="arceni-menu-chevron" aria-hidden="true"></span></button>
        <div class="arceni-menu-services-list" id="arceni-menu-services">
          <a class="arceni-menu-service-link" href="consulting.html">Consulting</a>
          <a class="arceni-menu-service-link" href="coaching.html">Coaching</a>
          <a class="arceni-menu-service-link" href="basketball.html">Basketball</a>
        </div>
        <a class="arceni-menu-link" href="contact.html">Contact<span class="arceni-menu-chevron" aria-hidden="true"></span></a>
      </nav>
      <nav class="arceni-menu-social" aria-label="Social media">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://www.linkedin.com/company/arceni/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </div>`;
  document.body.append(dialog);

  const closeButton=dialog.querySelector('.arceni-menu-close');
  const servicesToggle=dialog.querySelector('.arceni-menu-services-toggle');
  const servicesList=dialog.querySelector('.arceni-menu-services-list');

  trigger.addEventListener('click',()=>{
    dialog.showModal();
    trigger.setAttribute('aria-expanded','true');
  });
  closeButton.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{
    if(event.target===dialog) dialog.close();
  });
  dialog.addEventListener('keydown',event=>{
    if(event.key==='Escape'){
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener('close',()=>{
    trigger.setAttribute('aria-expanded','false');
    trigger.focus();
    servicesToggle.setAttribute('aria-expanded','true');
    servicesList.hidden=false;
  });
  servicesToggle.addEventListener('click',()=>{
    const expanded=servicesToggle.getAttribute('aria-expanded')==='true';
    servicesToggle.setAttribute('aria-expanded',String(!expanded));
    servicesList.hidden=expanded;
  });
  dialog.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>dialog.close()));
})();
