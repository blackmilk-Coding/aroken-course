const tabControlsButton = document.querySelector('.tab-controls__list')
const tabControlsLinks = document.querySelectorAll('.tab-controls__link')
const tabsContent = document.querySelectorAll('.tabs__content')


tabControlsButton.addEventListener('click', event => {
  event.preventDefault();
  let target = event.target
  let clickLink = target.closest('.tab-controls__link')
  
  if(clickLink){
    for(let i=0; i < tabControlsLinks.length; i++){
      if(tabControlsLinks[i].classList.contains('tab-controls__link--active')){
        tabControlsLinks[i].classList.remove('tab-controls__link--active')
      }
  
      clickLink.classList.add('tab-controls__link--active')
    }

    if(clickLink.classList.contains('tab-controls__link--active')){
      const NumberTab = clickLink.getAttribute('href')
      for(let i=0; i < tabsContent.length; i++){

        if(tabsContent[i].classList.contains('tabs__content--active')){
          tabsContent[i].classList.remove('tabs__content--active')
        }

        if(tabsContent[i].id == NumberTab){
          tabsContent[i].classList.add('tabs__content--active')
        }
      }
    }
    else{
      return
    }
  }
  
})