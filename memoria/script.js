const start = document.querySelector("button");
const h2 = document.querySelector("h2"); 
const img = document.querySelectorAll("img");
let listaImg = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]; //lista de nome das imagens
let carta1 = 0;
let carta2 = 0;
let controle = 0; //variavel de controle de jogada, controla se tem 1 ou 2 cartas viradas

function aleatorio(min, max){
    for(let i in listaImg){
        let posicao = Math.floor(Math.random() * (max-min+1)) + min;
        let aux = listaImg[posicao];
        listaImg[posicao] = listaImg[i];
        listaImg[i] = aux;
    }
}

function comecar(){
    aleatorio(0, 7);
    mostrarTodos();
    setTimeout(esconderTodos, 1500);
    clicarImagem();
}

function resetar(){
    for(let i of img){
        i.classList.remove("certo");
    }
    h2.innerHTML = "Click em START para iniciar o jogo";
    h2.classList.remove("destaque");
    esconderTodos();
}

start.onclick = comecar;

function esconderTodos(){
    const esconde = img;
    for(let i in esconde){
        esconde[i].src= `animais/fundo.jpg` ;
    }
}

function clicarImagem(){
    for(let imagem of img){
        imagem.onclick = mostrarCarta;
    }
}

function mostrarTodos(){
    for(let i in img){
        img[i].src = `animais/${listaImg[i]}.png`;
    }
}


function esconderCarta(){
    img[carta1].src = `animais/fundo.jpg`;
    img[carta2].src = `animais/fundo.jpg`;
}

function verificarFim(){
    let flag = true;
    let lista = img;
    for(let i of lista){
        let verifica = i.classList.contains("certo");
        if(verifica === false){
            flag = false;
        }
    }
    if(flag){
        console.log(flag);
        h2.innerHTML = "PARABÉNS VOCÊ VENCEU";
        h2.classList.add("destaque");
        setTimeout(resetar, 1500);
    }
}

function verificarCarta(){
    if(img[carta1].src !== img[carta2].src){
        setTimeout(esconderCarta, 700);
    }
    else{
        setTimeout(cartaCerta, 700);
    }
    setTimeout(verificarFim, 1000);
}

function cartaCerta(){
    img[carta1].classList.add("certo");
    img[carta2].classList.add("certo");   
    img[carta1].onclick = null;
    img[carta2].onclick = null;
}

function mostrarCarta(){
    let indice = this.name;
    this.src = `animais/${listaImg[indice]}.png`;
    if(controle % 2 === 0){
        carta1 = indice;
    }
    else{
        carta2 = indice;
        if(carta1 !== 0 && carta2 !==0){
            verificarCarta();
        }
    }
    controle++;    
}


