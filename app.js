let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let links = document.querySelectorAll('header .navbar ul li a');

function toggleMenu() {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

menu.onclick = () => {
  toggleMenu();

  if (navbar.classList.contains('active')) {
    document.documentElement.style.overflowY = 'hidden';
  } else {
    document.documentElement.style.overflow = '';
  }
};

links.forEach((link) =>
  link.addEventListener('click', () => {
    document.documentElement.style.overflow = '';

    toggleMenu();
  })
);

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.querySelector('header').classList.add('sticky');
    } else {
      document.querySelector('header').classList.remove('sticky');
    }
  });
});

function changeHeaderLinkState(sectionId, isIntersecting) {
  const headerLink = document.querySelector(
    `header .navbar ul li a[href="#${sectionId}"]`
  );
  if (headerLink) {
    if (isIntersecting) {
      headerLink.classList.add('active');
    } else {
      headerLink.classList.remove('active');
    }
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;
      changeHeaderLinkState(sectionId, entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', () => {
  let slides = document.querySelectorAll('.slides');
  slider.appendChild(slides[0]);
});

prev.addEventListener('click', () => {
  let slides = document.querySelectorAll('.slides');
  slider.prepend(slides[slides.length - 1]);
});
