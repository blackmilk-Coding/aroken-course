const body = document.body
const btnWrapper = document.querySelector('.header__autorization')
const modalWrapper = document.querySelector('.modals')
const openModal = ''
const modalWrapperChildren = modalWrapper.querySelectorAll(':scope > .modal')
const modalReg = document.querySelector('.modal__register')
const modalVoid = document.querySelector('.modal__autorization')
btnWrapper.addEventListener('click', event =>{
  const target = event.target
  body.classList.add('body--scroll-lock')
  if(target.classList.contains('autorization__link--reg')){
    modalReg.classList.add('modal--open')
  }
  if(target.classList.contains('autorization__link--void')){
    modalVoid.classList.add('modal--open')
  }
})

modalWrapper.addEventListener('click', event => {
  const target = event.target
  let modal = target.closest('.modal')
  if(target.classList.contains('modal--open')){
    target.classList.remove('modal--open')
    body.classList.remove('body--scroll-lock')
  }

  if(target.classList.contains('modal__closed')){
    modal.classList.remove('modal--open')
    body.classList.remove('body--scroll-lock')
  }
})

for(let i = 0; i < modalWrapperChildren.length; i++){
  console.log(modalWrapperChildren[i])
}


document.addEventListener('keydown', function(event) {
  if(event.code == "Escape"){
    for(let i = 0; i < modalWrapperChildren.length; i++){
      if(modalWrapperChildren[i].classList.contains('modal--open')){
        modalWrapperChildren[i].classList.remove('modal--open')
        body.classList.remove('body--scroll-lock')
      }else{
        break
      }
    }
  }
});