let NOTICIAS = [];

class Articulo {
  constructor({
    title = "¡El Olympia está a tope!",
    imgLink = "",
    text = "",
    date = new Date().toLocaleString().split(",")[0],
    imgPosition = "center",
  }) {
    this.title = title;
    this.imgLink = imgLink;
    this.text = text;
    this.date = date;
    this.imgPosition = imgPosition;
  }
}

let a1 = new Articulo({
  title: "El olympia estrena nueva equipación.",
  imgLink: "/public/img/noticias/noticia_1.JPG",
  text: "Con la nueva temporada el CFF Olympia estrena la nueva equipación Adidas.",
  date: "12/09/2022",
});
let a2 = new Articulo({
  title: "Victoria y goleada fuera de casa.",
  imgLink: "/public/img/noticias/noticia_2.JPG",
  text: "Goleada y partidazo de todo el equipo en la cuarta jornada de liga ante el CD. Salamanca FF.",
  date: "02/10/2022",
});
let a3 = new Articulo({
  title: "El primer equipo se pone líder tras su victoria.",
  imgLink: "/public/img/noticias/noticia_3.JPG",
  text: "El primer equipo se consolida como líder tras su merecida victoria contra el Santa Teresa CD Femenino.",
  date: "16/10/2022",
});
let a4 = new Articulo({
  title: "Dos semanas de líderes.",
  imgLink: "/public/img/noticias/noticia_4.JPG",
  text: "Tras la victoria contra el Atlético de Madrid femenino, el Olympia se mantiene en primera posición por segunda semana consecutiva.",
  date: "29/10/2022",
});
let a5 = new Articulo({
  title: "¡Los partidos se ganan JUNTAS!",
  imgLink: "/public/img/noticias/noticia_5.JPG",
  text: "El primer equipo vence al Dínamo Guadalajara por 0 a 1.",
  date: "15/01/2023",
});
let a6 = new Articulo({
  title: "¡Nuestras cadetes están imparables!",
  imgLink: "/public/img/noticias/noticia_6.JPG",
  text: "¡Nuestro Cadete A está imparable! #soñamosjuntas",
  date: "25/01/2023",
});
let a7 = new Articulo({
  title: "¡El derbi se queda en casa!",
  imgLink: "/public/img/noticias/noticia_7.JPG",
  text: "Victoria frente al Olímpico de Madrid en la vuelta del derbi roceño.",
  date: "05/02/2023",
});
let a8 = new Articulo({
  title: "Una derrota que nos hace pensar en el siguiente.",
  imgLink: "/public/img/noticias/noticia_8.JPG",
  text: "Derrota frente al Pozuelo de Alarcón en la segunda vuelta por 1 a 0.",
  date: "20/02/2023",
});
let a9 = new Articulo({
  title: "Las equipaciones del Olympia viajan a Burkina Faso.",
  imgLink: "/public/img/noticias/noticia_9.jpg",
  text: '<a href="https://lavozdelaa6.es/las-equipaciones-del-cff-olympia-de-las-rozas-viajan-a-burkina-faso/">https://lavozdelaa6.es/las-equipaciones-del-cff-olympia-de-las-rozas-viajan-a-burkina-faso/</a>',
  date: "21/02/2023",
});
let a10 = new Articulo({
  title: "¡Nuestro filial sigue líder!",
  imgLink: "/public/img/noticias/noticia_10.jpg",
  text: "El Senior B se mantiene como líder.",
  date: "07/03/2023",
});
let a11 = new Articulo({
  title: "¡Tercer puesto para las Veteranas!",
  imgLink: "/public/img/noticias/noticia_11.jpg",
  text: "Las veteranas terminan en el tercer puesto de la II edición de la liga Misma Pasión. Meción especial para Carmen, galardonada jugadora más veterana de la liga.",
  date: "28/03/2023",
  imgPosition: "0 15%",
});
let a12 = new Articulo({
  title: "Empate del Juvenil A frente al Atlético de Madrid.",
  imgLink: "/public/img/noticias/noticia_12.jpg",
  text: "El Juvenil A empata con el Atlético de Madrid por 3 a 3 en la vigésimo sexta jornada de la liga.",
  date: "02/04/2023",
  imgPosition: "0 70%",
});
let a13 = new Articulo({
  title: "El Olympia regresa de la SWIT cup.",
  imgLink: "/public/img/noticias/noticia_13.jpg",
  text: "El Olympia regresa a casa tras participar en el torneo SWIT de Sabadell.",
  date: "10/04/2023",
});
let a14 = new Articulo({
  title: "Victoria conjunta del Olympia y Jugones.",
  imgLink: "/public/img/noticias/noticia_14.JPG",
  text: "Las veteranas del Olympia y de Jugones se unen para ganar por 3 a 0 al Moralzarzal.",
  date: "17/04/2023",
});
let a15 = new Articulo({
  title: "¡CAMPEONAS DE LA 1ª EDICIÓN!",
  imgLink: "/public/img/noticias/noticia_15.JPG",
  text: "El Benjamín queda campeón de la primera edición de la liga F7 femenino categoría benjamín tras remontar un 1-0 en su último partido frente al Atlético de Madrid, ganando por 1-2.",
  date: "23/04/2023",
});
let a16 = new Articulo({
  title: "¡CAMPEONAS DE LIGA!",
  imgLink: "/public/img/noticias/noticia_16.JPG",
  text: "El Cadete B logra quedar campeón de liga tras su victoria frente al Colmenarejo por 4-0.",
  date: "23/04/2023",
});
let a17 = new Articulo({
  title: "¡ALEVÍN B CAMPEÓN DE LIGA!",
  imgLink: "/public/img/noticias/noticia_17.JPG",
  text: "El Alevín B se alza con la victoria en la liga tras vencer por 7 a 1 a la Gimnastica de Colmenarejo",
  date: "14/05/2023",
  imgPosition: "0 27%",
});
let a18 = new Articulo({
  title: "De visita en Valdebebas",
  imgLink: "/public/img/noticias/noticia_18.JPG",
  text: "El Benjamín acompañó al Real Madrid en su partido este fin de semana.",
  date: "14/05/2023",
  imgPosition: "0 18%",
});
let a19 = new Articulo({
  title: "¡SENIOR B CAMPEÓN DE LIGA!",
  imgLink: "/public/img/noticias/noticia_19.JPG",
  text: "El Senior B se proclama campeón de liga tras un 5-0 frente a la E.F. Carabanchel.",
  date: "28/05/2023",
  imgPosition: "0 16%",
});
let a20 = new Articulo({
  title: "Disponible el Campamento del Olympia",
  imgLink: "/public/img/noticias/noticia_20.JPG",
  text: "Si quieres apuntarte, contacta con nosotros.",
  date: "01/06/2023",
});
let a21 = new Articulo({
  title: "Campeonas del X Torneo Solidario Zósimo Ibáñez",
  imgLink: "/public/img/noticias/noticia_21.JPG",
  text: "El Alevín se hace con el primer puesto del X Torneo Solidario Zósimo Ibáñez.",
  date: "11/06/2023",
});
let a22 = new Articulo({
  title: "¡Campeona de España con la Selección Madrileña Sub17!",
  imgLink: "/public/img/noticias/noticia_22.JPG",
  text: "La jugadora Elsa Sánchez (Senior A) se proclama campeona del Campeonato de Selecciones Autonómicas Sub17 2023.",
  date: "11/06/2023",
});
let a23 = new Articulo({
  title: "Subcampeonas del XIX Torneo Estrellas de Móstoles",
  imgLink: "/public/img/noticias/noticia_23.JPG",
  text: "El Infantil se proclama subcampeón de la 19ª edición del Torneo de Fútbol Estrellas de Móstoles.",
  date: "11/06/2023",
});
let a24 = new Articulo({
  title: "¡ASCENSO A PREFERENTE!",
  imgLink: "/public/img/noticias/noticia_24.JPG",
  text: "El Senior C logra el ascenso a categoría Preferente tras vencer al Collado Villalba por 5 a 3.",
  date: "11/06/2023",
});
let a25 = new Articulo({
  title: "Alba Masa jugadora Mahou 5 estrellas de la temporada",
  imgLink: "/public/img/noticias/noticia_25.JPG",
  text: "Alba Masa se proclama jugadora Mahou 5 estrellas de la temporada 22-23.",
  date: "15/06/2023",
  imgPosition: "center center",
});

