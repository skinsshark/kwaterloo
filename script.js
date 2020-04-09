const nav = document.getElementById('nav');
const NAV_THRESHOLD = 484;
const bg = document.getElementById('bg');

const contentContainer = document.querySelector('.content');

// sections
let curr = 'all'; // :-(

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY >= NAV_THRESHOLD) {
    nav.classList.add('stop')
  } else {
    nav.classList.remove('stop')
  }

  if (scrollY % 20 > 15) {
    const rX = Math.ceil(Math.random()*60);
    const rY = Math.ceil(Math.random()*43);

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
  const shuffledContents = shuffleData(contents)
  shuffledContents.map((val, i) => {
    contentContainer.innerHTML += `<p>${val.name}</p>`
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
  }
}

// start
renderContent();
