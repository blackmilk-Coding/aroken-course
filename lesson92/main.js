// const body = document.body
// const btnWrapper = document.querySelector('.header__autorization')
// const modals = document.querySelector('.modals')
// const modal = document.querySelectorAll('.modal')
// const modalRegistr = document.querySelector('.modal__register')
// const modalVoid = document.querySelector('.modal__autorization')

// btnWrapper.addEventListener('click', event => {
//   const target = event.target
//   body.classList.add('body--scroll-lock')
//   if(target.classList.contains('autorization__link--reg')){
//     modalRegistr.classList.add('modal--open')
//   }
//   if(target.classList.contains('autorization__link--void')){
//     modalVoid.classList.add('modal--open')
//   }

// })

// modals.addEventListener('click', event => {
//   const target = event.target
//   let modal = target.closest('.modal')
//   if(target.classList.contains('modal__closed')){
//     modal.classList.remove('modal--open')
//     body.classList.remove('body--scroll-lock')
//   }

//   if(target.tagName == 'BUTTON'){
//     modal.classList.remove('modal--open')
//     body.classList.remove('body--scroll-lock')
//   }
//   const modal2 = document.querySelectorAll('.modal')
// })

/*
  1.Поулчить события клика по кнопкам, делегированием.
  2.Получить классы этих кнопок
  3.Взависимости от классов кнопки, накинуть класс открытия нужной модалки
  4.реализовать закрытие по
    4.1 крестику
    4.2 вне модалки
    4.3 по клавише
  5.Сделать простую анимацию появление модалки
  6.Заблокировать скролл body
*/

const btnWrapper = document.querySelector('.header__autorization')
const modalWrapper = document.querySelector('.modals')
const openModal = ''
const modalWrapperChildren = modalWrapper.querySelectorAll(':scope > .modal')
const modalReg = document.querySelector('.modal__register')
const modalVoid = document.querySelector('.modal__autorization')
btnWrapper.addEventListener('click', event =>{
  const target = event.target
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
  }

  if(target.classList.contains('modal__closed')){
    modal.classList.remove('modal--open')
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
      }
    }
  }
});