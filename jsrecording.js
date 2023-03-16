////  VIDEO ////
const preview = document.getElementById('preview');

navigator.mediaDevices.getUserMedia({ video: true, microphone: true })
.then(stream => {
    preview.srcObject = stream;
})
.catch(error => {
    console.log(error);
});
////// Logica de botones //////

///BOTON REGRESAR A INICIO///
// Obtener una referencia al botón de "Regresar"
//se crea constante inicioBtn
const inicioBtn = document.querySelector('#inicio-btn');

// Agregar un evento de clic al botón
inicioBtn.addEventListener('click', () => {
// Redirigir al usuario a la página de inicio
window.location.href = '/index.html';
});

//BOTONES REGRESAR SIGUIENTE  //
const anterior1 = document.querySelector('#anterior1');
    anterior1.addEventListener('click', () => {
        window.location.href = '/index.html';
    });

    const siguiente1 = document.querySelector('#siguiente1');
    siguiente1.addEventListener('click', () => {
        window.location.href = '/pestaniarecording2.html';
    });

    const anterior2 = document.querySelector('#anterior2');
    anterior2.addEventListener('click', () => {
        window.location.href = '/pestaniarecording.html';
    });

    const siguiente2 = document.querySelector('#siguiente2');
    siguiente2.addEventListener('click', () => {
        window.location.href = '/pestaniarecording3.html';
    });

    const anterior3 = document.querySelector('#anterior3');
    anterior3.addEventListener('click', () => {
        window.location.href = '/pestaniarecording2.html';
    });

    const siguiente3 = document.querySelector('#siguiente3');
    siguiente3.addEventListener('click', () => {
        window.location.href = '/pestaniarecording4.html';
    });

    const anterior4 = document.querySelector('#anterior4');
    anterior4.addEventListener('click', () => {
        window.location.href = '/pestaniarecording3.html';
    });

    const finalizar = document.querySelector('#finalizar');
    finalizar.addEventListener('click', () => {
        window.location.href = '/pagina-final.html';
    });

/*
/// BOTON REGRESAR ///
const anteriorButton = document.querySelector('#anterior1');
// Agregamos eventos
anteriorButton.addEventListener('click', () => {
    window.location.href = '/index.html';
});
///BOTON SIGUIENTE
const siguienteButton = document.querySelector('#siguiente1');
siguienteButton.addEventListener('click', () => {
    window.location.href = '/pestaniarecording2.html';
});

//BOTONES 2 //
/// BOTON REGRESAR ///
const anteriorButton2 = document.querySelector('#anterior2');
anteriorButton2.addEventListener('click', () => {
window.location.href = '/pestaniarecording.html';
});

///BOTON SIGUIENTE
const siguienteButton2 = document.querySelector('#siguiente2');
siguienteButton2.addEventListener('click', () => {
    window.location.href = '/pestaniarecording3.html';
});
//BOTONES 3 //
//BOTONES 4 //
*/
