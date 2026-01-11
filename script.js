// script.js — código inicial
console.log('script.js carregado');
onload = () => {
    const titulo = document.getElementById('capa-titulo');
    const subtitulo = document.getElementById('capa-subtitutlo');
    titulo.style.color = 'rgb(224, 0, 172)';
    subtitulo.style.color = 'rgb(245, 245, 245)';
    setInterval(() => {
        const colors = ['rgb(224, 0, 172)', 'rgb(107, 0, 224)', 'rgb(135, 224, 0)'];
        const currentColor = titulo.style.color;
        const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
        const backColor = colors[(colors.indexOf(currentColor) + 2) % colors.length];
        titulo.style.color = nextColor;
        subtitulo.style.color = backColor;
    }, 1000);
}

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