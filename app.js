let numerosSorteados = [];
let numeroLimite = 100
let numeroGerado = gerarNumero();
let tentativas = 1 ;


function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function exibirMensagemInicial() {
    
    exibirTexto('h1', 'Jogo do Número secreto')
    exibirTexto('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial()

exibirTexto('h1', 'Jogo do Número secreto')
exibirTexto('p', 'Escolha um número entre 1 a 10');

function verificarChute()  {
    let chute = document.querySelector('input').value;

    if (chute == numeroGerado) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas}, ${palavraTentativa}`
        exibirTexto('h1', 'Você acertou!');
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroGerado){
            exibirTexto('p', 'o numero secreto é menor');
        }
        else {
            exibirTexto('p', 'o numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }

}



function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = numerosSorteados.length;
    if(quantidadeElementos == numeroLimite ){
        return numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute  = document.querySelector('input');
    chute.value = '';
}

function reiniciarGame(){
    numeroGerado= gerarNumero();
    limparCampo();
    tentativas = 1

    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}