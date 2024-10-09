const accordionList = document.querySelector('.accordion-list')

accordionList.addEventListener('click', event => {
  const target = event.target
  const button = target.closest('.tabs-content')


  if(button){
    event.preventDefault();
    const listAccordion = button.parentElement
    const AccordionContentBlock = button.nextElementSibling
    const contentHeight = AccordionContentBlock.firstElementChild
    const openItem = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')



    if(openItem){
      openItem.style.maxHeight = 0
      openItem.classList.remove('accordion-list__item--opened')
    }


    listAccordion.classList.toggle('accordion-list__item--opened')

    
    if(listAccordion.classList.contains('accordion-list__item--opened')){
      AccordionContentBlock.style.maxHeight = contentHeight.scrollHeight + "px"
    }
    else{
      AccordionContentBlock.classList.remove('accordion-list__item--opened')
      AccordionContentBlock.style.maxHeight = 0
    }
  }else{
    return
  }
  
})