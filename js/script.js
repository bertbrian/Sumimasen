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
gambar1.addEventListener('click', buyImage1)

function buyImage1() {
    console.log("image1clicked")
}

const gambar2 = document.getElementById('image2')
gambar2.addEventListener('click', buyImage2)

function buyImage2() {
    console.log("image2clicked")
}

const gambar3 = document.getElementById('image3')
gambar3.addEventListener('click', buyImage3)

function buyImage3() {
    console.log("image3clicked")
}

const gambar4 = document.getElementById('image4')
gambar4.addEventListener('click', buyImage4)

function buyImage4() {
    console.log("image4clicked")
}
