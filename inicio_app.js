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
const matchDay = new Date("Feb 19, 2023 16:30:00")
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





// //Shop slider
// const prendas_shop = document.querySelectorAll("#Shop .gallery_frame .gallery");
// const prendas_shop_translate = 16.6666667 * 2;
// let translate_shop = 0;
// let shop_translation_index = 1;

// shop_slide = (direction) => {

//     if ((direction === "next" && shop_translation_index === 3) || (direction === "prev" && shop_translation_index === 1)) {
//         return
//     }
//     else {
//         direction === "next" ? shop_translation_index++ : shop_translation_index--;
//         direction === "next" ? translate_shop -= prendas_shop_translate : translate_shop += prendas_shop_translate;

//         prendas_shop.forEach (
//             prendas_shop => (prendas_shop.style.transform = `translateX(${translate_shop}%)`)
//         )

//     }
// }

//Cantera slider
const equipos_cantera = document.querySelectorAll("#Cantera .cantera_grid-gallery .gallery");
const equipos_cantera_translate = 12.5 * (1);
let translate_cantera = 0;
let cantera_translation_index = 1;

cantera_slide = (direction) => {

    if ((direction === "next" && cantera_translation_index === 9) || (direction === "prev" && cantera_translation_index === 1)) {
        return
    }
    else if((direction === "next" && cantera_translation_index === 8) || (direction === "prev" && cantera_translation_index === 9)) {
        direction === "next" ? cantera_translation_index++ : cantera_translation_index--;
        // direction === "next" ? translate_cantera -= (equipos_cantera_translate / 2) : translate_cantera += (equipos_cantera_translate /2);

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



// Cookies
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});


//Seccion de podcast
const epFlex = document.querySelector(".podcast__gallery-flex")

let arrEps = []

class Episode {
    constructor (name = "LUNES NOCHE FÚTBOL DE MADRID", imgLink = "/gen_resources/general images/lunes_noche_futbol_blue.jpg", epLink){
        this.name = name;
        this.imgLink = imgLink;
        this.epLink = epLink;
    }
}

let ep1 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #1 | Noelia Llamas y Nuria Díaz", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://youtu.be/Pjo7oMxt0z0?t=4244")
let ep2 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #2 | Cris Menéndez e Irene González", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://youtu.be/8cKPmhVXRfw?t=4880")
let ep3 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #3 | Alba Masa", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://www.youtube.com/live/TQEcYiiyh7c?feature=share&t=5249")
let ep4 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #4 | Arantxa y Raquel Guardado", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://www.youtube.com/live/_IOZnSWAAZM?feature=share&t=5415")
let ep5 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #5 | Rosa Torres e Iratxe Rodríguez", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://www.youtube.com/live/fWi-vovvN7c?feature=share&t=4562")

arrEps.push(ep5, ep4, ep3, ep2, ep1)

for (let episode of arrEps) {
    epFlex.innerHTML += 
    `<a class="podcast__episode" href="${episode.epLink}">
        <picture>
            <img src="${episode.imgLink}" alt="Portada programa ${episode.name}" class="podcast__img"/>
        </picture>
        ${episode.name}
    </a>`
}