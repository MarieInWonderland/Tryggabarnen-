
//HEADER

let navToggle = document.querySelector('.nav-toggle');
let navWrapper = document.querySelector('.nav-wrapper');
let dropdowns = document.querySelectorAll('.dropdown-toggle');
let menuPanel = document.querySelector ('.menu-panel');


navToggle.addEventListener('click', () => {
  console.log('click');
  navToggle.classList.toggle('open');
  navWrapper.classList.toggle('open');
  console.log('test');
  
  document.body.classList.toggle('menu-open');
});

// dropdown mobile
dropdowns.forEach(drop => {
  drop.addEventListener('click', (e) => {
    e.preventDefault();
    

    let subnav = drop.closest('li').querySelector('.subnav');
    subnav.classList.toggle('open');
  });
});

//clic on the outside to go out
navWrapper.addEventListener('click', () => {
  closeMenu();
});

// stop the closing if clic in the menu
menuPanel.addEventListener('click', (e) => {
  e.stopPropagation();
});

function closeMenu() {
  navToggle.classList.remove('open');
  navWrapper.classList.remove('open');
  document.body.classList.remove('menu-open');
}
