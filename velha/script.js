// INICIO DO JOGO

let valorJogador = document.querySelector("input");
let botaoAcessar = document.querySelector("#acessButton");
let jogador1;
let jogador2;
let telaInicial = document.querySelector("nav");
let telaJogo = document.querySelector("header");
let textoAvisoInicial = document.querySelector("#textoMensagem");
let texto1 = document.querySelector("#texto1");
let texto2 = document.querySelector("#texto2");
let gamerWinner = document.querySelector("#gamerWinner");

//ESCOLHER X OU O
escolherJogador = () => {
  function abrirJogo(){
    telaInicial.style.display="none";
    telaJogo.style.display="flex";
  }
  if(valorJogador.value=="X" || valorJogador.value == "x"){
    jogador1 = "X";
    jogador2 = "O";
    texto1.innerHTML = `O jogador 1 é: ${jogador1}`;
    texto2.innerHTML = `O jogador 2 é: ${jogador2}`;
    abrirJogo();
  }
  else if(valorJogador.value=="O" || valorJogador.value == "o"){
    jogador1 = "O";
    jogador2 = "X";
    texto1.innerHTML = `O jogador 1 é: ${jogador1}`;
    texto2.innerHTML = `O jogador 2 é: ${jogador2}`;
    abrirJogo();
  }
  else{
    textoAvisoInicial.innerHTML="Digite X ou O!"
  }
}

//EVENTOS PARA ACESSAR JOGO

botaoAcessar.onclick = escolherJogador;
valorJogador.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   botaoAcessar.onclick=escolherJogador();
  }
});


//JOGADAS
let quadrados = document.querySelectorAll("div");
let i = 0;

function fazerJogada(){
  if(this.innerHTML== ""){
    if(i%2==0){
      this.innerHTML=`<p>${jogador1}</p>`;
      this.style.color= "#14bdac";
      i++
      verificarVitoria();
    }
    else{
      this.innerHTML=`<p  >${jogador2}</p>`;
      this.style.color= "#545454";
      i++
      verificarVitoria();
    }
  }
}
//ADICIONANDO EVENTO A TODOS OS QUADRADINHOS
for(let quadrado of quadrados){
  quadrado.onclick = fazerJogada;
}

function verificarVitoria(){
  //1 DIAGONAL
  if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[8].innerHTML){
    encerrarJogo();
      gamerWinner.innerHTML = `${(i % 2 === 0 ? jogador2 : jogador1)}`;
  }
  //2 DIAGONAL
  else if(quadrados[2].innerHTML !== "" && quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[6].innerHTML){
    encerrarJogo();
      gamerWinner.innerHTML = `${(i % 2 === 0 ? jogador2 : jogador1)}`;      
  }
  //PRIMEIRA LINHA
  else if(quadrados[0].innerHTML !== "" && quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML === quadrados[2].innerHTML){
    encerrarJogo();
      gamerWinner.innerHTML = `${(i % 2 === 0 ? jogador2 : jogador1)}`;      
  }
  //SEGUNDA LINHA
  else if(quadrados[3].innerHTML !== "" && quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[5].innerHTML){
    encerrarJogo();
      gamerWinner.innerHTML = `${(i % 2 === 0 ? jogador2 : jogador1)}`;      
  }
  //TERCEIRA LINHA
  else if(quadrados[6].innerHTML !== "" && quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML === quadrados[8].innerHTML){
    encerrarJogo();
      gamerWinner.innerHTML = `${(i % 2 === 0 ? jogador2 : jogador1)}`;      
  }
  //PRIMEIRA COLUNA
  else if(quadrados[0].innerHTML!=="" && quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3] === quadrados[6]){
    encerrarJogo();
      gamerWinner.innerHTML = `${(i % 2 === 0 ? jogador2 : jogador1)}`;      
  }
  //SEGUNDA COLUNA
  else if(quadrados[1].innerHTML!=="" && quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4] === quadrados[7]){
    encerrarJogo();
      gamerWinner.innerHTML = `${(i % 2 === 0 ? jogador2 : jogador1)}`;      
  }
  //TERCEIRA COLUNA
  else if(quadrados[2].innerHTML!=="" && quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5] === quadrados[8]){
    encerrarJogo();
      gamerWinner.innerHTML = `${(i % 2 === 0 ? jogador2 : jogador1)}`;      
  }
  //VELHA
  else if(i==9){
    encerrarJogo();
    gamerWinner.innerHTML="VELHA";
    document.querySelector("#venceuText").innerHTML = "";
  }
}

//FUNCAO PARA ENCERRAR O JOGO
let gameResult = document.querySelector("footer");

 function encerrarJogo(){
  for(let quadrado of quadrados){
    quadrado.onclick = null;
  }
  gameResult.style.display="flex";
}
let jogarNovamente = document.querySelector("#gameAsk");

function playAgain(){
  i=0;
  for(let quadrado of quadrados){
    quadrado.onclick = fazerJogada;
    quadrado.innerHTML = "";
  }
  gameResult.style.display="none";

}
jogarNovamente.onclick = playAgain;
