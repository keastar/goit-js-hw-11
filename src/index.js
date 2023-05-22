const refs = {
  searchForm: document.querySelector('.search-form'),
  imageContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const url =
    'https://pixabay.com/api/?key=36301622-891f1a79dbe681583e2d486bc&q=yellow+flowers&image_type=photo&per_page=40&page=1';

  fetch(url)
    .then(r => r.json())
    .then(console.log);
}
