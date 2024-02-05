import articles from './articles.js';

const articlesSectionDatefilterEl = document.querySelector(
  '.articles-section__date-filter'
);
const articlesListEl = document.querySelector('.articles-section__list');

let articleIdx = 0;

for (let key in articles) {
  let isActive;
  if (articleIdx === 1) {
    isActive = true;
  }
  articlesSectionDatefilterEl.insertAdjacentHTML(
    'afterbegin',
    ` 
                                <a href="#" class="articles-section__date-filter-link ${
                                  isActive ? 'active' : ''
                                }">
                                    ${key}
                                </a>`
  );

  articleIdx++;
}
articles[2023].map((art) => {
  articlesListEl.insertAdjacentHTML(
    'beforeend',
    `
    <li class="articles-section__list-item">
        <a href="/article.html?year=2023&id=${art.id}" class="articles-section__list-item-link-wrapper">
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

articlesSectionDatefilterEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    articlesSectionDatefilterEl
      .querySelectorAll('a')
      .forEach((a) => a.classList.remove('active'));
    e.target.classList.add('active');
    articlesListEl.textContent = '';
    articles[+e.target.textContent].map((art) => {
      articlesListEl.insertAdjacentHTML(
        'beforeend',
        `
    <li class="articles-section__list-item">
        <a href="/article.html?year=${+e.target.textContent}&id=${
          art.id
        }" class="articles-section__list-item-link-wrapper">
            <div class="articles-section__list-item-img-wrapper">
                <img src="${art.img}" alt="${
          art.title
        }" class="articles-section__list-item-img">
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
});
