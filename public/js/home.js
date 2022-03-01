const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

// pre boton recorrera cada tarjeta usando cada metodo
 productContainers.forEach((item, i) => {
    //  almanenecemos las dimenciones de la tarjetas en una variable
    // y rect devolvera las dimenciones de los elementos
    let containerDimenstions = item.getBoundingClientRect();
    // el anche del contenedor en otra variable
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        // aumentamos el elemento, desplazando el valor hacia la izquierda
        // por el ancho del contenedor
        item.scrollLeft += containerWidth;
    });
    preBtn[i].addEventListener('click', () => {
        // aumentamos el elemento, desplazando el valor hacia la derecha
        // por el ancho del contenedor
        item.scrollLeft -= containerWidth;
    });
 });