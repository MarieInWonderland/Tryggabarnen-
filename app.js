
//HEADER

let navToggle = document.querySelector('.nav-toggle');
let navWrapper = document.querySelector('.nav-wrapper');
let dropdowns = document.querySelectorAll('.text-content');
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

//change the class of the li quand on clic on it 

document.querySelectorAll('.book-md').forEach(item => {
  item.addEventListener('click', () => {

    if (item.classList.contains('black-md')) {
      item.classList.remove('black-md');
      return;
    }

    document.querySelectorAll('.book-md').forEach(el => {
      el.classList.remove('black-md');
    });

    item.classList.add('black-md');
  });
});

//clic on the outside to go out
document.addEventListener('click', (e) => {
  
  const isClickInsideMenu = menuPanel.contains(e.target);
  const isClickOnToggle = navToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    closeMenu();
  }
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

//close the menu when we scroll
window.addEventListener('scroll', () => {
  closeMenu();
});

//panik button 
document.getElementById("panik").addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});

