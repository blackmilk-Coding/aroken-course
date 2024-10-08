const accordionList = document.querySelector('.accordion-list')


accordionList.addEventListener('click', event => {
  let target = event.target
  let button = target.closest('.tabs-content')

  
  if(button){
    event.preventDefault();
    let listAccordion = button.parentElement
    let AccordionContentBlock = button.nextElementSibling
    let contentHeight = AccordionContentBlock.firstElementChild

    listAccordion.classList.toggle('accordion-list__item--opened')

    if(listAccordion.classList.contains('accordion-list__item--opened')){
      AccordionContentBlock.style.maxHeight = contentHeight.scrollHeight + "px"
    }else{
      AccordionContentBlock.style.maxHeight = 0
    }
    

  }else{
    return
  }
})