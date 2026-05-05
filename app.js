
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
  
  let isClickInsideMenu = menuPanel.contains(e.target);
  let isClickOnToggle = navToggle.contains(e.target);

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

//Läs mer btn 
let loadMore_btn = document.getElementById("loadMore");
let activities_cards = document.querySelectorAll(".activity-card");

let visible = 9;

if(window.location.pathname === '/trygga-häng.html') {
  loadMore_btn.addEventListener("click", () => {
    for (let i = visible; i < visible + 3; i++) {
      if (activities_cards[i]) {
          activities_cards[i].style.display = "block";
        }
      }
      
        visible += 3;
        if (visible >= activities_cards.length) {
            loadMore_btn.style.display = "none";
          }
  });
          
} else if(window.location.pathname === '/aktivitet.html') {

  //Form 
  
  let inputs = document.querySelectorAll("input");
  let button = document.getElementById("submitBtn");
  
  function checkForm() {
    let isValid = true;
    
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        isValid = false;
      }
    });
    
    button.disabled = !isValid;
  }
  
  inputs.forEach(input => {
    input.addEventListener("input", checkForm);
  });
  
  //Count 
  let textarea = document.getElementById("message");
  let current = document.getElementById("current");
  
  textarea.addEventListener("input", () => {
    console.log('input');
    
    current.textContent = textarea.value.length;
  });
  
  //send form  
  document.getElementById("submitBtn").addEventListener("click", () => {
    window.location.href = "tack.html";
  });

  //se alla 
  document.getElementById("se-alla").addEventListener("click", () => {
  window.location.href = "trygga-häng.html";
});
} else if(window.location.pathname === '/tack.html') {
  //Tillbaka till trygga häng aktiviter
  document.getElementById("tillbaka").addEventListener("click", () => {
  window.location.href = "trygga-häng.html";
  });
}
