const ENABLE_CASE_STUDIES = false;
const RESUME_AVAILABLE = false;
const RESUME_PDF_URL = '';
const HERO_MEDIA_TYPE = 'image'; // image | video
const HERO_MEDIA_SRC = 'assets/hero-facility.png';
const ABOUT_VISUAL_TYPE = 'placeholder'; // placeholder | image | video | logo
const ABOUT_VISUAL_SRC = '';

const links = [...document.querySelectorAll('#nav a')];
const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
const nav = document.querySelector('#nav');
const menuButton = document.querySelector('.menu-toggle');
const themeButton = document.querySelector('.theme-toggle');
const caseStudiesSection = document.querySelector('#case-studies');
const resumeButton = document.querySelector('#resume-button');
const heroMedia = document.querySelector('#hero-media');
const aboutVisual = document.querySelector('#about-visual');

if (ENABLE_CASE_STUDIES && caseStudiesSection) caseStudiesSection.hidden = false;

function configureResume() {
  if (!resumeButton || !RESUME_AVAILABLE) return;
  resumeButton.disabled = false;
  resumeButton.textContent = 'Download Resume';
  resumeButton.addEventListener('click', () => {
    if (RESUME_PDF_URL) window.open(RESUME_PDF_URL, '_blank', 'noopener');
  });
}

function configureHeroMedia() {
  if (!heroMedia || !HERO_MEDIA_SRC) return;
  if (HERO_MEDIA_TYPE === 'image') {
    heroMedia.src = HERO_MEDIA_SRC;
    return;
  }
  if (HERO_MEDIA_TYPE === 'video') {
    const video = document.createElement('video');
    video.id = 'hero-media';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    const source = document.createElement('source');
    source.src = HERO_MEDIA_SRC;
    source.type = HERO_MEDIA_SRC.toLowerCase().endsWith('.webm') ? 'video/webm' : 'video/mp4';
    video.append(source);
    heroMedia.replaceWith(video);
  }
}

function configureAboutVisual() {
  if (!aboutVisual || ABOUT_VISUAL_TYPE === 'placeholder' || !ABOUT_VISUAL_SRC) return;
  aboutVisual.replaceChildren();
  if (ABOUT_VISUAL_TYPE === 'image' || ABOUT_VISUAL_TYPE === 'logo') {
    const image = document.createElement('img');
    image.src = ABOUT_VISUAL_SRC;
    image.alt = ABOUT_VISUAL_TYPE === 'logo' ? 'Misha Slipych logo' : 'Misha Slipych';
    image.className = `about-${ABOUT_VISUAL_TYPE}`;
    aboutVisual.append(image);
  }
  if (ABOUT_VISUAL_TYPE === 'video') {
    const video = document.createElement('video');
    video.src = ABOUT_VISUAL_SRC;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    aboutVisual.append(video);
  }
}

configureResume();
configureHeroMedia();
configureAboutVisual();

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
