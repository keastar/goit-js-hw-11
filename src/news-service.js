import { Notify } from 'notiflix';
const axios = require('axios').default;

const URL = `https://pixabay.com/api/`;
const KEY_API = `36301622-891f1a79dbe681583e2d486bc`;

//сервис отвечает за хранение запроса и номера группы
export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  //метод запрашивает по ссылке коллекцию изображений по определенным параметрам
  async fetchImages() {
    console.log(this);
    // const url = `${URL}?key=${KEY_API}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
    //парсит или возвращает найденные изображения
    const {
      data: { hits, totalHits },
    } = await axios.get(
      `${URL}?key=${KEY_API}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
    );
    if (this.page === 1 && hits.length !== 0) {
      Notify.info(`Hooray! We found ${totalHits} images!`);
    }
    this.incrementPage();
    console.log({ hits, totalHits });

    return { hits, totalHits };
  }
  // return fetch(url)
  //   .then(response => response.json())
  //   .then(({ hits, totalHits }) => {
  //     console.log({ hits, totalHits });
  //     return hits;
  //   });
  // }
  //сбрасывает номер странички
  resetPage() {
    this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }
  //контролирует термин запроса - получить или записать
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
