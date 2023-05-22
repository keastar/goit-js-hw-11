import NewsApiService from './news-service';
import { createImageCardMarkup } from './card-markup';

const refs = {
  searchForm: document.querySelector('.search-form'),
  imageContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};
const newsApiService = new NewsApiService();
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();

  newsApiService.query = event.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchImages().then(hits => console.log(hits));
}

function onLoadMore(event) {
  newsApiService.fetchImages().then(hits => console.log(hits));
}

function renderImages(images) {
  const cardsMarkup = images
    .map(image => createImageCardMarkup(image))
    .join('');
  refs.imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);
}
