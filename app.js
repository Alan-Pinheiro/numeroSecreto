// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let numeroMaximo = 10;
let listaDeNumerosSorteados = [];
let numeroSecreto = criarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
};

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  let quantasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', `Você descobriu o número secreto, com ${tentativas} ${quantasTentativas}!`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor que o chute.');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior que o chute.');
    }
    tentativas++;
    limparCampo();
  }
}

function criarNumeroAleatorio() {
  let numeroSorteadoAtual = parseInt(Math.random() * numeroMaximo + 1); 
  let quantidadeNaLista = listaDeNumerosSorteados.length;

  if (quantidadeNaLista == numeroMaximo) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroSorteadoAtual)) {
    return criarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroSorteadoAtual);
    console.log(listaDeNumerosSorteados);
    return numeroSorteadoAtual;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciaJogo() {
  numeroSecreto = criarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}