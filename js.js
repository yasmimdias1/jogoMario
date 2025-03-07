const mario = document.querySelector(".mario");
const obstaculo = document.querySelector(".obstaculo");
const gameOver = document.getElementById("gameOver");
const text = document.getElementById("texto");

function jump() {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 700);
  text.style.display = "none";
}

function iniciarLoop() {
  //funcao para indicar oque faz o jogo parar
  const obstaculoPosicao = obstaculo.offsetLeft;
  const marioPosicao = parseFloat(window.getComputedStyle(mario).bottom);

  if (obstaculoPosicao <= 120 && marioPosicao < 80) {
    obstaculo.style.animation = "none";
    obstaculo.style.left = `${obstaculoPosicao}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosicao}px`;
    mario.src = "imagens/fim.png";
    mario.style.width = "75px";

    text.style.display = "block";
  }
}
setInterval(iniciarLoop, 60); //indica que essa funcao ira repetir a sua verificacao a cada 50milisegundos

function reiniciarJogo() {
  //ao reiniciar o jogo o style e redefinido ao orinal
  obstaculo.style.animation = "obstaculoAnimacao 2s infinite linear";
  obstaculo.style.left = "";

  mario.style.animation = "";
  mario.style.bottom = "";
  mario.src = "imagens/mario.gif";
  mario.style.width = "150px";

  iniciarLoop(); // Reiniciar o loop do jogo
}

iniciarLoop();
document.addEventListener("keyup", reiniciarJogo);
document.addEventListener("keydown", jump);
