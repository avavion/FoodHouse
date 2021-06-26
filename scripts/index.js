document.addEventListener("DOMContentLoaded", function () {

    // Вкключение скролла
    const scrollOn = () => document.body.style.overflow = "";

    // Отключение скролла
    const scrollOff = () => document.body.style.overflow = "hidden";

    // Триггеры модального окна
    const modal_buttons = document.querySelectorAll(".js-modal-button");

    // Модальное окно
    const modal = document.querySelector("#modal");

    modal_buttons.forEach((modal_button) => {
        modal_button.addEventListener("click", () => {
            scrollOff();
            modal.classList.add("_active");
        });
    })

    // Закрытие модального окна при клике вне окна
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            scrollOn();
            modal.classList.remove("_active");
        }
    })

    // Слайдер - базовые настройки
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