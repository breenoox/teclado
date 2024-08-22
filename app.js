const teclas = document.querySelectorAll('.key');

function teclado(event) {
    const teclaPrecionada = event.key.toUpperCase();
    teclas.forEach((tecla)=>{
        if(teclaPrecionada === tecla.textContent) {
            tecla.classList.toggle('keyCor');
        } else if(teclaPrecionada === ' ') {
            teclaEspaco = document.querySelector('.space');
            teclaEspaco.classList.toggle('keyCor');
        }
    });
}

window.addEventListener('keydown', teclado);
window.addEventListener('keyup', teclado);