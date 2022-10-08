
//Navigation and beginning animation
const nav = document.querySelector("#nav");
const SCROLL_START = document.querySelector("#Inicio .overlay")

window.onscroll = function () {

    //Navigation and begin anim
    let top = window.scrollY;
    if (top >= 30) {
        nav.classList.add("active")
        SCROLL_START.classList.add("active")
    } else {
        nav.classList.remove("active")
        SCROLL_START.classList.remove("active")
    }

    //Parallax
}





//Jugadoras slider
const grupos_jugadoras = document.querySelectorAll("#Players .gallery_frame .gallery .grupo");
const grupos_jugadoras_translate = 100;
let translate_jugadoras = 0;
let translation_index = 1;

jugadoras_slide = (direction) => {

    if ((direction === "next" && translation_index === 6) || (direction === "prev" && translation_index === 1)) {
        return
    }
    else {
        direction === "next" ? translation_index++ : translation_index--;
        direction === "next" ? translate_jugadoras -= grupos_jugadoras_translate : translate_jugadoras += grupos_jugadoras_translate;

        grupos_jugadoras.forEach (
            grupos_jugadoras => (grupos_jugadoras.style.transform = `translateX(${translate_jugadoras}%)`)
        )

    }
}





//Shop slider
const prendas_shop = document.querySelectorAll("#Shop .gallery_frame .gallery .grupo");
const prendas_shop_translate = 100;
let translate_shop = 0;
let shop_translation_index = 1;

shop_slide = (direction) => {

    if ((direction === "next" && shop_translation_index === 3) || (direction === "prev" && shop_translation_index === 1)) {
        return
    }
    else {
        direction === "next" ? shop_translation_index++ : shop_translation_index--;
        direction === "next" ? translate_shop -= prendas_shop_translate : translate_shop += prendas_shop_translate;

        prendas_shop.forEach (
            prendas_shop => (prendas_shop.style.transform = `translateX(${translate_shop}%)`)
        )

    }
}





//Main News onhover content enlarger
document.querySelector(`#MainNews .news1`).setAttribute('id','main')

function mainNewsFunc(page) {

    let newsArr = [1,2,3,4]

    const NEWS = document.querySelector(`#MainNews .news${page}`)

    NEWS.setAttribute('id','main')

    newsArr.splice(page-1, 1)
    
    for (let i = 0; i<newsArr.length; i++) {
        document.querySelector(`#MainNews .news${newsArr[i]}`).removeAttribute('id','main')
    }
}