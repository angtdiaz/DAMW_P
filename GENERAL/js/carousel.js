document.addEventListener('DOMContentLoaded', ()=> {
    const elementosCarousel = document.querySelectorAll('.carousel-inner');
    M.Carousel.init(elementosCarousel, {
    duration: 150,
    /*Animacion tiempo del carrusel*/
    dist: -80,
    /*Distancia de perspectiva*/
    shift: 5,
    /*Distancia entre cada una de las imagénes a los costados*/
    padding: 5,
    /*Espacio dentro del contenedor*/
    numVisible: 3,
    /*Cuantas imagenes seran visibles en pagina*/
    indicators: true,
    /*Indicador de posicion de iamgen*/
    noWrap: false
    /*Que inicia con la primera imagen*/
    });
});