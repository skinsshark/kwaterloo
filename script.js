const nav = document.getElementById('nav');

window.addEventListener("scroll", () => {
  if (window.scrollY >= 484) {
    nav.classList.add('stop')
  } else {
    nav.classList.remove('stop')
  }
}, {passive: true});
