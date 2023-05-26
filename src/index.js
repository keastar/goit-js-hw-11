import NewsApiService from './news-service';
import { createImageCardMarkup } from './card-markup';
// import LoadMoreBtn from './load-more-btn';
import './css/styles.css';
import { Notify } from 'notiflix';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  searchForm: document.querySelector('#search-form'),
  imageContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();
refs.loadMoreBtn.classList.add('is-hidden');
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

console.log(refs.loadMoreBtn);

function onSearch(event) {
  event.preventDefault();

  newsApiService.query = event.currentTarget.elements.query.value;
  hideLoadMoreBtn();
  clearImagesContainer();

  if (newsApiService.query === '') {
    return Notify.info('Enter a request!');
  }

  // loadMoreBtn.show();
  // loadMoreBtn.disable();
  newsApiService.resetPage();
  newsApiService.fetchImages().then(renderImages);
}

function onLoadMore(event) {
  newsApiService.fetchImages().then(renderImages);
}

function renderImages(hits) {
  if (hits.length !== 0) {
    const cardsMarkup = hits.map(hit => createImageCardMarkup(hit)).join('');
    refs.imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);
    showLoadMoreBtn();
  } else {
    noRes();
    return;
  }
}

function clearImagesContainer() {
  refs.imageContainer.innerHTML = '';
}

function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('is-hidden');
}

function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('is-hidden');
}

function showEndofImgs() {
  Notify.info('Were sorry, but youve reached the end of search results.');
}

function noRes() {
  Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}
