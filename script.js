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

//  Turn OFF display
const phoneVertical = document.querySelector('#vertical-phone');
const phoneHorizontal = document.querySelector('#horizontal-phone');
const screenVertical = document.querySelector('.phone__screen');
const screenHorizontal = document.querySelector('.phone--blue .phone__screen');

phoneVertical.addEventListener('click',() => switchDisplay(screenVertical));
phoneHorizontal.addEventListener('click',() => switchDisplay(screenHorizontal));

function switchDisplay(param) {
  if (param.classList[1] !== 'hide-screen') {
    param.classList.add('hide-screen');
  } else param.classList.remove('hide-screen');
}

//  Add active tag-menu
const tagsMenu = document.getElementById('tag-menu__row');
const tags = document.querySelectorAll('.tag-menu__item');

tagsMenu.addEventListener('click', (event) =>{
  tags.forEach(tag => tag.classList.remove('tag-menu__item--active'));
  event.target.classList.add('tag-menu__item--active');
// Add  new order pictures
  document.querySelector('#gallery__row').querySelectorAll('.gallery__item').forEach(el => {
    el.style.order = Math.floor(1+Math.random()*12);
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




