import data from './data.js';

const filterEls = document.querySelectorAll('.catalog-section__filter');
const catalogListEl = document.querySelector('.catalog-section__list');
const filterCheckboxInputEls = document.querySelectorAll(
  'input[name="filter"]'
);
const resetBtnEl = document.querySelector('.catalog-section__filter-reset-btn');

let idx = [];

const resetAllFilters = () => {
  filterEls.forEach((f) => {
    const content = f.querySelector('.catalog-section__filter-content');
    f.classList.remove('active');
    content.style.maxHeight = 0 + 'px';
  });
};

const generateCardLayout = ({ id, title, img }) => {
  return `
    <li data-id="${id}" class="catalog-section__list-item">
        <a href="/catalog-item.html?id=${id}" class="catalog-section__list-item-wrapper">
            <div class="catalog-section__list-item-img-wrapper">
                <img src="${img}"
                    alt="${title}"
                    class="catalog-section__list-item-img">
            </div>
            <h3 class="catalog-section__list-item-heading">
               ${title}
            </h3>
        </a>
    </li>
    `;
};

const clearList = () => (catalogListEl.textContent = '');

data.forEach((cardData) => {
  catalogListEl.insertAdjacentHTML('beforeend', generateCardLayout(cardData));
});

filterEls.forEach((f) => {
  const header = f.querySelector('.catalog-section__filter-header');
  const content = f.querySelector('.catalog-section__filter-content');

  header.addEventListener('click', () => {
    if (f.classList.contains('active')) {
      f.classList.remove('active');
      content.style.maxHeight = 0 + 'px';
    } else {
      resetAllFilters();
      f.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

filterEls[0].classList.add('active');
filterEls[0].querySelector('.catalog-section__filter-content').style.maxHeight =
  filterEls[0].querySelector('.catalog-section__filter-content').scrollHeight +
  'px';

filterCheckboxInputEls.forEach((inp) =>
  inp.addEventListener('change', () => {
    clearList();

    if (inp.checked) {
      idx = [...idx, +inp.dataset.id];
    } else {
      idx = idx.filter((i) => i !== +inp.dataset.id);
    }
    data
      .filter((c) => idx.includes(+c.category))
      .forEach((cardData) => {
        catalogListEl.insertAdjacentHTML(
          'beforeend',
          generateCardLayout(cardData)
        );
      });

    if (!idx.length) {
      clearList();
      data.forEach((cardData) => {
        catalogListEl.insertAdjacentHTML(
          'beforeend',
          generateCardLayout(cardData)
        );
      });
      return;
    }
    console.log(idx);
  })
);

resetBtnEl.addEventListener('click', () => {
  idx = [];
  clearList();
  data.forEach((cardData) => {
    catalogListEl.insertAdjacentHTML('beforeend', generateCardLayout(cardData));
  });
});
