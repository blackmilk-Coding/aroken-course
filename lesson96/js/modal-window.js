const bodyMenu = document.body
const modal = document.querySelector('.modal')
const modalClosed = document.querySelector('.modal__closed')
const button = document.querySelector('.about__img-button')


button.addEventListener('click', (event) => {
  event.preventDefault()
  body.classList.add('body--open-modal')
  body.classList.toggle('body--scroll-lock')
})

const removeClasses = function(){
  body.classList.remove('body--open-modal')
  body.classList.remove('body--scroll-lock')
}

modal.addEventListener('click', event =>{
  let target = event.target
  event.preventDefault()

  if(target.classList.contains('modal__closed')){
    removeClasses()
  }
  if(target.classList.contains('modal__closed-icon')){
    removeClasses()
  }

  if(target.classList.contains('modal')){
    removeClasses()
  }

})

document.addEventListener('keydown', function(event) {
  event.preventDefault()
  if(event.code == "Escape"){
    if(body.classList.contains('body--open-modal')){
      removeClasses()
    }else{
      return
    }
  }});