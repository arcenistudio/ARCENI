document.querySelectorAll('.site-newsletter-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const email = new FormData(form).get('email');
    const status = form.querySelector('.site-newsletter-status');
    status.textContent = 'Opening your email app to complete the subscription.';
    window.location.href = `mailto:?subject=${encodeURIComponent('Newsletter subscription request')}&body=${encodeURIComponent(`Please add ${email} to the newsletter mailing list.`)}`;
  });
});
