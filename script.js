/* --- CSS Reset Básico --- */
* {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, h5, h6, p, ul, ol {
  margin: 0;
  padding: 0;
}

/* --- Fim do Reset --- */

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  background: #36413E;
}



/* ================================================ */
/* -------------Jardim <--------------------------------------------------------*/
/* ================================================ */
#garden-canvas {
  display: flex;
  flex-direction: column;
  width: 700px; 
  height: 100vh;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: grid;
  place-items: center;
}
.sky-container {
  width: 700px;
  height: 35vh;
  background: linear-gradient(180deg, #85C7F2, #FFFFFF);
  position: relative; 
  grid-column: 1; 
  grid-row: 1;
  align-self: start;
}
.sun {
  position: absolute;
  top: 20px; 
  right: 20px;
  width: 200px; 
  height: 200px;
  
  background-image: url('./assets/sol-sprite.png');
  
  background-size: 400px 200px; 
  
  animation: sol-pulsa 2s steps(2) infinite;
}
@keyframes sol-pulsa {
  to {
    background-position: -400px 0;
  }
}

.subtitle {
  position: absolute;
  width: 100%;
  bottom: 15px; 
  left: 0;
  
  text-align: center;
  font-size: 25px; 
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5); 
  text-shadow: 2px 2px 3px rgb(0 0 0 / 20%); 
  
  user-select: none; 
  
  animation: pulsar-texto 4s ease-in-out infinite;
}
@keyframes pulsar-texto {
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
}

.grass-container {
  width: 700px;
  height: 65vh;
  cursor: pointer;
  position: relative;
  background:
    radial-gradient(circle at 70% 30%, rgb(88 146 60 / 30%) 0%, transparent 30%),
    radial-gradient(circle at 30% 80%, rgb(176 244 142 / 30%) 0%, transparent 25%),
    
    radial-gradient(circle at 90% 70%, rgb(144 178 68 / 40%) 0%, transparent 50%),
    radial-gradient(circle at 10% 20%, rgb(108 154 51 / 40%) 0%, transparent 40%),
    
    linear-gradient(180deg, #C1F387, #5aa73b);
}
.spawn-animation {
  position: absolute;
  width: 80px; 
  height: 80px;
  pointer-events: none;
  
  background-image: url('./assets/rosa-brotando-sprite.png');
  background-size: 320px 320px; 
  
  background-position: 0 0;
}


/* ================================================ */
/* ------------------ Flores <--------------------------------------------------------*/
/* ================================================ */
.idle-flower {
  position: absolute;
  width: 80px;
  height: 80px;
  pointer-events: none;
}
.idle-rosa {
  background-image: url('./assets/rosa-espera-sprite2.png');
  background-size: 160px 80px;
  animation: espera-anim 1s steps(2) infinite;
}

@keyframes espera-anim {
  to {
    background-position: -160px 0; 
  }
}


/* ================================================ */
/* ------------- Caixa de Presente <--------------------------------------------------------*/
/* ================================================ */
.surprise-box {
  position: fixed;
  top: 50%;
  left: 50%;
  
  height: 60px;
  width: 60px;
  border: none;
  border-radius: 20px;
  background-color: #FFFFFF;
  cursor: pointer;
  
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease;
  
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5); 
  pointer-events: none;
}

.surprise-box.show {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  pointer-events: auto;
  z-index: 50;
}
.surprise-box svg {
  fill: #F44336;
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3)); 
}
.surprise-box:hover {
  box-shadow: inset 3px 3px 6px 0 rgba(0, 0, 0, .2);
}


/* ================================================ */
/* ------------- Carta <--------------------------------------------------------*/
/* ================================================ */
.letter-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0.5);
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
  z-index: 100;
}

.letter-container.show {
  opacity: 1;
  transform: scale(1); 
  pointer-events: auto;
}

.letter-content {
  position: relative;
  background: #FFFFFF; /* Fundo branco */
  color: #333333;      /* <<<<<<< ADICIONE ESTA LINHA! (Cor do texto quase preta) */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  
  width: 500px;
  min-height: 33vh; 
  
  transform: scale(0.5);
  transition: transform 0.5s ease-in-out;
}

.letter-container.show .letter-content {
  transform: scale(1);
}

.message-text {
  line-height: 1.7; 
  font-size: 1.1em;
  color: #333;
}

.close-letter-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #eee;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  display: grid;
  place-items: center;
}
.close-letter-button::before {
  content: 'X';
}



/* ================================================ */
/* ------------- Animação da Carta (v2) <----------- */
/* ================================================ */

.letter-content .message-line {
  opacity: 0; /* Começa invisível */
  animation: fadeInText 1s ease-in forwards; /* Animação de aparecer */
  animation-play-state: paused; /* Começa pausada */
}

@keyframes fadeInText {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.letter-container.show .message-line {
  animation-play-state: running;
}

/* Atraso para cada linha aparecer em sequência */
.letter-container.show .line-1 { animation-delay: 0.5s; }
.letter-container.show .line-2 { animation-delay: 1.5s; }
.letter-container.show .line-3 { animation-delay: 3.0s; }
.letter-container.show .line-4 { animation-delay: 4.5s; }
.letter-container.show .line-5 { animation-delay: 6.0s; }
.letter-container.show .line-6 { animation-delay: 7.5s; }
.letter-container.show .line-7 { animation-delay: 9.0s; }

/* Ajustes para a lista dentro da linha 3 */
.message-line ul {
  list-style-type: none;
  padding-left: 10px;
  margin-top: 10px;
}
.message-line li {
  padding-bottom: 5px;
}




/* ================================================ */
/* -------Formato Responsivo para Androids <--------------------------------------------------------*/
/* ================================================ */
@media (max-width: 700px){
  #garden-canvas {
    width: 100%;
  }
  .sky-container {
    width: 100%;
  }
  .sun {
    width: 28.58vw; 
    height: 28.58vw;
    background-size: 60vw 30vw; 
  }
  @keyframes sol-pulsa {
    to {
      background-position: -60vw 0;
    }
  }
  .grass-container {
    width: 100%;
  }
  .flower {
    width: 80px;
    height: 80px;
  }
  

  /* ------------- Caixa de Presente <------------------*/
  .surprise-box {
    height: 60px;
    width: 60px;
    border-radius: 20px;
  }
  .surprise-box svg {
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3)); 
  }
  .surprise-box:hover {
    box-shadow: inset 3px 3px 6px 0 rgba(0, 0, 0, .2);
  }


  /* ------------- Carta <----------------------------------*/
  .letter-container {
    width: 100%;
    height: 100%;
  }
  .letter-content {
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    width: 90%;
    min-height: 33vh; 
  }
  .message-text {
    line-height: 1.7; 
    font-size: 1.1em;
  }
  .close-letter-button {
    top: 10px;
    right: 10px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
}
