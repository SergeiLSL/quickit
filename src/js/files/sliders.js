/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Keyboard } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
   // Список слайдерів
   // Перевіряємо, чи є слайдер на сторінці
   if (document.querySelector('.resources-page__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper('.resources-page__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation],
         modules: [Keyboard],  
         modules: [Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         autoHeight: true,
         // количество пролистываемых слайдов
         slidesPerGroup: 1,
         // астивный слайд по центру
         // centeredSlides: true,
         // autoHeight: false,        
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         // loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // keyboard: {
         //    // включить \ выключить клавиатуру
         //    enabled: true,
         //    // включить \ выключить когда слайдер виден
         //    onlyInViewport: true,
         // },
         // Пагинация
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
         },

         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         // navigation: {
         // 	prevEl: '.swiper-button-prev',
         // 	nextEl: '.swiper-button-next',
         // },

         // Брейкпоінти
         breakpoints: {
            375: {
               slidesPerView: 1,
               // spaceBetween: 30,
               // autoHeight: true,
               },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
               // centeredSlides: true,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
            1268: {
               // slidesPerView: 4,
               // spaceBetween: 30,
            },
         },
         // Події
         on: {

         }
      });
   }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener("load", function (e) {
   // Запуск ініціалізації слайдерів
   initSliders();
   // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
   //initSlidersScroll();
});