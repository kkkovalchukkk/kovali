const aboutMessageEls = document.querySelectorAll(
  '.about-section__overlay-message'
);

const tabsWrapperEl = document.querySelector('.projects-section__tabs');
const tabEls = tabsWrapperEl.querySelectorAll('.projects-section__tab');

aboutMessageEls.forEach((m) => {
  m.addEventListener('mouseenter', () => {
    aboutMessageEls.forEach((m) => m.classList.add('hidden'));
    m.classList.remove('hidden');
  });
  m.addEventListener('mouseleave', () => {
    aboutMessageEls.forEach((m) => m.classList.remove('hidden'));
  });
});

const projectSectionSwiper = new Swiper('.projects-section__swiper', {
  slidesPerView: 1,
  effect: 'fade',
  navigation: {
    prevEl: '.projects-section__swiper-nav-btn_left',
    nextEl: '.projects-section__swiper-nav-btn_right',
  },
  pagination: {
    el: '.projects-section__swiper-pagination',
  },
  on: {
    slideChange: (e) => {
      const activeIdx = e.activeIndex;
      tabEls.forEach((t) => t.classList.remove('active'));
      tabEls[activeIdx].classList.add('active');
    },
  },
});
const animEls = document.querySelectorAll('.anim-on-view');

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('view');
    }
  });
};
const myObserver = new IntersectionObserver(callback);
if (window.innerWidth <= 1024) {
  animEls.forEach((card) => myObserver.observe(card));
}
