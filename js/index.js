const humbuger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const socialMedia = document.querySelector('.socialMedia');
const navBar = document.querySelector('.nav-bar');
const navBarUl = document.querySelector('.nav-bar ul');
const navBarUlLi = document.querySelectorAll('.nav-bar ul li');
const cancelBtn = document.querySelector('.cancelBtn');
const html = document.querySelector('html');
const homePart1 = document.querySelector('.home-part1');

// Mobile menu events

humbuger.addEventListener('click', () => {
  socialMedia.classList.remove('hide');
  navBar.classList.remove('hide');
  header.classList.add('mob-menu');
  navBar.classList.add('d-flex-column-center-start');
  navBarUl.classList.add('d-flex-column-start');
  html.classList.add('mob-flue');
  header.style.backgroundColor = 'transparent';
});

cancelBtn.addEventListener('click', () => {
  socialMedia.classList.add('hide');
  navBar.classList.add('hide');
  header.classList.remove('mob-menu');
  navBar.classList.remove('d-flex-column-center-start');
  navBarUl.classList.remove('d-flex-column-start');
  html.classList.remove('mob-flue');
});

navBarUlLi.forEach((li) => {
  li.addEventListener('click', () => {
    socialMedia.classList.add('hide');
    navBar.classList.add('hide');
    header.classList.remove('mob-menu');
    navBar.classList.remove('d-flex-column-center-start');
    navBarUl.classList.remove('d-flex-column-start');
    html.classList.remove('mob-flue');
  });
});

const sectionOneOptions = {
  rootMargin: '-100px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.style.backgroundColor = 'white';
      header.style.transition = 'all 0.8s ease';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(homePart1);

window.addEventListener('scroll', () => {
  navBar.classList.toggle('scroll-navBar', window.scrollY > 0);
});
