(function() {

  document.addEventListener('click', burgerInit)
  //.body--scroll-lock
  //.body--modal-open

  function burgerInit(e) {
    const body = document.body 
    const burgerIcon = e.target.closest('.burger-button')

    if(!document.body.classList.contains('body--modal-open') && !document.body.classList.contains('body--scroll-lock')){
      body.classList.add('body--scroll-lock')
      body.classList.add('body--modal-open')
    }else{
      body.classList.remove('body--scroll-lock')
      body.classList.remove('body--modal-open')
    }
  


    // if (!burgerIcon && !burgerNavLink) return
    // if (document.documentElement.clientWidth > 900) return

    // if (!document.body.classList.contains('body--opened-menu')) {
    //     document.body.classList.add('body--opened-menu')
    // } else {
    //     document.body.classList.remove('body--opened-menu')
    // }

}
})()