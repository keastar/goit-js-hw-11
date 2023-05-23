import NewsApiService from './news-service';
import { createImageCardMarkup } from './card-markup';
// import LoadMoreBtn from './load-more-btn';
import './css/styles.css';

const refs = {
  searchForm: document.querySelector('#search-form'),
  imageContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
// console.log(refs.loadMoreBtn);

function onSearch(event) {
  event.preventDefault();

  newsApiService.query = event.currentTarget.elements.query.value;
  clearImagesContainer();

  if (newsApiService.query === '') {
    return alert('Введите запрос');
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
}

function clearImagesContainer() {
  refs.imageContainer.innerHTML = '';
}
