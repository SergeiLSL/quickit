// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

/* ++++++++++++++++++++++++++++++ */
new Swiper('.swiper', {
   // просмотр по кругу
   // loop: true,
   speed: 800,
   // лапка
   grabCursor: true,
   // количество слайдов для показа
   slidesPerView: 3,
   // grid: {
   //    rows: 2,
   // },
   spaceBetween: 30,
   // количество пролистываемых слайдов
   slidesPerGroup: 1,
   // астивный слайд по центру
   // centeredSlides: true,
   // управление с клавиатуры
   keyboard: {
      // включить \ выключить клавиатуру
      enabled: true,
      // включить \ выключить когда слайдер виден
      onlyInViewport: true,
   },
   pagination: {
      // позволяет обращаться непосредственно к буллету
      el: ".swiper-pagination",
      clickable: true,
   },
   // Брейкпоинты
   breakpoints: {
      375: {
         slidesPerView: 1,
         spaceBetween: 30,
         grid: {
            rows: 2,
         },
      },
      480: {
         slidesPerView: 1,
         // spaceBetween: 30,
         grid: {
            rows: 2,
         },
      },
      600: {
         slidesPerView: 2,
         spaceBetween: 30,
      },      
      992: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },

});

//================================================================================================================
