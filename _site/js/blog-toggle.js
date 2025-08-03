// blog-toggle.js – wersja z poprawionym rozwijaniem
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.blog-entry').forEach(entry => {
    const blogContent = entry.querySelector('.blog-content');
    const btn = entry.querySelector('.blog-toggle-btn');
    const text = btn.querySelector('.btn-text');
    const icon = btn.querySelector('.btn-icon');

    blogContent.classList.add('collapsed');
    btn.setAttribute('aria-expanded', 'false');
    text.textContent = 'Rozwiń';
    icon.textContent = '▼';

    function setHeight() {
      if (window.innerWidth > 800) {
        const img = entry.querySelector('.blog-image');
        if (img) {
          blogContent.style.maxHeight = (img.offsetHeight + 16) + 'px';
        } else {
          blogContent.style.maxHeight = '220px';
        }
      } else {
        blogContent.style.maxHeight = '';
      }
    }
    setHeight();
    window.addEventListener('resize', setHeight);

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        blogContent.classList.remove('collapsed');
        text.textContent = 'Zwiń';
        icon.textContent = '▲';
        blogContent.style.maxHeight = 'none'; // <-- ważne!
      } else {
        btn.setAttribute('aria-expanded', 'false');
        blogContent.classList.add('collapsed');
        text.textContent = 'Rozwiń';
        icon.textContent = '▼';
        setHeight();
        entry.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    });
  });
});
