// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = criarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {

  let chute = document.querySelector('input').value;

  let quantasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', `Você descobriu o número secreto, com ${tentativas} ${quantasTentativas}!`);
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
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}