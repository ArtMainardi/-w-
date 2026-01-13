const grassContainer = document.querySelector('.grass-container');
const surpriseBox = document.querySelector('.surprise-box');
const letterContainer = document.querySelector('.letter-container');
const closeLetterButton = document.querySelector('.close-letter-button');
const touchCounterElement = document.querySelector('#touch-counter'); 
const currentTouchesSpan = document.querySelector('#current-touches');


/*============================================================*/
// ------------------------Código <---------------------------------------------------------------
/*============================================================*/

// ---------------------> Silly Variáveis de Controle
let touchCount = 0;
const touchesForSurprise = 15;
let isSurpriseActive = false;

const flowerCatalog = [
  {
    name: 'rosa',
    spawnSprite: './assets/rosa-brotando-sprite.png', // Spritesheet de 16 frames
    idleSprite: './assets/rosa-espera-sprite.png'    // Spritesheet de 2 frames
  },
  {
    name: 'gira-sol',
    spawnSprite: './assets/gira-sol-brotando-sprite.png', // Spritesheet de 16 frames
    idleSprite: './assets/gira-sol-espera-sprite.png'    // Spritesheet de 2 frames
  }
];

// ---------------------> Ouvir os Toques (goat dmais)
grassContainer.addEventListener('click', (event) => {
  const randomFlowerData = flowerCatalog[Math.floor(Math.random() * flowerCatalog.length)];
  
  const spawnAnimation = document.createElement('div');
  spawnAnimation.classList.add('spawn-animation'); 

  spawnAnimation.style.backgroundImage = `url('${randomFlowerData.spawnSprite}')`;
  
  const rect = grassContainer.getBoundingClientRect();
  const flowerX = event.clientX - rect.left - 40;
  const flowerY = event.clientY - rect.top - 40;
  spawnAnimation.style.left = `${flowerX}px`;
  spawnAnimation.style.top = `${flowerY}px`;
  grassContainer.appendChild(spawnAnimation);

  animateSprite(spawnAnimation, 16, 100, () => {
    
    const idleFlower = document.createElement('div');
    idleFlower.classList.add('idle-flower'); 
    idleFlower.classList.add(`idle-${randomFlowerData.name}`);

    idleFlower.style.left = spawnAnimation.style.left;
    idleFlower.style.top = spawnAnimation.style.top;

    grassContainer.appendChild(idleFlower);

    spawnAnimation.remove();
  });

  touchCount++;

  if (touchCount === 1) {
    touchCounterElement.classList.add('visible');
  }
  currentTouchesSpan.textContent = touchCount;

  if (touchCount >= touchesForSurprise) {
    isSurpriseActive = true;
    showPresentBox();

    touchCounterElement.style.opacity = '0';
  }
});

/*============================================================*/
// ---------------------Funções <-----------------------------------------------
/*============================================================*/
function animateSprite(element, totalFrames, frameDuration, onAnimationEnd) {
  let currentFrame = 0;
  
  const animationInterval = setInterval(() => {
    const row = Math.floor(currentFrame / 4);
    const col = currentFrame % 4;
    
    const xPos = -col * 80; 
    const yPos = -row * 80; 
    
    element.style.backgroundPosition = `${xPos}px ${yPos}px`;
    
    currentFrame++;

    if (currentFrame >= totalFrames) {
      clearInterval(animationInterval); 
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }
  }, frameDuration); 
}

function showPresentBox() {
  surpriseBox.classList.add('show');
}

surpriseBox.addEventListener('click', () => {
  letterContainer.classList.add('show');
});

closeLetterButton.addEventListener('click', () => {
  letterContainer.classList.remove('show');
});
