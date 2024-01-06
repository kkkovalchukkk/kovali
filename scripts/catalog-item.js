import data from './data.js';

const id = window.location.search.replace(/^\D+/g, '');
const card = data.find((c) => c.id === +id);

const articleContentImgEl = document.querySelector(
  '.item-section__content-img'
);
const articleInfoImgEl = document.querySelector('.item-section__info-img');
const activeBreadCrumbLinkEl = document.querySelector(
  '.breadcrumbs__link_active'
);
const articleHeadingEl = document.querySelector('.item-section__info-heading');
const articlePriceEl = document.querySelector('.item-section__price');
const articleInfoListEl = document.querySelector('.item-section__info-list');
const articleColorLinkEl = document.querySelector(
  '.item-section__info-color-link'
);
const articleTextContentEl = document.querySelector(
  '.item-section__text-content'
);

if (card) {
  articleContentImgEl.src = card.img;
  articleInfoImgEl.src = card.img;
  articleContentImgEl.alt = card.title;
  articleInfoImgEl.alt = card.title;
  activeBreadCrumbLinkEl.textContent = card.title;
  activeBreadCrumbLinkEl.href = window.location.href;
  articleHeadingEl.textContent = card.title;
  articlePriceEl.textContent = card.price.toLocaleString() + ' ₽';

  if (card.weight) {
    articleInfoListEl.insertAdjacentHTML(
      'beforeend',
      `
    <div class="item-section__info-item">
        <h2 class="item-section__info-item-heading">
            Фасовка
        </h2>
        <div class="item-section__info-item-list">
        ${card.weight
          .map((title, idx) => {
            return `<button class="item-section__info-item-list-link ${
              idx === 0 ? 'active' : ''
            }">
                ${title} кг
            </button>`;
          })
          .join('')}
        </div>
    </div>
    `
    );
  }

  if (card.category === 4) {
    articleColorLinkEl.remove();
  }

  articleTextContentEl.innerHTML = card.description;
}

articleInfoListEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    articleInfoListEl
      .querySelectorAll('button')
      .forEach((a) => a.classList.remove('active'));
    e.target.classList.add('active');
  }
});
