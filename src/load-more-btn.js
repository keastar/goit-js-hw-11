// import './css/styles.css';

export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector); //  в свойство refs при инициализации экземпляра сразу вызываем getRefs
    //и сохраняем данные

    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector('selector');
    refs.label = refs.button.querySelector('.label');
    return refs;
  }

  // enable() {
  //   this.refs.button.disabled = false;
  //   this.refs.label.textContent = 'Показать еще';
  // }

  // disable() {
  //   this.refs.button.disabled = true;
  //   this.refs.label.textContent = 'Загружаем..';
  // }

  // show() {
  //   this.refs.button.classList.remove('is-hidden');
  // }

  // hide() {
  //   this.refs.button.classList.add('is-hidden');
  // }
}
