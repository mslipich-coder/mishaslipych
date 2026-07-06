const sections = [...document.querySelectorAll('main > section[id]')];
const links = [...document.querySelectorAll('#nav a')];
const nav = document.querySelector('#nav');
const menuButton = document.querySelector('.menu-toggle');
const themeButton = document.querySelector('.theme-toggle');

function setActiveSection(id) {
  links.forEach(link => {
    const active = link.hash === `#${id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

links.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

menuButton.addEventListener('click', event => {
  const open = nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(open));
});

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
  if (visible[0]) setActiveSection(visible[0].target.id);
}, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.15, 0.4] });

sections.forEach(section => observer.observe(section));
setActiveSection(location.hash.slice(1) || 'home');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') document.body.classList.remove('dark');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
