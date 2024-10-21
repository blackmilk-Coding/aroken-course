const swiper = new Swiper('.gallery__swiper', {
  slidesPerView: 1,
  // If we need pagination
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
    1200: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },

    400: {
      slidesPerView: 1.5,
    }
  }


});

const swipere = new Swiper('.testimonials__swiper', {
  slidesPerView: 1,
  spaceBetween: 32,
  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__button-next',
    prevEl: '.testimonials__button-prev',
  },
  centeredSlides: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    dragClass: 'swiper-scrollbar-drag'
  },

  breakpoints: {
    1200: {
      slidesPerView: 2.1,
    },

    900: {
      slidesPerView: 1.5,
    }


  },



});