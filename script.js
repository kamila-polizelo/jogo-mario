const mario = document.querySelector(".mario"); // Para selecionar a class mario
const pipe = document.querySelector(".pipe"); // Para selecionar a class pipe

// Fazer o Mário pular

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

// Loop para verificar se o jogador perdeu ou não, ou seja se o Mário encostou no cano ou não

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft; // Deslocamento esquero da img do cano
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", ""); // Deslocamento da altura que o Mário está, replace para tirar o px e ficar só o número e o + é para transformar a string em número

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    // Pega a posição em que o cano encosta no Mário e para o jogo

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    // Pega a posição em que o Mário encosta no cano e para o jogo

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`; // Pega a posição em que o Mário encosta no cano

    // Colocando e editando a img de MárioGameOver quando ele perde o jogo

    mario.src = "./img/game-over.png";
    mario.style.width = "80px";
    mario.style.marginLeft = "50px";

    clearInterval(loop); // Parar o loop ao perder o jogo
  }
}, 10);

// Quando pressionar uma tecla do teclado o Mário vai pular

document.addEventListener("keydown", jump);
