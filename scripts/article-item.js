import articles from './articles.js';

const url = new URL(window.location);
const year = url.searchParams.get('year');
const id = url.searchParams.get('id');
const article = articles[year].find((art) => art.id === +id);

const breadCrumbActiveLink = document.querySelector(
  '.breadcrumbs__link_active'
);
const articleHeading = document.querySelector('.article-section__heading');
const articleDate = document.querySelector('.article-section__date');
const articleImg = document.querySelector('.article-section__img');
const articleTextContent = document.querySelector(
  '.article-section__text-content'
);

if (article) {
  breadCrumbActiveLink.href = window.location.href;
  breadCrumbActiveLink.textContent = article.title;

  articleHeading.textContent = article.title;
  articleDate.textContent = article.date;
  articleImg.src = article.img;
  articleImg.alt = article.title;

  articleTextContent.innerHTML = article.descr;
} else {
  window.location.assign('/');
}
