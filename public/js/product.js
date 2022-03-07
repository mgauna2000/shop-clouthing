const productImages = document.querySelectorAll('.product-images img');
const productImagesSlide = document.querySelector('.image-slider');
// variable que almacenara la imagen actual
let activeImageSlide = 0;
// recorremos cada elemento de imagen
 productImages.forEach((item, i) => {
     item.addEventListener('click', () => {
        // eliminamos la clase activa de la imagen actual
        productImages[activeImageSlide].classList.remove('active');
        // y agregamos la clase activa al elemento
        item.classList.add('active');
        // cambiamos la imagen de fondo del elemento usando el metodo de estilo
        productImagesSlide.style.backgroundImage = `url('${item.src}')`;
        // almacenamos su indice en la variable de imagen activa
        activeImageSlide = i; 
     })
 })

//  boton alterar tamaño

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkenBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkenBtn].classList.remove('check');
        item.classList.add('check');
        checkenBtn = i;
    })
})