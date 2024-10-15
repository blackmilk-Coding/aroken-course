const swiper = new Swiper('.swiper', {
  // If we need pagination
  slidesPerView: 4,
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
});