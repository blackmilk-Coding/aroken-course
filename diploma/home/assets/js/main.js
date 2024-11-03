(function() {
  // --- mobile menu
  document.addEventListener('click', burgerInit)
  const body = document.body
  const accordionList = document.querySelector('.accordion__list')
  function burgerInit(e) { 
    const burgerIcon = e.target.closest('.burger-button')
    const modal = e.target.closest('.modal')
    if(burgerIcon){
      if(!document.body.classList.contains('body--modal-open') && !document.body.classList.contains('body--scroll-lock')){
        body.classList.add('body--scroll-lock')
        body.classList.add('body--modal-open')
      }
      else{
        body.classList.remove('body--scroll-lock')
        body.classList.remove('body--modal-open')
      }
    }

    if(modal && document.body.classList.contains('body--modal-open')){
      body.classList.remove('body--scroll-lock')
      body.classList.remove('body--modal-open')
    }
  }
  // ----------------
  // --- accordion
  document.addEventListener('click' , accordionInit)
  function accordionInit(e){
    let accordionItem = e.target.closest('.accordion__list-item')
    if(accordionItem){
      accordionItem.classList.toggle('accordion__list-item--active')

    }
  }
  // ----------------

  // --- slider
  new Swiper('.products__swiper', {
    spaceBetween: 15,
    slidesPerView: 1.5,
    navigation: {
      nextEl: '.products__button-next',
      prevEl: '.products__button-prev',
    },
  
  
    breakpoints: {
      100:{
        slidesPerView: 1,
      },
      601: {
          slidesPerView: 2,
      },
      801: {
          spaceBetween: 32,
      },
      1101: {
          slidesPerView: 3,
      }
  }
  });
  // ----------------

  // --- accordion

  // ----------------
})()