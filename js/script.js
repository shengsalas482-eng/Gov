// abre o menu mobile
function openMenu() {

    let menu = document.getElementById('menu-mobile-list');

    menu.classList.toggle('open-menu');

    let menuMobileBtn = document.querySelector('.menu-mobile-btn');

    menuMobileBtn.classList.toggle('active');

}

// Abre barra de pesquisa mobile
const pesquisaButton = document.getElementById("pesquisa-btn");
const janelaDeBuscaHeader = document.getElementById("header-busca");
let isOpened = false;

pesquisaButton.addEventListener("click", () => {
  isOpened = !isOpened;
  if (isOpened) {
    pesquisaButton.classList.add("active");
    janelaDeBuscaHeader.classList.add("active");
    janelaDeBuscaHeader.style.top = "0";
  } else {
    pesquisaButton.classList.remove("active");
    janelaDeBuscaHeader.classList.remove("active");
  }
});

//mostra botões do video ao passar o mouse na versão deskotp
document.addEventListener('DOMContentLoaded', function () {
  const playerWrapper = document.querySelector('.player-video-selecionavel');
  const video = playerWrapper?.querySelector('video');

  if (!playerWrapper || !video) return;

  const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isMobile) {
    video.setAttribute('controls', true);
  } else {
    video.removeAttribute('controls');

    playerWrapper.addEventListener('mouseenter', () => {
      video.setAttribute('controls', true);
    });

    playerWrapper.addEventListener('mouseleave', () => {
      video.removeAttribute('controls');
    });
  }
});