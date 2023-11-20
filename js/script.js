const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.review-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        mousewheel: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});