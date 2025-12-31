const grassContainer = document.querySelector('.grass-container');
const surpriseBox = document.querySelector('.surprise-box');
const letterContainer = document.querySelector('.letter-container');
const closeLetterButton = document.querySelector('.close-letter-button');


/*============================================================*/
// ------------------------Código <---------------------------------------------------------------
/*============================================================*/

// ---------------------> Silly Variáveis de Controle
let touchCount = 0;
const touchesForSurprise = 15;
let isSurpriseActive = false;

const flowerVarieties = [
  'flor-margarida.png',
  'flor-tulipa.png',
  'flor-girassol.png',
  'flor-anemona.png' 
];

// ---------------------> Ouvir os Toques (goat dmais)
grassContainer.addEventListener('click', (event) => {
  const spawnVideo = document.createElement('video');
  
  spawnVideo.src = './assets/rosa-brotando.webm';
  spawnVideo.autoplay = true;
  spawnVideo.muted = true;
  spawnVideo.playsInline = true;

  spawnVideo.classList.add('idle-flower'); 
  const rect = grassContainer.getBoundingClientRect();
  const flowerX = event.clientX - rect.left - 40;
  const flowerY = event.clientY - rect.top - 40;
  spawnVideo.style.left = `${flowerX}px`;
  spawnVideo.style.top = `${flowerY}px`;

  grassContainer.appendChild(spawnVideo);
  
  spawnVideo.addEventListener('ended', () => {
    const idleFlower = document.createElement('div');
    
    idleFlower.classList.add('idle-flower'); 
    idleFlower.classList.add('idle-rosa'); 

    idleFlower.style.left = spawnVideo.style.left;
    idleFlower.style.top = spawnVideo.style.top;

    grassContainer.appendChild(idleFlower);

    spawnVideo.remove();
  });
  
  touchCount++;
  
  if (touchCount >= touchesForSurprise) {
    isSurpriseActive = true;
    showPresentBox();
  }
});


/*============================================================*/
// -------------Função Mostrar Mensagem Surpresa <-----------------------------------------------
/*============================================================*/
function showPresentBox() {
  surpriseBox.classList.add('show');
}

surpriseBox.addEventListener('click', () => {
  letterContainer.classList.add('show');
});

closeLetterButton.addEventListener('click', () => {
  letterContainer.classList.remove('show');
});
