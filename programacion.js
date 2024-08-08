document.addEventListener('DOMContentLoaded', function() {
   
    let imagen = document.getElementsByClassName('image')[0]; 
    let boton = document.getElementById('cambio');

   
    let imagen1 = 'img1.jpg';
    let imagen2 = 'img2.jpg';

    
    let imagenActual = imagen1;

    boton.addEventListener('click', function() {
        if (imagenActual == imagen1) {
            imagen.src = imagen2;
            imagenActual = imagen2;
        } else {
            imagen.src = imagen1;
            imagenActual = imagen1;
        }
    });
});