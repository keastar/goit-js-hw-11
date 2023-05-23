import NewsApiService from './news-service';
import { createImageCardMarkup } from './card-markup';
import LoadMoreBtn from './load-more-btn';
import './css/styles.css';

const refs = {
  searchForm: document.querySelector('.search-form'),
  imageContainer: document.querySelector('.gallery'),
  // loadMoreBtn: document.querySelector('.load-more'),
};

//это экземпляр класса "class LoadMoreBtn"
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const newsApiService = new NewsApiService();

console.log(loadMoreBtn);

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();

  clearImagesContainer();
  newsApiService.query = event.currentTarget.elements.query.value;

  if (newsApiService.query === '') {
    return alert('Введите запрос');
  }

  loadMoreBtn.show();
  loadMoreBtn.disable();
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
