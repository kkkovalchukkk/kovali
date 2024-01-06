const headerBurgerBtnEl = document.querySelector('.header__burger-btn');
const mobileMenuEl = document.querySelector('.mobile-menu');

headerBurgerBtnEl.addEventListener('click', () => {
  if (mobileMenuEl.classList.contains('active')) {
    mobileMenuEl.classList.remove('active');
    document.body.classList.remove('no-scroll');
  } else {
    mobileMenuEl.classList.add('active');
    document.body.classList.add('no-scroll');
  }
});
