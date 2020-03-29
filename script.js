const links = document.querySelector('.nav-list__row');

// Change color menu scroll
document.addEventListener('scroll', onScroll);

function onScroll() {
  const curPos = window.scrollY + 96;
  const sections = document.querySelectorAll('main>section');
  const links = document.querySelectorAll('.nav-list__row a');

  sections.forEach((el) => {
    if ((el.offsetTop) <= curPos && (el.offsetTop + el.offsetHeight) >= curPos) {
      links.forEach((a) => {
        a.classList.remove('nav-list__link--active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('nav-list__link--active');
        }
      })
    } else if (curPos >= 2600) {
      links.forEach((a) => {
        a.classList.remove('nav-list__link--active');
      });
      document.querySelector('#nav-contact').classList.add('nav-list__link--active');
    }
  });
}


//  Change color menu target
links.addEventListener('click', onClick);

function onClick(event) {
  document.querySelectorAll('.nav-list__row a').forEach(a => a.classList.remove('nav-list__link--active'));
  if (event.target !== event.currentTarget) {
    event.target.classList.add('nav-list__link--active');
  }
}


//  Add active tag-menu
const tagsMenu = document.getElementById('tag-menu__row');
const tags = document.querySelectorAll('.tag-menu__item');

tagsMenu.addEventListener('click', (event) => {
  tags.forEach(tag => tag.classList.remove('tag-menu__item--active'));
  event.target.classList.add('tag-menu__item--active');
  // Add  new order pictures
  document.querySelector('#gallery__row').querySelectorAll('.gallery__item').forEach(el => {
    el.style.order = Math.floor(1 + Math.random() * 12);
  });
});


//  Border for picture
const gallery = document.getElementById('gallery__row');
const pictures = document.querySelectorAll('.gallery__item img');

gallery.addEventListener('click', (event) => {
  pictures.forEach(el => el.classList.remove('gallery__item--border'));
  event.target.classList.add('gallery__item--border');
});


// Get a quote
const form = document.getElementById('contacts-form');
const subject = document.getElementById('subject');
const descriptions = document.getElementById('form-descriptions');
const modal = document.getElementById('modal-wrap');
const modalButton = document.getElementById('modal-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  modal.hidden = false;

  if (!subject.value) {
    modal.querySelector('.modal p:nth-child(2)').insertAdjacentHTML('beforeend', `<span id="subj-modal"> Без темы </span>`)
  } else modal.querySelector('.modal p:nth-child(2)').insertAdjacentHTML('beforeend', `<span id="subj-modal"><strong>Тема:</strong> ${subject.value}</span>`);

  if (!descriptions.value) {
    modal.querySelector('.modal p:nth-child(3)').insertAdjacentHTML("beforeend", `<span id="desc-modal"> Без описания </span>`)
  } else modal.querySelector('.modal p:nth-child(3)').insertAdjacentHTML('beforeend', `<span id="desc-modal"><strong>Описание:</strong>${descriptions.value}</span>`);


  modalButton.addEventListener('click', (event) => {
    modal.hidden = true;
    modal.querySelector('#subj-modal').remove();
    modal.querySelector('#desc-modal').remove();
    form.reset();
  })
});


// Carousel
const phoneVerticalWrapper = document.getElementById('phone_vertical_wrapper');
const phoneVerticalScreen = document.getElementById('phone_vertical_screen');
const phoneHorizontalWrapper = document.getElementById('phone_horizontal_wrapper');
const phoneHorizontalScreen = document.getElementById('phone_horizontal_screen');
const carousel_slide = document.querySelector('.slider__slides');
const carousel_img = document.querySelectorAll('.carousel_img');
const prev_button = document.querySelector('.slider__prev_button');
const next_button = document.querySelector('.slider__next_button');
let size = carousel_img[0].clientWidth;
let counter = 1;

carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

window.addEventListener(`resize`, () => {
  size = document.documentElement.clientWidth >= 1020 ? 1020 : document.documentElement.clientWidth;
  carousel_slide.style.transition = 'none';
  carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  setTimeout(() => {
    carousel_slide.style.transition = 'transform 0.4s ease-in-out';
  }, 200)
});

next_button.addEventListener('click', () => {
  if (counter >= carousel_img.length - 1) return;
  carousel_slide.style.transition = 'transform 0.4s ease-in-out'
  counter++;
  carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev_button.addEventListener('click', () => {
  if (counter <= 0) return;
  carousel_slide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carousel_slide.addEventListener('transitionend', () => {
  phoneVerticalScreen.classList.remove('display_none');
  phoneHorizontalScreen.classList.remove('display_none');
  if (carousel_img[counter].id === 'last_clone') {
    carousel_slide.style.transition = 'none';
    counter = carousel_img.length - 2;
    carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    carousel_slide.style.stransition = 'transform 0.4s ease-in-out';
  }

  if (carousel_img[counter].id === 'first_clone') {
    carousel_slide.style.transition = 'none';
    counter = carousel_img.length - counter;
    carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    carousel_slide.style.stransition = 'transform 0.4s ease-in-out';
  }
});


// Turn ON/Off display
phoneVerticalWrapper.addEventListener('click', () => {
  phoneVerticalScreen.classList.contains('display_none') ?
    phoneVerticalScreen.classList.remove('display_none') :
    phoneVerticalScreen.classList.add('display_none');
});

phoneHorizontalWrapper.addEventListener('click', () => {
  phoneHorizontalScreen.classList.contains('display_none') ?
    phoneHorizontalScreen.classList.remove('display_none') :
    phoneHorizontalScreen.classList.add('display_none');
});

//  Burger

const burger = document.querySelector('.burger-menu');
const navbar = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay-mobile');
let countOfClicks = 0;


burger.addEventListener('click', (event) => {
  countOfClicks = (countOfClicks + 1) % 2;
  if (countOfClicks === 1) {
    burger.classList.add('active');
    overlay.classList.add('active');
    navbar.classList.add('mobile-active-menu');
    document.querySelector('body').classList.add('stop');


  } else {
    burger.classList.remove('active');
    navbar.classList.remove('mobile-active-menu');
    overlay.classList.remove('active');
    document.querySelector('body').classList.remove('stop');
  }
});

const mobileMenu = document.getElementById('menu');

mobileMenu.addEventListener('click', (event) => {
  if (event.target.closest('ul li a')) {
    countOfClicks = (countOfClicks + 1) % 2;
    navbar.classList.remove('mobile-active-menu');
    burger.classList.remove('active');
    overlay.classList.remove('active');
    document.querySelector('body').classList.remove('stop');
  }
})