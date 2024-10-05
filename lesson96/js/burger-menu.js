//  body--open-modal
const body = document.body
const menuButton = document.querySelector('.burger-icon')
const menuList = document.querySelector('.nav__list')

menuButton.addEventListener('click', () =>{
  body.classList.toggle('body--open-list')
})

menuList.addEventListener('click', () => {
  if(body.classList.contains('body--open-list')){
    body.classList.remove('body--open-list')
  }else{
    return
  }

})