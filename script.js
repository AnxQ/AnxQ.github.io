// Filter the static publication list; all content remains readable without JavaScript.
const filters = [...document.querySelectorAll('.filter')];
const search = document.querySelector('#publication-search');
const publications = [...document.querySelectorAll('.pub')];
let category = 'all';
function filterPublications() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  publications.forEach(item => {
    const visible = (category === 'all' || item.dataset.category === category) && item.textContent.toLowerCase().includes(query);
    item.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector('#no-results').hidden = count > 0;
  document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'paper' : 'papers'}`;
}
filters.forEach(button => button.addEventListener('click', () => {
  category = button.dataset.filter;
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  filterPublications();
}));
search?.addEventListener('input', filterPublications);
const navLinks = [...document.querySelectorAll('.nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin:'-5% 0px -65% 0px',threshold:0});
  document.querySelectorAll('main > [id]').forEach(section => observer.observe(section));
}
