const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)
menu.addEventListener('click', menuclicked)

//Toggle Mobile Menu
function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

function menuclicked(){
    navToggle()
}