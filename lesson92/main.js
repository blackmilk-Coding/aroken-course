const body = document.body
const btnWrapper = document.querySelector('.header__autorization')
const modals = document.querySelector('.modals')
const modal = document.querySelectorAll('.modal')
const modalRegistr = document.querySelector('.modal__register')
const modalVoid = document.querySelector('.modal__autorization')

btnWrapper.addEventListener('click', event => {
  const target = event.target
  body.classList.add('body--scroll-lock')

  if(target.classList.contains('autorization__link--reg')){
    modalRegistr.classList.add('modal--open')
  }
  if(target.classList.contains('autorization__link--void')){
    modalVoid.classList.add('modal--open')
  }

})

modals.addEventListener('click', event => {
  const target = event.target
  let modal = target.closest('.modal')
  if(target.classList.contains('modal__closed')){
    modal.classList.remove('modal--open')
    body.classList.remove('body--scroll-lock')
  }

  if(target.tagName == 'BUTTON'){
    modal.classList.remove('modal--open')
    body.classList.remove('body--scroll-lock')
  }
  const modal2 = document.querySelectorAll('.modal')
})
