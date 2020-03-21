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

//Change color menu target
links.addEventListener('click', onClick);
function onClick(event) {
  document.querySelectorAll('.nav-list__row a').forEach(a => a.classList.remove('nav-list__link--active'));
  if (event.target !== event.currentTarget) {
    event.target.classList.add('nav-list__link--active');
  }
}

//Turn OFF display
  const phoneVertical = document.querySelector('#vertical-phone');
  const phoneHorizontal = document.querySelector('#horizontal-phone');
  const screenVertical = document.querySelector('.phone__screen');
  const screenHorizontal = document.querySelector('.phone--blue .phone__screen');

  phoneVertical.addEventListener('click', () => {
    if (screenVertical.classList[1] !== 'hide-screen') {
      screenVertical.classList.add('hide-screen');
    } else screenVertical.classList.remove('hide-screen');
  });

  phoneHorizontal.addEventListener('click', () => {
    if (screenHorizontal.classList[1] !== 'hide-screen') {
      screenHorizontal.classList.add('hide-screen');
    } else screenHorizontal.classList.remove('hide-screen');
  });

//





