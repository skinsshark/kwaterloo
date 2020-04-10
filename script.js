const nav = document.getElementById('nav');
const NAV_THRESHOLD = 484;
const bg = document.getElementById('bg');

const contentContainer = document.querySelector('.content');
const body = document.querySelector('body');
const main = document.querySelector('main');

// sections
let curr = 'all'; // :-(

let rX = Math.ceil(Math.random()*60);
let rY = Math.ceil(Math.random()*43);

window.addEventListener("load", () => {
  bg.classList.remove('loading');
  setTimeout(() => main.classList.remove('loading'), 1000);
})

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY >= NAV_THRESHOLD) {
    nav.style.background = `
      radial-gradient(${rX}vw ${rY}vh at 46vw 50vh, #41E8DE 0%, #FFB72D 100%)
    `;
    bg.style.background = `
      radial-gradient(${rX}% ${rY}% at 50% 50%, #41E8DE 0%, #FFB72D 100%)
    `;
  } else {
    nav.style.background = 'transparent';
  }

  if (scrollY % 200 > 190) {
    rX = Math.ceil(Math.random()*60);
    rY = Math.ceil(Math.random()*43);
    bg.style.background = `
      radial-gradient(${rX}% ${rY}% at 50% 50%, #41E8DE 0%, #FFB72D 100%)
    `;

    if (scrollY >= NAV_THRESHOLD) {
      nav.style.background = `
        radial-gradient(${rX}vw ${rY}vh at 46vw 50vh, #41E8DE 0%, #FFB72D 100%)
      `;
    } else {
      nav.style.background = 'transparent';
    }
  }
}, {passive: true});

let contents = data;

function renderContent() {
  const shuffledContents = shuffleData(contents);
  shuffledContents.map((val, i) => {    
    contentContainer.innerHTML += `
      <div class="list-item">
        <p>${val.name}</p>
        <div class="gallery">
          ${val.files.length > 0 ? `<img src="./assets/${val.files[0]}.png" />` : ''}
          ${val.files.length > 1 ? `<img src="./assets/${val.files[1]}.png" />` : ''}
          ${val.files.length > 2 ? `<img src="./assets/${val.files[2]}.png" />` : ''}
        </div>
      </div>
    `;
  });
}

const secretContentContainer = document.getElementById('secret');

function renderSecret(arr) {
  arr.map((val, i) => {
    secretContentContainer.innerHTML += `<p>${val.name}</p>`
  });
}

function shuffleData(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function onFilterChange(e) {
  if (e.target.type != 'radio') {
    const selId = e.target.id;

    if (selId.length > 0 && selId != curr) {
      contentContainer.innerHTML = '';
      curr = selId;

      if (selId != 'all') {
        contents = data.filter(val => val.filters.has(selId))
      } else {
        contents = data
      }

      renderContent();
    }

    window.scroll({
      top: NAV_THRESHOLD,
      behavior: 'smooth'
    });
  }
}

// start
renderContent();
renderSecret(shuffleData(data));

let gravity = 0;

function switchMenu() {
  if (gravity === 1) {
    gravity = 0;
    body.classList.add('secret');
  } else {
    gravity = 1;
    body.classList.remove('secret');
  }
}
