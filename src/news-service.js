const URL = `https://pixabay.com/api/`;
const KEY_API = `36301622-891f1a79dbe681583e2d486bc`;

//сервис отвечает за хранение запроса и номера группы
export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  //метод запрашивает по ссылке коллекцию изображений по определенным параметрам
  fetchImages() {
    console.log(this);
    const url = `${URL}?key=${KEY_API}&q=${this.searchQuery}&image_type=photo&per_page=40&page=${this.page}`;
    //парсит или возвращает найденные изображения
    return fetch(url)
      .then(r => r.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  }

  //сбрасывает номер странички

  resetPage() {
    this.page = 1;
  }

  //контролирует термин запроса - получить или записать

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
