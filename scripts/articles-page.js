import articles from './articles.js';

const articlesSectionSwiperWrapperEl = document.querySelector(
  '.articles-section__swiper-wrapper'
);
const articlesListEl = document.querySelector('.articles-section__list');

let articleIdx = 0;

for (let key in articles) {
  let isActive;
  if (articleIdx === 0) {
    isActive = true;
  }

  articlesSectionSwiperWrapperEl.innerHTML += ` <div class="swiper-slide articles-section__swiper-slide">
                                <a href="#" class="articles-section__date-filter-link ${
                                  isActive ? 'active' : ''
                                }">
                                    ${key}
                                </a>
                            </div>`;
  articleIdx++;

  articles[key].map((art) => {
    articlesListEl.insertAdjacentHTML(
      'beforeend',
      `
    <li class="articles-section__list-item">
        <a href="/article.html?year=${key}&id=${art.id}" class="articles-section__list-item-link-wrapper">
            <div class="articles-section__list-item-img-wrapper">
                <img src="${art.img}" alt="${art.title}" class="articles-section__list-item-img">
            </div>
            <p class="articles-section__list-item-heading">
                ${art.title}
            </p>
        </a>
    </li>
    
    `
    );
  });
}

const articlesSectionSwiper = new Swiper('.articles-section__date-filter', {
  slidesPerView: 'auto',
  spaceBetween: 40,
});
