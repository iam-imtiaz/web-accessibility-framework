document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      
      // Collapse all panels
      accordionButtons.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        document.getElementById(btn.getAttribute('aria-controls')).setAttribute('hidden', '');
      });
      
      // Expand the clicked panel
      if (!expanded) {
        button.setAttribute('aria-expanded', 'true');
        document.getElementById(button.getAttribute('aria-controls')).removeAttribute('hidden');
      }
    });
  });
});
