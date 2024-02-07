const headerBurgerBtnEl = document.querySelector('.header__burger-btn');
const mobileMenuEl = document.querySelector('.mobile-menu');

headerBurgerBtnEl.addEventListener('click', () => {
  if (mobileMenuEl.classList.contains('active')) {
    mobileMenuEl.classList.remove('active');
    document.rootElement.classList.remove('active');
    document.body.classList.remove('no-scroll');
  } else {
    document.rootElement.classList.add('active');
    mobileMenuEl.classList.add('active');
    document.body.classList.add('no-scroll');
  }
});

mobileMenuEl.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    document.rootElement.classList.remove('active');
    mobileMenuEl.classList.remove('active');
    document.body.classList.remove('no-scroll');
  })
);
