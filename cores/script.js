const quadradinhos = document.querySelectorAll(".quadradinho");
const cores = ["blue","yellow","red","green"];

function aleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
function verificarFim(){
    let cor1 = quadradinhos[0].style.backgroundColor;
    let cor2 = quadradinhos[1].style.backgroundColor;
    let cor3 = quadradinhos[2].style.backgroundColor;
    let cor4 = quadradinhos[3].style.backgroundColor;
    
    if(cor1 === cor2 && cor2 === cor3 && cor3 === cor4){
        for(let quadradinho of quadradinhos){
            quadradinho.onmouseenter = null;
            quadradinho.classList.add("escondido");
        }
        document.querySelector("h1").classList.remove("escondido");
    }
}
function trocarCor(){
    let cor = aleatorio(0,3);
    this.style.backgroundColor = cores[cor];
    verificarFim();
}
for(let quadradinho of quadradinhos){
    quadradinho.onmouseenter = trocarCor;
}