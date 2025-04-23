// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto!';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//pra esses dois de cima, usamos a function abaixo, que é uma forma resumida.
let listaDeNumerosSortedas = [];
let limiteMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // -- responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); -- //faz com que tenha audio em alguns textos.
}//função que só modifica algo no HTML.
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto!!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10 ');
}

mensagemInicial();

function verificarChute(){
    //console.log('O botão foi clicado');
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        
        palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').disabled = true; //desabilita o chute quando acerta, forçando o usuario a clicar em novo jogo
        
        
        
    } else if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
    

}//função sem retorno, só mostra algo.

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* limiteMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSortedas.length;
    
    if (quantidadeDeElementosNaLista == limiteMaximo){
        listaDeNumerosSortedas = [];
    }

    if (listaDeNumerosSortedas.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else listaDeNumerosSortedas.push(numeroEscolhido);
    console.log(listaDeNumerosSortedas);
    return numeroEscolhido;
} 

    

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
function limparBlock(){
    document.getElementById('chutar').disabled = false; //libera o botão chute quando clicado em Novo Jogo
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    limparBlock();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}

