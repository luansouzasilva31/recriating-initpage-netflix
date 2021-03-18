$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true, /* insere botão de navegação p auxílio */
    responsive:{ /* Adiciona responsividade (adaptação à tela) */
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})