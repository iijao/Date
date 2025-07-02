const noButton = document.querySelector('.nao');
let moveCount = 0; // Variável para contar as vezes que a função foi ativada
const triggerAlertAt = 7; // O número de ativações para disparar o alerta
let alertAlreadyShown = false; // Variável de controle para garantir que o alerta apareça apenas uma vez

const moveNoButton = () => {
    if (!noButton) {
        console.error('Botão "Não" não encontrado.');
        return;
    }

    // Incrementa o contador cada vez que a função é chamada
    moveCount++;

    // Verifica se o contador atingiu o limite E se o alerta ainda não foi mostrado
    if (moveCount === triggerAlertAt && !alertAlreadyShown) {
        alert('Não cansou ainda, Maria?'); // Exibe o alerta
        alertAlreadyShown = true; // Define a variável de controle como true para não mostrar novamente
        // Opcional: Se você quiser que o botão pare de se mover depois do alerta, descomente a linha abaixo:
        // noButton.removeEventListener('mouseover', moveNoButton);
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const noButtonRect = noButton.getBoundingClientRect();
    const noButtonWidth = noButtonRect.width;
    const noButtonHeight = noButtonRect.height;

    const margin = 20;

    const maxLeft = viewportWidth - noButtonWidth - margin;
    const maxTop = viewportHeight - noButtonHeight - margin;

    const actualMaxLeft = Math.max(0, maxLeft);
    const actualMaxTop = Math.max(0, maxTop);

    const newLeft = Math.floor(Math.random() * actualMaxLeft);
    const newTop = Math.floor(Math.random() * actualMaxTop);

    noButton.style.position = 'fixed';
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;

    console.log(`Movendo para: left=${newLeft}px, top=${newTop}px. Ativações: ${moveCount}`); // Para depuração
};

noButton.addEventListener('mouseover', moveNoButton);


const sim = document.querySelector('.sim')