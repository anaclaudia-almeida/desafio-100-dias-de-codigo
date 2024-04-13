let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('list-menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=> {
  menu.classList.add('abrir-menu-mob')
})

menu.addEventListener('click', ()=> {
  menu.classList.remove('abrir-menu-mob')
})

overlay.addEventListener('click', ()=> {
  menu.classList.remove('abrir-menu-mob')
})