let a26 = new Articulo({
  title: "¡Victoria en el derbi roceño!",
  imgLink: "/public/img/noticias/noticia_26.jpg",
  text: "El Primer Equipo se impone por 6 a 2 frente a Las Rozas en la primera jornada de liga.",
  date: "10/09/2023",
  imgPosition: "center center",
});

let a27 = new Articulo({
  title: "¡En tercera posición!",
  imgLink: "/public/img/noticias/noticia_27.jpg",
  text: "Nuestro primer equipo suma tres importes puntos que le permite seguir trabajando y colocarse en tercera posición a tan solo tres puntos del líder.",
  date: "06/11/2023",
  imgPosition: "center center",
});

let a28 = new Articulo({
  title: "¡Senior B líder!",
  imgLink: "/public/img/noticias/noticia_28.jpg",
  text: "Nuestras jugadoras del Senior B se colocan en la primera posición tras haber cerrado el fin de semana con un contundente resultado. ¡Enhorabuena campeonas, a seguir trabajando en esta línea!",
  date: "10/11/2023",
  imgPosition: "center center",
});

let a29 = new Articulo({
  title: "Apple Tree renueva patrocinio",
  imgLink: "/public/img/noticias/noticia_29.jpg",
  text: "Apple Tree ratifica su compromiso con el deporte femenino y renueva el patrocinio con el club.",
  date: "16/11/2023",
  imgPosition: "center center",
});

let a30 = new Articulo({
  title: "Primera reunión con University Soccer",
  imgLink: "/public/img/noticias/noticia_30.jpg",
  text: "Se celebra la primera reunión de University Soccer con las familias del Olympia.",
  date: "17/11/2023",
  imgPosition: "center center",
});

let a31 = new Articulo({
  title: "Día del entrenador 2022 - 2023",
  imgLink: "/public/img/noticias/noticia_31.jpg",
  text: "Damos la enhorabuena a nuestros entrenadores por haber alcanzado el primer puesto de su liga en sus respectivas categorías.",
  date: "02/12/2023",
  imgPosition: "40% center",
});

let a32 = new Articulo({
  title: "Bota de oro a nuestra Directora Deportiva, Ana de la Chica.",
  imgLink: "/public/img/noticias/noticia_32.jpg",
  text: "GALA DE FÚTBOL EN MADRID 2023. La @RFFM_oficial ha entregado a nuestra Directora Deportiva la BOTA DE ORO a Ana de la Chica por ser la mejor entrenadora. Orgullo Olympia",
  date: "17/12/2023",
  imgPosition: "center center",
});

NOTICIAS.push(
  a32,
  a31,
  a30,
  a29,
  a28,
  a27,
  a26,
  a25,
  a24,
  a23,
  a22,
  a21,
  a20,
  a19,
  a18,
  a17,
  a16,
  a15,
  a14,
  a13,
  a12,
  a11,
  a10,
  a9,
  a8,
  a7,
  a6,
  a5,
  a4,
  a3,
  a2,
  a1
);

export default NOTICIAS;
