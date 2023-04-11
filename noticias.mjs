let arrArticles = [];

class Article {
    constructor ({
        title = "¡El Olympia está a tope!",
        imgLink = "/gen_resources/general images/foto_noticia_1", 
        text = "",
        date = new Date().toLocaleString().split(",")[0],
        tag = "OLYMPIA"
    }) {
        this.title = title;
        this.imgLink = imgLink;
        this.text = text;
        this.date = date;
        this.tag = tag;
    }
}

let A1 = new Article ({
    title: "El olympia estrena nueva equipación.",
    imgLink: "../gen_resources/general\ images/noticia_1.JPG",
    text: "Con la nueva temporada el CFF Olympia estrena la nueva equipación Adidas.",
    date: "12/09/2022",
    tag: "FAMILIA OLYMPIA"
});

let A2 = new Article ({
    title: "Victoria y goleada fuera de casa.",
    imgLink: "../gen_resources/general\ images/noticia_2.JPG",
    text: "Goleada y partidazo de todo el equipo en la cuarta jornada de liga ante el CD. Salamanca FF.",
    date: "02/10/2022",
    tag: "PRIMER EQUIPO"
});

let A3 = new Article ({
    title: "El primer equipo se pone líder tras su victoria.",
    imgLink: "../gen_resources/general\ images/noticia_3.JPG",
    text: "El primer equipo se consolida como líder tras su merecida victoria contra el Santa Teresa CD Femenino.",
    date: "16/10/2022",
    tag: "PRIMER EQUIPO"
});

let A4 = new Article ({
    title: "Dos semanas de líderes.",
    imgLink: "../gen_resources/general\ images/noticia_4.JPG",
    text: "Tras la victoria contra el Atlético de Madrid femenino, el Olympia se mantiene en primera posición por segunda semana consecutiva.",
    date: "29/10/2022",
    tag: "VETERANAS"
});

let A5 = new Article ({
    title: "¡Los partidos se ganan JUNTAS!",
    imgLink: "../gen_resources/general\ images/noticia_5.JPG",
    text: "El primer equipo vence al Dínamo Guadalajara por 0 a 1.",
    date: "15/01/2023",
    tag: "PRIMER EQUIPO"
});

let A6 = new Article ({
    title: "¡Nuestras cadetes están imparables!",
    imgLink: "../gen_resources/general\ images/noticia_6.JPG",
    text: "¡Nuestro Cadete A está imparable! #soñamosjuntas",
    date: "25/01/2023",
    tag: "CANTERA"
});

let A7 = new Article ({
    title: "¡El derbi se queda en casa!",
    imgLink: "../gen_resources/general\ images/noticia_7.JPG",
    text: "Victoria frente al Olímpico de Madrid en la vuelta del derbi roceño.",
    date: "05/02/2023",
    tag: "PRIMER EQUIPO"
});

let A8 = new Article ({
    title: "Una derrota que nos hace pensar en el siguiente.",
    imgLink: "../gen_resources/general\ images/noticia_8.JPG",
    text: "Derrota frente al Pozuelo de Alarcón en la segunda vuelta por 1 a 0.",
    date: "20/02/2023",
    tag: "PRIMER EQUIPO"
});

let A9 = new Article ({
    title: "Las equipaciones del Olympia viajan a Burkina Faso.",
    imgLink: "../gen_resources/general\ images/noticia_9.jpg",
    text: '<a href="https://lavozdelaa6.es/las-equipaciones-del-cff-olympia-de-las-rozas-viajan-a-burkina-faso/">https://lavozdelaa6.es/las-equipaciones-del-cff-olympia-de-las-rozas-viajan-a-burkina-faso/</a>',
    date: "21/02/2023",
    tag: "FAMILIA OLYMPIA"
});

let A10 = new Article ({
    title: "¡Nuestro filial sigue líder!",
    imgLink: "../gen_resources/general\ images/noticia_10.jpg",
    text: "El Senior B se mantiene como líder.",
    date: "07/03/2023",
    tag: "EQUIPO FILIAL"
});

let A11 = new Article ({
    title: "¡Tercer puesto para las Veteranas!",
    imgLink: "../gen_resources/general\ images/noticia_11.jpg",
    text: "Las veteranas terminan en el tercer puesto de la II edición de la liga Misma Pasión. Meción especial para Carmen, galardonada jugadora más veterana de la liga.",
    date: "28/03/2023",
    tag: "VETERANAS"
});

let A12 = new Article ({
    title: "Empate del Juvenil A frente al Atlético de Madrid.",
    imgLink: "../gen_resources/general\ images/noticia_12.jpg",
    text: "El Juvenil A empata con el Atlético de Madrid por 3 a 3 en la vigésimo sexta jornada de la liga.",
    date: "02/04/2023",
    tag: "CANTERA"
});

let A13 = new Article ({
    title: "El Olympia regresa de la SWIT cup.",
    imgLink: "../gen_resources/general\ images/noticia_13.jpg",
    text: "El Olympia regresa a casa tras participar en el torneo SWIT de Sabadell.",
    date: "10/04/2023",
    tag: "SWIT"
});

arrArticles.push(A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13);

export let articulos = arrArticles;