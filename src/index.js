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

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.loadMoreBtn.classList.add('is-hidden');
console.log(refs.loadMoreBtn);

function onSearch(event) {
  event.preventDefault();

  newsApiService.query = event.currentTarget.elements.query.value;
  refs.loadMoreBtn.classList.add('is-hidden');
  clearImagesContainer();

  if (newsApiService.query === '') {
    return Notify.info('Введите запрос');
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
  const cardsMarkup = hits.map(hit => createImageCardMarkup(hit)).join('');
  refs.imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);
  refs.loadMoreBtn.classList.remove('is-hidden');
}

function clearImagesContainer() {
  refs.imageContainer.innerHTML = '';
}
