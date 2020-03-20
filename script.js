const onScroll = () => {
  const curPos = window.scrollY + 95;
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

};

document.addEventListener('scroll', onScroll);