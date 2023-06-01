import { articulos } from "../noticias.mjs"

const newsGrid = document.querySelector(".grid");

for (let i = articulos.length - 1; i >= 0; i--) {
    newsGrid.innerHTML += 
    `<div class="${i == (articulos.length - 1) ? 'main_' : ""}noticia" id="${i == (articulos.length - 1) ? 'main"' : articulos.length - 1 - i}">
        <div class="img${articulos.length - i} img" style="background-image: url('${articulos[i].imgLink}'); ${articulos.length - i == 1 ? "background-position: center 60%;" : "" };"></div>
        <div class="content">
            <h1>${articulos[i].title}</h1>
            <p>${articulos[i].text}</p>
            <h5>${articulos[i].date}</h5>
        </div>
    </div>`;
};


//Navigation and beginning animation
const nav = document.querySelector("#nav");
// const SCROLL_START = document.querySelector("#Inicio .overlay")
// const SCROLL_START2 = document.querySelector("#Inicio .slide_at_start")

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

addEventListener("click", dropDownNavBar)