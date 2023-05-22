export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    console.log(this);
    const url = `https://pixabay.com/api/?key=36301622-891f1a79dbe681583e2d486bc&q=${this.searchQuery}&image_type=photo&per_page=40&page=${this.page}`;

    return fetch(url)
      .then(r => r.json())
      .then(image => {
        this.page += 1;
        return image.hits;
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
