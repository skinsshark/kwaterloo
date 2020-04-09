const nav = document.getElementById('nav');
const NAV_THRESHOLD = 484;
const bg = document.getElementById('bg');

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
        radial-gradient(${rX}vw ${rY}vh at 50vw 50vh, #41E8DE 0%, #FFB72D 100%)
      `;
    } else {
      nav.style.background = 'transparent';
    }
  }
}, {passive: true});
