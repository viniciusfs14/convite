const botaoNao = document.querySelectorAll('button')[1];

function fugir() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosX = Math.random() * (larguraJanela - 100);
    const novaPosY = Math.random() * (alturaJanela - 50);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${novaPosX}px`;
    botaoNao.style.top = `${novaPosY}px`;
}

// Faz o botão fugir com o mouse
botaoNao.addEventListener('mouseover', fugir);

// Faz o botão fugir no toque (celular/tablet)
botaoNao.addEventListener('touchstart', (event) => {
    event.preventDefault(); // evita o clique ser registrado
    fugir();
});
