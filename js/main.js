const boton = document.querySelector('#button');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    //console.log('click')
    menu.classList.toggle('hidden')
});

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type: 'loop',
        autoplay: true,
        arrows: false
    } );
    splide.mount();
} );