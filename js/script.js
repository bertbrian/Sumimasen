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

const gambar1 = document.getElementById('image1')
gambar1.addEventListener('click', UTClicked)

function UTClicked() {
    console.log("Ultra Thin")
}

const gambar2 = document.getElementById('image2')
gambar2.addEventListener('click', CoolClicked)

function CoolClicked() {
    console.log("Cool")
}

const gambar3 = document.getElementById('image3')
gambar3.addEventListener('click', DottedClicked)

function DottedClicked() {
    console.log("Dotted")
}

const gambar4 = document.getElementById('image4')
gambar4.addEventListener('click', DelayClicked)

function DelayClicked() {
    console.log("Delay")
}
