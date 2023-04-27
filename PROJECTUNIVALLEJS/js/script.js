let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
//El primer bloque de código, osea el de arriba, selecciona el botón de menú y los elementos de la barra de navegación en la página web y adjunta un detector de eventos de clic al botón de menú. Cuando clickeamos en el botón de menú, alterna una clase llamada "fa-times" en el botón de menú y agrega o elimina una clase llamada "active" en este caso en el elemento de la barra de navegación.
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

//El segundo bloque de código que sigue siendo en este caso el de arriba,es un detector de eventos que elimina las clases "fa-times" y "active" del botón de menú y la barra de navegación cuando el usuario se desplaza por la página. 

//Bueno y de aqui para adelante de los codigos restantes son nomas bloques de código que empiezan las tres instancias de la biblioteca Swiper para tres controles deslizantes diferentes en la página web. A cada instancia de Swiper se le pasa un objeto que especifica las opciones de configuración para ese control deslizante en particular, como la cantidad de espacio entre las diapositivas, el efecto utilizado al pasar de una diapositiva a otra, la cantidad de diapositivas que se muestran a la vez y la configuración de paginación. La biblioteca Swiper proporciona una manera fácil y personalizable de implementar controles deslizantes de imágenes en una página web.

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});