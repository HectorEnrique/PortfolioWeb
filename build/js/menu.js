const MENU = document.querySelector('#menu');
const ITEMS = document.querySelector('#items');

MENU.addEventListener('click', e => {
  e.preventDefault();
  if(e.target.classList.contains('bx-menu')) {
    e.target.classList.remove('bx-menu');
    e.target.classList.add('bx-x');
    ITEMS.classList.add('navegacion__items--active');
    return;
  }
  e.target.classList.remove('bx-x');
  e.target.classList.add('bx-menu');
  ITEMS.classList.remove('navegacion__items--active');
}) 
