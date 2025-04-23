const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const mensagem = document.getElementById('mensagem');
const mensagemRomantica = document.getElementById('mensagemRomantica');

function fugir() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosX = Math.random() * (larguraJanela - 100);
    const novaPosY = Math.random() * (alturaJanela - 50);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${novaPosX}px`;
    botaoNao.style.top = `${novaPosY}px`;

    botaoNao.classList.add('botao-fugindo');
    setTimeout(() => {
        botaoNao.classList.remove('botao-fugindo');
    }, 400);
}

botaoNao.addEventListener('mouseover', fugir);
botaoNao.addEventListener('touchstart', (event) => {
    event.preventDefault();
    fugir();
});

function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.innerText = '💖';
    coracao.classList.add('coracao');
    document.body.appendChild(coracao);

    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = (Math.random() * 2 + 2) + 's';

    setTimeout(() => {
        coracao.remove();
    }, 4000);
}

function escreverMensagem(texto, elemento, velocidade = 40) {
    let i = 0;
    elemento.innerHTML = '';
    const intervalo = setInterval(() => {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, velocidade);
}

botaoSim.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(criarCoracao, i * 150);
    }

    const texto = mensagemRomantica.innerText;
    escreverMensagem(texto, mensagem);
});
