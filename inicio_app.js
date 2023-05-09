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


//POPUP
const popup = document.querySelector(".estrellas")

function ocultarPopup() {
    popup.style.display = 'none';
}
  
  function mostrarPopup() {
    popup.style.display = 'block';
  }
  
  window.onload = mostrarPopup;









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
const matchDay = new Date("May 14, 2023 12:00:00")
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

let jugadoras_slide = (direction) => {

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

let cantera_slide = (direction) => {

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






//Sección de jugadora mahou 5 estrellas
const mahouMain = document.querySelector(".mahou__main");
const mahouMainImg = document.querySelector(".mahou__main-img-frame");
const mahouGallery = document.querySelector(".mahou__gallery-flex");

let arrJugadorasMahou = [];

class JugadoraMahou {
    constructor ({name = "Jugadora Mahou 5 estrellas del mes", month, imgLink}) {
        this.title = name;
        this.month = month;
        this.imgLink = imgLink;
    };
};

let jm1 = new JugadoraMahou ({name: "Patri Camacho - Nov 2022", month: "NOVIEMBRE", imgLink: "./gen_resources/general images/mahou/patri_camacho.jpg"});
let jm2 = new JugadoraMahou ({name: "Noemí Andrés - Dic 2022", month: "DICIEMBRE", imgLink: "./gen_resources/general images/mahou/noemi_andres.jpg"});
let jm3 = new JugadoraMahou ({name: "Cris Menéndez - Ene 2023", month: "ENERO", imgLink: "./gen_resources/general images/mahou/cris_menendez.jpg"});
let jm4 = new JugadoraMahou ({name: "Rosa Torres - Feb 2023", month: "FEBRERO", imgLink: "./gen_resources/general images/mahou/rosa_torres.jpg"});
let jm5 = new JugadoraMahou ({name: "Arantxa de la Chica - Mar 2023", month: "MARZO", imgLink: "./gen_resources/general images/mahou/arantxa_delachica.jpg"});

arrJugadorasMahou.push(jm5, jm4, jm3, jm2, jm1);

for (let jugadora of arrJugadorasMahou) {
    
    if (jugadora == arrJugadorasMahou[0]) { 
        mahouMainImg.innerHTML += 
        `<img title="${jugadora.title}" src="${jugadora.imgLink}" loading="lazy" alt="Jugadora Mahou 5 estrellas del mes de ${jugadora.month.toLowerCase()}" class="mahou__main-img"/>`;
        mahouMain.innerHTML += 
        `<h2 class="mahou__month">${jugadora.month}</h2>`;
    }

    else {
        mahouGallery.innerHTML += 
        `<div class="mahou__img-frame"><img title="${jugadora.title}" src="${jugadora.imgLink}" loading="lazy" alt="Jugadora Mahou 5 estrellas del mes de ${jugadora.month.toLowerCase()}" class="mahou__img"/></div>`
    };

};



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
let ep6 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #6 | Manuela Alfayate", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://www.youtube.com/live/S7mw2GlnGu8?feature=share&t=5516")
let ep7 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #7 | Gabriela de la Villa", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://www.youtube.com/live/70MoHl7iGFs?feature=share&t=5827")
let ep8 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #8 | Claudia Domínguez", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://youtu.be/NIC4C8th3SE?t=4430")
let ep9 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #9 | Sara Yagüe", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https:/https://www.youtube.com/live/mNlmfJrzERs?feature=share&t=6017")
let ep10 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #10 | Lucía Fernández", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://www.youtube.com/live/To3hy6NKU5g?feature=share&t=5162")
let ep11 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #11 | Noemí Andrés y Daniela Sanchís", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://www.youtube.com/live/GaWPCAhUCVs?feature=share&t=4838")
let ep12 = new Episode ("LUNES NOCHE FÚTBOL DE MADRID #12 | Patri Camacho y Andrea Ovejero", "/gen_resources/general images/lunes_noche_futbol_blue.jpg", "https://www.youtube.com/live/ItEcAS0saOw?feature=share&t=5194")

arrEps.push(ep12, ep11, ep10, ep9, ep8, ep7, ep6, ep5, ep4, ep3, ep2, ep1)

for (let episode of arrEps) {
    epFlex.innerHTML += 
    `<a class="podcast__episode" href="${episode.epLink}">
        <picture>
            <img loading="lazy" src="${episode.imgLink}" alt="Portada programa ${episode.name}" class="podcast__img"/>
        </picture>
        ${episode.name}
    </a>`
}