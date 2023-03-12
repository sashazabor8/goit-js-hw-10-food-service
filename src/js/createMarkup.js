import menu from '../JSON/menu.json';
import markupCards from '../hbs/markupCard.hbs';

const jsMenuRef = document.querySelector('.js-menu');
jsMenuRef.insertAdjacentHTML('beforeend', markupCards(menu))

