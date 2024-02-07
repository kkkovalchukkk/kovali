const instrumentsBg = [
  'instrument-bg-1',
  'instrument-bg-2',
  'instrument-bg-3',
  'instrument-bg-4',
  'instrument-bg-5',
];
let curentBgIdx = 0;
let a = 0;
let lastScrollTop = 0;

const instrumentSectionEl = document.querySelector('.instruments-section');

const aboutMessageEls = document.querySelectorAll(
  '.about-section__overlay-message'
);

const tabsWrapperEl = document.querySelector('.projects-section__tabs');
const tabEls = tabsWrapperEl.querySelectorAll('.projects-section__tab');
const ownerSectionEl = document.querySelector('.owner-section');

aboutMessageEls.forEach((m) => {
  m.addEventListener('mouseenter', () => {
    aboutMessageEls.forEach((m) => {
      m.classList.add('hidden');
      m.classList.remove('active');
    });
    m.classList.add('active');
    m.classList.remove('hidden');
  });
  m.addEventListener('mouseleave', () => {
    aboutMessageEls.forEach((m) => {
      m.classList.remove('hidden');
      m.classList.remove('active');
    });
  });
});

window.addEventListener(
  'scroll',
  function () {
    if (window.innerWidth <= 1096) return;
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      document.querySelector('.header').classList.add('hidden');
    } else if (st < lastScrollTop) {
      document.querySelector('.header').classList.remove('hidden');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

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

const instrumentSectionSwiper = new Swiper('.instruments-section__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 8,
  speed: 30000,
  freeMode: true,
  slideToClickedSlide: true,
  autoplay: {
    delay: 0,
    waitForTransition: false,
    disableOnInteraction: true,
  },
  centeredSlide: true,
  on: {
    click(e) {
      clearInterval(cardInterval);
      instrumentSectionEl.style.backgroundImage = `url(./assets/img/${
        instrumentsBg[e.clickedIndex]
      }.jpg)`;
      const slides = document.querySelectorAll(
        '.instruments-section__swiper-slide'
      );
      slides.forEach((s) => s.classList.remove('active'));
      slides[e.clickedIndex].classList.add('active');
    },
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
        this.params.speed = 650;
      });
    },
  },
  // breakpoints: {
  //   1240: {
  //     slidesPerView: 3,
  //   },
  //   769: {
  //     slidesPerView: 2,
  //   },
  //   320: {
  //     slidesPerView: 1,
  //   },
  // },

  navigation: {
    prevEl: '.instruments-section__swiper-navigation-btn-left',
    nextEl: '.instruments-section__swiper-navigation-btn-right',
  },
});

const animEls = document.querySelectorAll('.anim-on-view');

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('view'), 1600);
    }
  });
};

const callbacktwo = (entries, observer) => {
  entries.forEach((e) => {
    e.target.classList.add('view');
  });
};

const myObserver = new IntersectionObserver(callback);

let observer = new IntersectionObserver(function (entries, observer) {
  a !== 0 && ownerSectionEl.classList.add('view');
  a++;
});

observer.observe(document.querySelector('.owner-section__review'));

if (window.innerWidth <= 1280) {
  animEls.forEach((card) => myObserver.observe(card));
}

instrumentSectionEl.style.backgroundImage = `url(./assets/img/${instrumentsBg[curentBgIdx]}.jpg)`;
const slides = document.querySelectorAll('.instruments-section__swiper-slide');
slides.forEach((s) => s.classList.remove('active'));
slides[curentBgIdx].classList.add('active');

const cardInterval = setInterval(() => {
  instrumentSectionEl.style.backgroundImage = `url(./assets/img/${instrumentsBg[curentBgIdx]}.jpg)`;
  const slides = document.querySelectorAll(
    '.instruments-section__swiper-slide'
  );
  slides.forEach((s) => s.classList.remove('active'));
  slides[curentBgIdx].classList.add('active');

  if (instrumentsBg.length - 1 == curentBgIdx) {
    curentBgIdx = 0;
  } else {
    curentBgIdx++;
  }
}, 5000);
