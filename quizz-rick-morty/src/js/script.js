let caixaTexto = document.querySelector("input");
let botoes = document.querySelectorAll("button")
let valorPonto =  0;
let ponto = document.querySelector("span");
let imagem = document.querySelector("img");
let resposta = document.querySelector("#mensagem");

mostrarMensagem = (texto, cor) =>{
    ponto.innerHTML = valorPonto;
    caixaTexto.value = "";
    resposta.innerHTML=texto;
    resposta.style.color=cor;
    setTimeout(() => {
       resposta.innerHTML="";
       sortearPersonagem();
    }, 3000);
}

sortearPersonagem = () =>{
    let botao2 = document.querySelector("#try");
    let aleatorio = Math.floor(Math.random() * 493);
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)
    .then((resolve)=>{
        return resolve.json()
    })
    .then((data)=>{
        imagem.src = data.image;
        nomePersonagem = data.name.toUpperCase().toString();
        console.log(nomePersonagem);
        botao2.onclick=function(){
            let tentativa = caixaTexto.value.toUpperCase();
            if(valorPonto<0){
                alert("VOCÊ PERDEU");
                mostrarMensagem("Você perdeu", "red");
            }
            if(tentativa == nomePersonagem){
                valorPonto ++
                mostrarMensagem("Correto", "green");
            
            }
            else{
                valorPonto --;
                mostrarMensagem("Incorreto", "red");
            }
        }
        })
}

botoes[0].onclick = sortearPersonagem;