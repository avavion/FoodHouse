document.addEventListener("DOMContentLoaded", function () {

    // Шапка
    const header = document.querySelector("#header");
    // Навигационное меню
    const navbar = header.querySelector("#navbar");

    // Слайдер
    const services_slider = new Swiper(".services", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 500,
        slidesPerGroup: 1,
        autoplay: true,
        breakpoints: {
            768: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1440: {
                slidesPerView: 5,
                slidesPerGroup: 5
            },
            568: {
                slidesPerView: 3,
                slidesPerGroup: 3
            }
        },
    });
});