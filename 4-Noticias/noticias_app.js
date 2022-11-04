//Navigation and beginning animation
const nav = document.querySelector("#nav");
const SCROLL_START = document.querySelector("#Inicio .overlay")
const SCROLL_START2 = document.querySelector("#Inicio .slide_at_start")

window.onscroll = function () {

    //Navigation and begin anim
    let top = window.scrollY;

    if (top >= 1) {
        nav.classList.add("active")
    }
    else {
        nav.classList.remove("active")
    }

    //Parallax
}


//Responsive menu
const hambNav = document.querySelector(".nav_links");
let i = 0

function dropDownNavBar() {
    
    if (i == 0) {
        hambNav.classList.add("open")
        i = 1
    }
    else {
        hambNav.classList.remove("open")
        i = 0
    }
}