// script.js — código inicial
console.log('script.js carregado');

// Animação de mudança de cor do texto na capa

    gsap.to("#capa-titulo", {
        keyframes:
            [
                { duration: 2, ease: "power1.inOut", color: "#6B00E0" },
                { duration: 2, ease: "power1.inOut", color: "#87E000" }
            ],
        repeat: -1,
        yoyo: true
    });
    
    gsap.to("#capa-subtitulo", {
        keyframes: [
            {duration: 2, ease: "power1.inOut", color: "#E000AC"},
            {duration: 2, ease: "power1.inOut", color: "#6B00E0"}
        ],
        repeat: -1,
        yoyo: true
    });


function radioButton() {
    const radio = document.querySelector('#material-symbols-outlined-radio-button');
    if (radio.textContent === 'radio_button_unchecked') {
        radio.textContent = 'radio_button_checked';
    } else {
        radio.textContent = 'radio_button_unchecked';
    }
}

// Impede seleção de texto nos ícones quando o usuário clica/duplo-clica
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.links .material-symbols-outlined').forEach(el => {
        el.addEventListener('mousedown', e => e.preventDefault());
    });
});

var filter = 'all';
function sendRequest() {
    fetch(`http://127.0.0.1:8080/hello-world/accounts?filter=${filter}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: 'John', email: 'john@example.com' })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}