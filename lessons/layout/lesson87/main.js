const body = document.getElementsByTagName('body')[0]
const header = document.getElementsByClassName('header')[0]
const main = document.getElementsByClassName('main')[0]
const footer = document.getElementsByClassName('footer')[0]

body.style.height = '90vh'
header.style.width = '100%'
header.style.height = '100px'
header.style.backgroundColor = '#383838'


main.style.width = '100%'
main.style.height = '100%'
main.style.backgroundColor = '#4554'

footer.style.width = '100%'
footer.style.height = '100px'
footer.style.backgroundColor = '#192332'



// header.style.width = "100%";
// header.style.height = "100px";

// ==================================================

let btnHello = document.getElementById('sayHello')
let btnGoodBye = document.getElementById('sayGoodBye')


btnHello.addEventListener('click', () => {
  alert('Привет')
})

btnGoodBye.addEventListener('click', () => {
  alert('Пока')
})

// ===================================================

const btn = document.querySelector(".ListOn");
const listBtn = document.querySelector(".list-on");

function openList(){
  listBtn.classList.toggle('list-on--active')
}

btn.addEventListener('click', openList);

// =================================================

const btn1 = document.querySelector('.btn')

btn1.addEventListener('click', event => {
  console.log(event)
})