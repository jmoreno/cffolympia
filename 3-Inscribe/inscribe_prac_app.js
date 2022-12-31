//Navigation and beginning animation
const nav = document.querySelector("#nav");
const SCROLL_START = document.querySelector("#Inicio .overlay")
const SCROLL_START2 = document.querySelector("#Inicio .slide_at_start")

window.onscroll = function () {

    //Navigation and begin anim
    let top = window.scrollY;

    if (top >= 300) {
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


//Portada Display
const galeriaInicioYMatch = document.querySelector("#Inicio .gallery_frame .gallery")
const sponsorsWatermark = document.querySelector("#Inicio .sponsors_watermark")
function portadaDisplay() {
    galeriaInicioYMatch.style.transform = `translateX(0vw)`
    sponsorsWatermark.classList.remove("match")
}
//Match Data Display
function matchDataDisplay() {
    galeriaInicioYMatch.style.transform = `translateX(-100vw)`
    sponsorsWatermark.classList.add("match")
}



//Countdown
const timeLeft = document.querySelector("#Inicio .gallery_frame .gallery .frame2 .match-data .countdown-vs .countdown")
const matchDay = new Date("Oct 30, 2022 17:00:00")
const second = 1000
const minute = second * 60
const hour = minute * 60
const matchDuration = hour * 2
const day = hour * 24
let timerId

function countDown() {
    const today = new Date()
    const timeSpan = matchDay - today
    
    if (timeSpan <= -matchDuration) {
        timeLeft.innerText = "FIN"
        clearInterval(timerId)
        return
    }
    if (timeSpan <= 0) {
        timeLeft.innerText = "EN JUEGO"
        clearInterval(timerId)
        return
    }

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour).toLocaleString(undefined,{minimumIntegerDigits: 2})
    const minutes = Math.floor((timeSpan % hour) / minute).toLocaleString(undefined,{minimumIntegerDigits: 2})
    const seconds1 = Math.floor((timeSpan % minute) / second)
    const seconds2 = seconds1.toLocaleString(undefined,{minimumIntegerDigits: 2})

    if (timeSpan >= day) {
        timeLeft.innerText = `${days}d y ${hours}h`
    }
    else if (timeSpan >= minute) {
        timeLeft.innerText = `${hours}:${minutes}:${seconds2}`
    }
    else {
        timeLeft.innerText = `${seconds1}`
    }

}
timerId = setInterval(countDown, second)




//Jugadoras slider
const grupos_jugadoras = document.querySelectorAll("#Players .gallery_frame .gallery");
const grupos_jugadoras_translate = 16.6666667;
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
const prendas_shop = document.querySelectorAll("#Shop .gallery_frame .gallery");
const prendas_shop_translate = 16.6666667 * 2;
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

//Cantera slider
const equipos_cantera = document.querySelectorAll("#Cantera .cantera_grid-gallery .gallery");
const equipos_cantera_translate = 29.4117647 * (2/5);
let translate_cantera = 0;
let cantera_translation_index = 1;

cantera_slide = (direction) => {

    if ((direction === "next" && cantera_translation_index === 9) || (direction === "prev" && cantera_translation_index === 1)) {
        return
    }
    else if((direction === "next" && cantera_translation_index === 8) || (direction === "prev" && cantera_translation_index === 9)) {
        direction === "next" ? cantera_translation_index++ : cantera_translation_index--;
        direction === "next" ? translate_cantera -= (equipos_cantera_translate / 2) : translate_cantera += (equipos_cantera_translate /2);

        equipos_cantera.forEach (
            equipos_cantera => (equipos_cantera.style.transform = `translateX(${translate_cantera}%)`)
        )

    }
    else {
        direction === "next" ? cantera_translation_index++ : cantera_translation_index--;
        direction === "next" ? translate_cantera -= (equipos_cantera_translate) : translate_cantera += (equipos_cantera_translate);

        equipos_cantera.forEach (
            equipos_cantera => (equipos_cantera.style.transform = `translateX(${translate_cantera}%)`)
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






//Cambiar contenido de hashtag footer
// const HASHTAG = document.querySelector("#footer .social .hashtag")
// const hashtagArr = ["#CFFOLYMPIA", "#CANTERA", "#1ªNACIONAL", "#OLYMPIA", "#FUTBOLISTAS", "#SOÑAMOS", "#JUNTAS"]
// let nextHashtag = 1

// function hashtagContentChange () {
//     HASHTAG.innerText = hashtagArr[nextHashtag - 1]
//     nextHashtag++
//     if (nextHashtag >= 8) {
//         nextHashtag = 1
//     }
//     else {
//         return
//     }
// }