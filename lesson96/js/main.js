const swiper = new Swiper('.swiper', {
  // If we need pagination
  slidesPerView: 1,
  spaceBetween: 32,
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    1200:{
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },

    400:{
      slidesPerView: 1.5,
    }
  }
});