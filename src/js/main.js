// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';
import $ from 'jquery';
import Swiper from 'swiper';

$('body').append('<p>Hello World!</p>');
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
