let CLUB = [];
class Team {
  constructor({ general = {}, staff = [], players = [], sponsors = [] }) {
    this.general = general;
    this.staff = staff;
    this.players = players;
    this.sponsors = sponsors;
  }
}

////////////////////////////////////////////////////
//                   ALL TEAMS                    //
////////////////////////////////////////////////////
let BenjaminA = new Team({
  general: {
    name: "Benjamín A",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=benjamin_a",
    //calendarURL: "", //For the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Rosa Torres",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Alba Masa",
      imgURL: "",
      status: "Segunda entrenadora",
    },
  ],
  players: [
    {
      name: "Naia Ferrari",
      imgURL: "",
      number: "7",
      position: "",
    },
    {
      name: "Blanca Fidalgo",
      imgURL: "",
      number: "8",
      position: "",
    },
    {
      name: "Noa Seco",
      imgURL: "",
      number: "9",
      position: "",
    },
    {
      name: "Daniela Alves",
      imgURL: "",
      number: "24",
      position: "",
    },
    {
      name: "Vega Aunión",
      imgURL: "",
      number: "28",
      position: "",
    },
    {
      name: "Marta Palla",
      imgURL: "",
      number: "31",
      position: "",
    },
    {
      name: "Alma Toril",
      imgURL: "",
      number: "35",
      position: "",
    },
    {
      name: "Lidia Redondo",
      imgURL: "",
      number: "37",
      position: "",
    },
    {
      name: "Ángela González",
      imgURL: "",
      number: "42",
      position: "",
    },
  ],
});

let BenjaminB = new Team({
  general: {
    name: "Benjamín B",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=benjamin_b",
    //calendarURL: "", //For the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Sofía Pérez",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Irene Barajas",
      imgURL: "",
      status: "Segunda entrenadora",
    },
  ],
  players: [
    {
      name: "Paula Riera",
      imgURL: "",
      number: "10",
      position: "",
    },
    {
      name: "Irene Cerro",
      imgURL: "",
      number: "11",
      position: "",
    },
    {
      name: "Sara Cerro",
      imgURL: "",
      number: "12",
      position: "",
    },
    {
      name: "Eva Gaztañaga",
      imgURL: "",
      number: "21",
      position: "",
    },
    {
      name: "Lola Méndez",
      imgURL: "",
      number: "22",
      position: "",
    },
    {
      name: "Paula Resino",
      imgURL: "",
      number: "23",
      position: "",
    },
    {
      name: "Hannah Van Beek",
      imgURL: "",
      number: "26",
      position: "",
    },
    {
      name: "Raquel García",
      imgURL: "",
      number: "29",
      position: "",
    },
    {
      name: "Ángela García",
      imgURL: "",
      number: "30",
      position: "",
    },
    {
      name: "Claudia Van Beek",
      imgURL: "",
      number: "33",
      position: "",
    },
    {
      name: "Paula Gómez",
      imgURL: "",
      number: "36",
      position: "",
    },
    {
      name: "Aisha Canet",
      imgURL: "",
      number: "38",
      position: "",
    },
  ],
});

let BenjaminC = new Team({
  general: {
    name: "Benjamín C",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=benjamin_c",
    //calendarURL: "", //For the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "",
      imgURL: "",
      status: "",
    },
    {
      name: "",
      imgURL: "",
      status: "",
    },
  ],
  players: [
    {
      name: "Paula Riera",
      imgURL: "",
      number: "10",
      position: "",
    },
    {
      name: "Irene Cerro",
      imgURL: "",
      number: "11",
      position: "",
    },
    {
      name: "Sara Cerro",
      imgURL: "",
      number: "12",
      position: "",
    },
    {
      name: "Eva Gaztañaga",
      imgURL: "",
      number: "21",
      position: "",
    },
    {
      name: "Lola Méndez",
      imgURL: "",
      number: "22",
      position: "",
    },
    {
      name: "Paula Resino",
      imgURL: "",
      number: "23",
      position: "",
    },
    {
      name: "Hannah Van Beek",
      imgURL: "",
      number: "26",
      position: "",
    },
    {
      name: "Raquel García",
      imgURL: "",
      number: "29",
      position: "",
    },
    {
      name: "Ángela García",
      imgURL: "",
      number: "30",
      position: "",
    },
    {
      name: "Claudia Van Beek",
      imgURL: "",
      number: "33",
      position: "",
    },
    {
      name: "Paula Gómez",
      imgURL: "",
      number: "36",
      position: "",
    },
    {
      name: "Aisha Canet",
      imgURL: "",
      number: "38",
      position: "",
    },
  ],
});

let AlevinA = new Team({
  general: {
    name: "Alevín A",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=alevin_a",
    //calendarURL: "", //For the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Raquel Guardado",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Andrea Ovejero",
      imgURL: "",
      status: "Segunda entrenadora",
    },
  ],
  players: [
    {
      name: "Ainhoa Santos",
      imgURL: "",
      number: "4",
      position: "",
    },
    {
      name: "Adriana Gil",
      imgURL: "",
      number: "6",
      position: "",
    },
    {
      name: "Carmen Garde",
      imgURL: "",
      number: "11",
      position: "",
    },
    {
      name: "Carlota Mena",
      imgURL: "",
      number: "12",
      position: "",
    },
    {
      name: "Tanya Díaz",
      imgURL: "",
      number: "15",
      position: "",
    },
    {
      name: "Eva Serrano",
      imgURL: "",
      number: "16",
      position: "",
    },
    {
      name: "Alba González",
      imgURL: "",
      number: "19",
      position: "",
    },
    {
      name: "Livia Torres",
      imgURL: "",
      number: "20",
      position: "",
    },
    {
      name: "Sofía Elices",
      imgURL: "",
      number: "39",
      position: "",
    },
    {
      name: "Violeta Sierra",
      imgURL: "",
      number: "41",
      position: "",
    },
    {
      name: "Leire González",
      imgURL: "",
      number: "50",
      position: "",
    },
    {
      name: "Olivia Scade",
      imgURL: "",
      number: "54",
      position: "",
    },
    {
      name: "Rocío Moya",
      imgURL: "",
      number: "58",
      position: "Portera",
    },
  ],
});

let AlevinB = new Team({
  general: {
    name: "Alevín B",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=alevin_b",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Marta García",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Blanca Ruiz",
      imgURL: "",
      status: "Segunda entrenadora",
    },
  ],
  players: [
    {
      name: "Mia Carla Rivas",
      imgURL: "",
      number: "5",
      position: "",
    },
    {
      name: "Carmen Romero",
      imgURL: "",
      number: "14",
      position: "",
    },
    {
      name: "Nora Hillegas",
      imgURL: "",
      number: "21",
      position: "",
    },
    {
      name: "Elena Barios",
      imgURL: "",
      number: "27",
      position: "",
    },
    {
      name: "Henar Holguin",
      imgURL: "",
      number: "43",
      position: "",
    },
    {
      name: "Leire Ramos",
      imgURL: "",
      number: "48",
      position: "",
    },
    {
      name: "Gabriela de Álvaro",
      imgURL: "",
      number: "49",
      position: "",
    },
    {
      name: "Maravillas López",
      imgURL: "",
      number: "52",
      position: "",
    },
    {
      name: "Alejandra Gil-Ortega",
      imgURL: "",
      number: "55",
      position: "",
    },
    {
      name: "Saskia Steber",
      imgURL: "",
      number: "56",
      position: "",
    },
    {
      name: "Clara Barios",
      imgURL: "",
      number: "57",
      position: "",
    },
    {
      name: "Adriana Granero",
      imgURL: "",
      number: "59",
      position: "",
    },
  ],
});

let AlevinC = new Team({
  general: {
    name: "Alevín C",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=alevin_c",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Nuria Díaz",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Sergio de la Fuente",
      imgURL: "",
      status: "Primer entrenador",
    },
  ],
  players: [
    {
      name: "Laia Cauyola",
      imgURL: "",
      number: "1",
      position: "",
    },
    {
      name: "Ainhoa Moya",
      imgURL: "",
      number: "17",
      position: "",
    },
    {
      name: "Olivia Prieto",
      imgURL: "",
      number: "18",
      position: "",
    },
    {
      name: "Julia Cauyola",
      imgURL: "",
      number: "22",
      position: "",
    },
    {
      name: "Valentina Heras",
      imgURL: "",
      number: "30",
      position: "",
    },
    {
      name: "Valeria Ricobaldi",
      imgURL: "",
      number: "32",
      position: "",
    },
    {
      name: "Alejandra Alonso",
      imgURL: "",
      number: "34",
      position: "",
    },
    {
      name: "Trinidad Yunge",
      imgURL: "",
      number: "40",
      position: "",
    },
    {
      name: "Sol Ramos",
      imgURL: "",
      number: "44",
      position: "",
    },
    {
      name: "Helena Rodríguez",
      imgURL: "",
      number: "46",
      position: "",
    },
    {
      name: "Sofía Hetreros",
      imgURL: "",
      number: "47",
      position: "",
    },
    {
      name: "Mara Hernández",
      imgURL: "",
      number: "60",
      position: "",
    },
    {
      name: "Nicole Skrabal",
      imgURL: "",
      number: "62",
      position: "",
    },
    {
      name: "Carmen Calleja",
      imgURL: "",
      number: "64",
      position: "",
    },
  ],
});

let InfantilA = new Team({
  general: {
    name: "Infantil A",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=infantil_a",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Emanuel Inga",
      imgURL: "",
      status: "Primer entrenador",
    },
    {
      name: "Christian Cariati",
      imgURL: "",
      status: "Segundo entrenador",
    },
  ],
  players: [
    {
      name: "Cayetana Caballero",
      imgURL: "",
      number: "13",
      position: "",
    },
    {
      name: "María Pérez",
      imgURL: "",
      number: "28",
      position: "",
    },
    {
      name: "Martina Caballero",
      imgURL: "",
      number: "31",
      position: "",
    },
    {
      name: "Alexandra Alvarado",
      imgURL: "",
      number: "34",
      position: "",
    },
    {
      name: "Alejandra Velasco",
      imgURL: "",
      number: "38",
      position: "",
    },
    {
      name: "Martina Pérez-Higueras",
      imgURL: "",
      number: "40",
      position: "",
    },
    {
      name: "Martina Miranda",
      imgURL: "",
      number: "50",
      position: "",
    },
    {
      name: "Elena Andrés",
      imgURL: "",
      number: "63",
      position: "",
    },
    {
      name: "Amaia Arenas",
      imgURL: "",
      number: "67",
      position: "",
    },
    {
      name: "Elena Guerra",
      imgURL: "",
      number: "70",
      position: "",
    },
    {
      name: "Irene Algora",
      imgURL: "",
      number: "77",
      position: "",
    },
    {
      name: "Pilar Portilla",
      imgURL: "",
      number: "80",
      position: "",
    },
    {
      name: "Julia Torres",
      imgURL: "",
      number: "81",
      position: "",
    },
    {
      name: "Ainara Cariati",
      imgURL: "",
      number: "88",
      position: "",
    },
    {
      name: "Ángela Serrano",
      imgURL: "",
      number: "93",
      position: "",
    },
  ],
});

let InfantilB = new Team({
  general: {
    name: "Infantil B",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=infantil_b",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Jorge Ballesteros",
      imgURL: "",
      status: "Primer entrenador",
    },
    // {
    //   name: "Miguel Morro",
    //   imgURL: "",
    //   status: "Segundo entrenador",
    // },
  ],
  players: [
    {
      name: "Amanda de Pedro",
      imgURL: "",
      number: "1",
      position: "",
    },
    {
      name: "Martina García",
      imgURL: "",
      number: "22",
      position: "",
    },
    {
      name: "Ana Corina Alves",
      imgURL: "",
      number: "32",
      position: "",
    },
    {
      name: "Claudia Prieto",
      imgURL: "",
      number: "42",
      position: "",
    },
    {
      name: "Lucía Fernández",
      imgURL: "",
      number: "43",
      position: "",
    },
    {
      name: "Lucía Gómez",
      imgURL: "",
      number: "47",
      position: "",
    },
    {
      name: "Violeta Castellanos",
      imgURL: "",
      number: "48",
      position: "",
    },
    {
      name: "Mariana Maristany",
      imgURL: "",
      number: "60",
      position: "",
    },
    {
      name: "Aitana Gómez",
      imgURL: "",
      number: "61",
      position: "",
    },
    {
      name: "Cristina Esteban",
      imgURL: "",
      number: "82",
      position: "",
    },
    {
      name: "Adriana Toral",
      imgURL: "",
      number: "87",
      position: "",
    },
    {
      name: "Aitana Escribano",
      imgURL: "",
      number: "97",
      position: "",
    },
    {
      name: "Jimena Aceituno",
      imgURL: "",
      number: "99",
      position: "",
    },
  ],
});

let InfantilC = new Team({
  general: {
    name: "Infantil C",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=infantil_c",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Aitana Sánchez",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Icíar Cofrades",
      imgURL: "",
      status: "Segunda entrenadora",
    },
  ],
  players: [
    {
      name: "Alba Aparicio",
      imgURL: "",
      number: "1",
      position: "",
    },
    {
      name: "Anabel García",
      imgURL: "",
      number: "3",
      position: "",
    },
    {
      name: "Lourdes Núñez",
      imgURL: "",
      number: "29",
      position: "",
    },
    {
      name: "Elena Matus",
      imgURL: "",
      number: "35",
      position: "",
    },
    {
      name: "María Sobrino",
      imgURL: "",
      number: "36",
      position: "",
    },
    {
      name: "Blanca Gómez",
      imgURL: "",
      number: "39",
      position: "",
    },
    {
      name: "Alejandra Torres",
      imgURL: "",
      number: "53",
      position: "",
    },
    {
      name: "Máxima Alexander",
      imgURL: "",
      number: "59",
      position: "",
    },
    {
      name: "Alba Garzón",
      imgURL: "",
      number: "73",
      position: "",
    },
    {
      name: "Sofía Schroll",
      imgURL: "",
      number: "75",
      position: "",
    },
    {
      name: "Paula Herrando",
      imgURL: "",
      number: "86",
      position: "",
    },
    {
      name: "Cloe Malo",
      imgURL: "",
      number: "90",
      position: "",
    },
  ],
});

let InfantilD = new Team({
  general: {
    name: "Infantil D",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=infantil_d",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Gema Prieto",
      imgURL: "",
      status: "Primera entrenadora",
    },
  ],
  players: [
    {
      name: "Carla Pérez-Beato",
      imgURL: "",
      number: "18",
      position: "",
    },
    {
      name: "Paula Alfonso",
      imgURL: "",
      number: "23",
      position: "",
    },
    {
      name: "Lucía Lanchas",
      imgURL: "",
      number: "24",
      position: "",
    },
    {
      name: "Laura Matarranz",
      imgURL: "",
      number: "25",
      position: "",
    },
    {
      name: "Alba Martínez",
      imgURL: "",
      number: "26",
      position: "",
    },
    {
      name: "Ana Lanchas",
      imgURL: "",
      number: "33",
      position: "",
    },
    {
      name: "Lucía Cauyola",
      imgURL: "",
      number: "45",
      position: "",
    },
    {
      name: "Lucía de Vicente",
      imgURL: "",
      number: "55",
      position: "",
    },
    {
      name: "Marina Rubio",
      imgURL: "",
      number: "68",
      position: "",
    },
    {
      name: "Nahia González",
      imgURL: "",
      number: "74",
      position: "",
    },
    {
      name: "Ania Cruzado",
      imgURL: "",
      number: "78",
      position: "",
    },
    {
      name: "Teresa Lorenzo",
      imgURL: "",
      number: "83",
      position: "",
    },
  ],
});

let InfantilF11 = new Team({
  general: {
    name: "Infantil F11",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=infantil_f11",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Lucía Sánchez",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Daniela de Miguel",
      imgURL: "",
      status: "Segunda entrenadora",
    },
    {
      name: "Hugo Prieto",
      imgURL: "",
      status: "Segundo entrenador",
    },
    {
      name: "Irene Martínez",
      imgURL: "",
      status: "Fisioterapeuta",
    },
  ],
  players: [
    {
      name: "Covadonga Labra",
      imgURL: "",
      number: "1",
      position: "",
    },
    {
      name: "Elsa González",
      imgURL: "",
      number: "2",
      position: "",
    },
    {
      name: "María Cristobal",
      imgURL: "",
      number: "8",
      position: "",
    },
    {
      name: "Dafne Díaz",
      imgURL: "",
      number: "9",
      position: "",
    },
    {
      name: "Malena Bonacasa",
      imgURL: "",
      number: "10",
      position: "",
    },
    {
      name: "Sofía Tejerina",
      imgURL: "",
      number: "30",
      position: "",
    },
    {
      name: "Alejandra Gala",
      imgURL: "",
      number: "37",
      position: "",
    },
    {
      name: "Lucía Álvaro",
      imgURL: "",
      number: "44",
      position: "",
    },
    {
      name: "Rocío Moreno",
      imgURL: "",
      number: "46",
      position: "",
    },
    {
      name: "Daniela Alba",
      imgURL: "",
      number: "51",
      position: "",
    },
    {
      name: "Lidia Prieto",
      imgURL: "",
      number: "66",
      position: "",
    },
    {
      name: "Carlota Moreno",
      imgURL: "",
      number: "72",
      position: "",
    },
    {
      name: "Celia Sanz",
      imgURL: "",
      number: "79",
      position: "",
    },
    {
      name: "Ana Ventureira",
      imgURL: "",
      number: "85",
      position: "",
    },
    {
      name: "Rocío Martín",
      imgURL: "",
      number: "98",
      position: "",
    },
  ],
});

let CadeteA = new Team({
  general: {
    name: "Cadete A",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=cadete_a",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Alejandro Fernández",
      imgURL: "",
      status: "Primer entrenador",
    },
    {
      name: "Adrián Piris",
      imgURL: "",
      status: "Segundo entrenador",
    },
    {
      name: "Laura",
      imgURL: "",
      status: "Fisioterapeuta",
    },
  ],
  players: [
    {
      name: "Carolina Caro",
      imgURL: "",
      number: "4",
      position: "",
    },
    {
      name: "Patricia Garrido",
      imgURL: "",
      number: "13",
      position: "",
    },
    {
      name: "Daniela Catalán",
      imgURL: "",
      number: "15",
      position: "",
    },
    {
      name: "Lara Moreno",
      imgURL: "",
      number: "20",
      position: "",
    },
    {
      name: "Andrea García",
      imgURL: "",
      number: "25",
      position: "",
    },
    {
      name: "Anabella Vecino",
      imgURL: "",
      number: "30",
      position: "",
    },
    {
      name: "Naiara García",
      imgURL: "",
      number: "31",
      position: "",
    },
    {
      name: "Irene Elvira",
      imgURL: "",
      number: "33",
      position: "",
    },
    {
      name: "Sara del Amo",
      imgURL: "",
      number: "45",
      position: "",
    },
    {
      name: "Ana Rodríguez",
      imgURL: "",
      number: "51",
      position: "",
    },
    {
      name: "Clara Sola",
      imgURL: "",
      number: "58",
      position: "",
    },
    {
      name: "Alma Ricoy",
      imgURL: "",
      number: "71",
      position: "",
    },
    {
      name: "Berta Segura",
      imgURL: "",
      number: "72",
      position: "",
    },
    {
      name: "Celia Arce",
      imgURL: "",
      number: "83",
      position: "",
    },
    {
      name: "Andrea Mora",
      imgURL: "",
      number: "90",
      position: "",
    },
    {
      name: "Sofía Cerezo",
      imgURL: "",
      number: "91",
      position: "",
    },
    {
      name: "Lucía González",
      imgURL: "",
      number: "93",
      position: "",
    },
  ],
});

let CadeteB = new Team({
  general: {
    name: "Cadete B",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=cadete_b",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Valeria Tena",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Sergio de la Fuente",
      imgURL: "",
      status: "Segundo entrenador",
    },
    {
      name: "Miguel Morro",
      imgURL: "",
      status: "Fisioterapeuta",
    },
  ],
  players: [
    {
      name: "María Moradillo",
      imgURL: "",
      number: "2",
      position: "",
    },
    {
      name: "Carla Udias",
      imgURL: "",
      number: "3",
      position: "",
    },
    {
      name: "Cayetana Jurado",
      imgURL: "",
      number: "5",
      position: "",
    },
    {
      name: "Samara Cubillo",
      imgURL: "",
      number: "6",
      position: "",
    },
    {
      name: "Mercedes Borra",
      imgURL: "",
      number: "9",
      position: "",
    },
    {
      name: "Marta Garde",
      imgURL: "",
      number: "10",
      position: "",
    },
    {
      name: "Lola Caño",
      imgURL: "",
      number: "11",
      position: "",
    },
    {
      name: "Blanca Mérida",
      imgURL: "",
      number: "13",
      position: "",
    },
    {
      name: "Irene Martínez",
      imgURL: "",
      number: "13",
      position: "",
    },
    {
      name: "Candela Aracil",
      imgURL: "",
      number: "18",
      position: "",
    },
    {
      name: "Elsa Alba",
      imgURL: "",
      number: "37",
      position: "",
    },
    {
      name: "Sara Palonen",
      imgURL: "",
      number: "38",
      position: "",
    },
    {
      name: "Blanca Rodríguez",
      imgURL: "",
      number: "52",
      position: "",
    },
    {
      name: "Carla Palonen",
      imgURL: "",
      number: "53",
      position: "",
    },
    {
      name: "Adhara Jorge",
      imgURL: "",
      number: "56",
      position: "",
    },
    {
      name: "Nuria Mingote",
      imgURL: "",
      number: "65",
      position: "",
    },
    {
      name: "Elsa González",
      imgURL: "",
      number: "67",
      position: "",
    },
    {
      name: "María Pérez",
      imgURL: "",
      number: "70",
      position: "",
    },
    {
      name: "Dorotea del Piero",
      imgURL: "",
      number: "88",
      position: "",
    },
    {
      name: "Noelia Tamame",
      imgURL: "",
      number: "96",
      position: "",
    },
  ],
});

let CadeteC = new Team({
  general: {
    name: "Cadete C",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=cadete_c",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Irene Martínez",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Loïc",
      imgURL: "",
      status: "Segundo entrenador",
    },
  ],
  players: [
    {
      name: "Pilar Latorre",
      imgURL: "",
      number: "7",
      position: "",
    },
    {
      name: "Natalia Pascual",
      imgURL: "",
      number: "12",
      position: "",
    },
    {
      name: "Beatriz Valdueza",
      imgURL: "",
      number: "13",
      position: "",
    },
    {
      name: "Beatriz Aguila",
      imgURL: "",
      number: "16",
      position: "",
    },
    {
      name: "Carlota Pérez",
      imgURL: "",
      number: "17",
      position: "",
    },
    {
      name: "Catalina Alonso",
      imgURL: "",
      number: "19",
      position: "",
    },
    {
      name: "Laura Gasco",
      imgURL: "",
      number: "23",
      position: "",
    },
    {
      name: "Natalia Casillas",
      imgURL: "",
      number: "27",
      position: "",
    },
    {
      name: "Susana González",
      imgURL: "",
      number: "29",
      position: "",
    },
    {
      name: "Emma de la Arena",
      imgURL: "",
      number: "41",
      position: "",
    },
    {
      name: "Elisa Barrio",
      imgURL: "",
      number: "49",
      position: "",
    },
    {
      name: "Blanca Benito-Delgado",
      imgURL: "",
      number: "54",
      position: "",
    },
    {
      name: "Olaya Díez",
      imgURL: "",
      number: "57",
      position: "",
    },
    {
      name: "Emma Pérez",
      imgURL: "",
      number: "62",
      position: "",
    },
    {
      name: "Ana Bellosillo",
      imgURL: "",
      number: "64",
      position: "",
    },
    {
      name: "María Moreno",
      imgURL: "",
      number: "76",
      position: "",
    },
    {
      name: "Aurora Martínez",
      imgURL: "",
      number: "89",
      position: "",
    },
    {
      name: "Eva González",
      imgURL: "",
      number: "92",
      position: "",
    },
    {
      name: "Lola Sanjuan",
      imgURL: "",
      number: "94",
      position: "",
    },
    {
      name: "María Puerta",
      imgURL: "",
      number: "95",
      position: "",
    },
  ],
});

let JuvenilA = new Team({
  general: {
    name: "Juvenil A",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=juvenil_a",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Ana de la Chica",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Lucía Sánchez",
      imgURL: "",
      status: "Segunda entrenadora",
    },
    {
      name: "Irene Martínez",
      imgURL: "",
      status: "Preparadora física",
    },
    {
      name: "Natalia Rosique",
      imgURL: "",
      status: "Fisioterapeuta",
    },
    {
      name: "Tuco García",
      imgURL: "",
      status: "Entrenador de Porteras",
    },
  ],
  players: [
    {
      name: "Lucía de la Torre",
      imgURL: "",
      number: "13",
      position: "",
    },
    {
      name: "Clara Fajardo",
      imgURL: "",
      number: "24",
      position: "",
    },
    {
      name: "Lucía Martín",
      imgURL: "",
      number: "25",
      position: "",
    },
    {
      name: "Lucía Nuñez",
      imgURL: "",
      number: "26",
      position: "",
    },
    {
      name: "Paola González",
      imgURL: "",
      number: "32",
      position: "",
    },
    {
      name: "Lara Samaniego",
      imgURL: "",
      number: "39",
      position: "",
    },
    {
      name: "Adriana Ibáñez",
      imgURL: "",
      number: "40",
      position: "",
    },
    {
      name: "Beatriz Asenjo",
      imgURL: "",
      number: "42",
      position: "",
    },
    {
      name: "Irene Fernández",
      imgURL: "",
      number: "48",
      position: "",
    },
    {
      name: "Cristina Tejada",
      imgURL: "",
      number: "54",
      position: "",
    },
    {
      name: "Teresa Brandau",
      imgURL: "",
      number: "74",
      position: "",
    },
    {
      name: "Sofía Menéndez",
      imgURL: "",
      number: "75",
      position: "",
    },
    {
      name: "Gabriela Iglesia",
      imgURL: "",
      number: "76",
      position: "",
    },
    {
      name: "Julia Cortés",
      imgURL: "",
      number: "79",
      position: "",
    },
    {
      name: "Marina Valmorisco",
      imgURL: "",
      number: "84",
      position: "",
    },
    {
      name: "Victoria Pérez",
      imgURL: "",
      number: "86",
      position: "",
    },
    {
      name: "Gadea Torres",
      imgURL: "",
      number: "87",
      position: "",
    },
    {
      name: "Aroa González",
      imgURL: "",
      number: "98",
      position: "",
    },
    {
      name: "Carmen Sánchez",
      imgURL: "",
      number: "1",
      position: "",
    },
  ],
});

let JuvenilB = new Team({
  general: {
    name: "Juvenil B",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=juvenil_b",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Adrián Piris",
      imgURL: "",
      status: "Primer entrenador",
    },
    {
      name: "Sebas Rodríguez",
      imgURL: "",
      status: "Segundo entrenador",
    },
    {
      name: "Sandra Martín",
      imgURL: "",
      status: "Fisioterapeuta",
    },
    {
      name: "Tuco García",
      imgURL: "",
      status: "Entrenador de Porteras",
    },
    {
      name: "Blanca Pedauyé",
      imgURL: "",
      status: "Nutricionista",
    },
    {
      name: "María José Massuh",
      imgURL: "",
      status: "Nutricionista",
    },
    {
      name: "Belén de Gracia",
      imgURL: "",
      status: "Nutricionista",
    },
    {
      name: "Nacho García",
      imgURL: "",
      status: "Psicólogo",
    },
  ],
  players: [
    {
      name: "Paula Rodríguez",
      imgURL: "",
      number: "1",
      position: "",
    },
    {
      name: "Paula Santibañez",
      imgURL: "",
      number: "14",
      position: "",
    },
    {
      name: "Magali Rava",
      imgURL: "",
      number: "22",
      position: "",
    },
    {
      name: "Mara Castaño",
      imgURL: "",
      number: "23",
      position: "",
    },
    {
      name: "Sofía Castaño",
      imgURL: "",
      number: "25",
      position: "",
    },
    {
      name: "Alejandra Gil",
      imgURL: "",
      number: "34",
      position: "",
    },
    {
      name: "Teresa Parra",
      imgURL: "",
      number: "36",
      position: "",
    },
    {
      name: "Alejandra Carabantes",
      imgURL: "",
      number: "38",
      position: "",
    },
    {
      name: "Oiane García",
      imgURL: "",
      number: "44",
      position: "",
    },
    {
      name: "Claudia Escamilla",
      imgURL: "",
      number: "46",
      position: "",
    },
    {
      name: "Daniela Caycho",
      imgURL: "",
      number: "53",
      position: "",
    },
    {
      name: "Sara García",
      imgURL: "",
      number: "55",
      position: "",
    },
    {
      name: "Sofía Figuero",
      imgURL: "",
      number: "60",
      position: "",
    },
    {
      name: "Daniela Granito",
      imgURL: "",
      number: "68",
      position: "",
    },
    {
      name: "Victoria Claveria",
      imgURL: "",
      number: "73",
      position: "",
    },
    {
      name: "Sara Lázaro",
      imgURL: "",
      number: "77",
      position: "",
    },
    {
      name: "Leyre Zamora",
      imgURL: "",
      number: "78",
      position: "",
    },
    {
      name: "Carmen Sánchez",
      imgURL: "",
      number: "80",
      position: "",
    },
  ],
});

let SeniorA = new Team({
  general: {
    name: "Senior A",
    imgURL: "/public/img/equipos/senior_a/cover.jpg",
    pageURL: "/pages/equipo_olympia.html?equipo=senior_a",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  sponsors: [
    {
      //Ruesma
      imgURL: "/public/sponsors/logo_ruesma--color.png",
      bgColor: "#fff",
      pageURL: "https://www.ruesma.com/",
    },
  ],
  staff: [
    {
      name: "Lydia Vizcaíno",
      imgURL: "/public/img/equipos/senior_a/lydia_vizcaino.png",
      status: "Primera entrenadora",
    },
    {
      name: "Jaime Fernández",
      imgURL: "/public/img/equipos/senior_a/jaime_fernandez.png",
      status: "Segundo entrenador",
    },
    // {
    //   name: "Guillermo Fernández",
    //   imgURL: "/public/img/equipos/senior_a/guillermo_fernandez.png",
    //   status: "Segundo entrenador",
    // },
    {
      name: "Tuco García",
      imgURL: "/public/img/equipos/senior_a/tuco_garcia.png",
      status: "Entrenador de Porteras",
    },
    {
      name: "Elena Martínez",
      imgURL: "/public/img/equipos/senior_a/elena_martinez.png",
      status: "Preparadora Física",
    },
    {
      name: "Rodrigo Collado",
      imgURL: "/public/img/equipos/senior_a/rodrigo_collado.png",
      status: "Fisioterapeuta",
    },
    {
      name: "Tano Hernández",
      imgURL: "/public/img/equipos/senior_a/tano_hernandez.png",
      status: "Fisioterapeuta",
    },
    {
      name: "Sergio de la Fuente",
      imgURL: "/public/img/equipos/senior_a/sergio_de_la_fuente.png",
      status: "Ayudante Técnico",
    },
    {
      name: "Jorge Ballesteros",
      imgURL: "/public/img/equipos/senior_a/jorge_ballesteros.png",
      status: "Ayudante Técnico",
    },
    {
      name: "Pablo Prieto",
      imgURL: "/public/img/equipos/senior_a/pablo_prieto.png",
      status: "Analista",
    },
    {
      name: "Blanca Pedauyé",
      imgURL: "/public/img/equipos/senior_a/blanca_pedauye.png",
      status: "Nutricionista",
    },
    // {
    //   name: "María José Massuh",
    //   imgURL: "/public/img/equipos/senior_a/maria_jose_massuh.png",
    //   status: "Nutricionista",
    // },
    // {
    //   name: "Belén de Gracia",
    //   imgURL: "/public/img/equipos/senior_a/belen_de_gracia.png",
    //   status: "Nutricionista",
    // },
    {
      name: "Nacho García",
      imgURL: "/public/img/equipos/senior_a/nacho_garcia.png",
      status: "Psicólogo",
    },
  ],
  players: [
    {
      name: "Ea Tovar",
      imgURL: "/public/img/equipos/senior_a/ea_tovar.png",
      number: "1",
      position: "Portera",
    },
    {
      name: "Cristina Contreras",
      imgURL: "/public/img/equipos/senior_a/cristina_contreras.png",
      number: "2",
      position: "Def Lateral",
    },
    {
      name: "Noemí Andrés",
      imgURL: "/public/img/equipos/senior_a/noemi_andres.png",
      number: "3",
      position: "Def Central",
    },
    {
      name: "Belén Lafuente",
      imgURL: "/public/img/equipos/senior_a/belen_lafuente.png",
      number: "5",
      position: "Def Central",
    },
    {
      name: "Gema Prieto",
      imgURL: "/public/img/equipos/senior_a/gema_prieto.png",
      number: "6",
      position: "Extremo",
    },
    {
      name: "Paula Andujar",
      imgURL: "/public/img/equipos/senior_a/paula_andujar.png",
      number: "7",
      position: "Def Central",
    },
    {
      name: "Marta Moreno",
      imgURL: "/public/img/equipos/senior_a/marta_moreno.png",
      number: "8",
      position: "Mediocentro",
    },
    {
      name: "Rocío Zafra",
      imgURL: "/public/img/equipos/senior_a/rocio_zafra.png",
      number: "9",
      position: "Delantera",
    },
    {
      name: "Valeria Tena",
      imgURL: "/public/img/equipos/senior_a/valeria_tena.png",
      number: "10",
      position: "Mediocentro",
    },
    {
      name: "Andrea García",
      imgURL: "/public/img/equipos/senior_a/andrea_garcia.png",
      number: "11",
      position: "Mediocentro",
    },
    {
      name: "Gabi de la Villa",
      imgURL: "/public/img/equipos/senior_a/gabi_de_la_villa.png",
      number: "12",
      position: "Def Lateral",
    },
    {
      name: "Lucía Contreras",
      imgURL: "/public/img/equipos/senior_a/lucia_contreras.png",
      number: "13",
      position: "Portera",
    },
    {
      name: "Arantxa de la Chica",
      imgURL: "/public/img/equipos/senior_a/arantxa_de_la_chica.png",
      number: "14",
      position: "Delantera",
    },
    {
      name: "Aitana Sánchez",
      imgURL: "/public/img/equipos/senior_a/aitana_sanchez.png",
      number: "16",
      position: "Mediocentro",
    },
    {
      name: "Sara Sánchez",
      imgURL: "/public/img/equipos/senior_a/sara_sanchez.png",
      number: "17",
      position: "Extremo",
    },
    {
      name: "Andrea Totana",
      imgURL: "/public/img/equipos/senior_a/andrea_totana.png",
      number: "18",
      position: "Def Lateral",
    },
    {
      name: "Yoli Albalat",
      imgURL: "/public/img/equipos/senior_a/yoli_albalat.png",
      number: "20",
      position: "Mediocentro",
    },
    {
      name: "Alba Masa",
      imgURL: "/public/img/equipos/senior_a/alba_masa.png",
      number: "22",
      position: "Def Central",
    },
    {
      name: "María Herrero",
      imgURL: "/public/img/equipos/senior_a/maria_herrero.png",
      number: "23",
      position: "Mediocentro",
    },
    {
      name: "Lucía Sánchez",
      imgURL: "/public/img/equipos/senior_a/lucia_sanchez.png",
      number: "24",
      position: "Extremo",
    },
    {
      name: "Cris Menéndez",
      imgURL: "/public/img/equipos/senior_a/cris_menendez.png",
      number: "26",
      position: "Mediocentro",
    },
    {
      name: "Patri Camacho",
      imgURL: "/public/img/equipos/senior_a/patri_camacho.png",
      number: "27",
      position: "Extremo",
    },
    {
      name: "Elisa Puerta",
      imgURL: "/public/img/equipos/senior_a/elisa_puerta.png",
      number: "28",
      position: "Def Lateral",
    },
    {
      name: "Manuela Alfayate",
      imgURL: "/public/img/equipos/senior_a/manuela_alfayate.png",
      number: "30",
      position: "Def Central",
    },
    {
      name: "Lucía Fernández",
      imgURL: "/public/img/equipos/senior_a/lucia_fernandez.png",
      number: "77",
      position: "Mediocentro",
    },
  ],
});

let SeniorB = new Team({
  general: {
    name: "Senior B",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=senior_b",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Ana de la Chica",
      imgURL: "",
      status: "Primera entrenadora",
    },
    // {
    //   name: "David Martínez",
    //   imgURL: "",
    //   status: "Segundo entrenador",
    // },
    {
      name: "Arantxa de la Chica",
      imgURL: "",
      status: "Asistente",
    },
    {
      name: "Emanuel Inga",
      imgURL: "",
      status: "Entrenador de porteras",
    },
    {
      name: "Alejandro Fernánez",
      imgURL: "",
      status: "Preparador Físico",
    },
    {
      name: "Sofía Pérez",
      imgURL: "",
      status: "Fisioterapeuta",
    },
    {
      name: "Sandra Ortiz",
      imgURL: "",
      status: "Fisioterapeuta",
    },
    // {
    //   name: "David Martínez",
    //   imgURL: "",
    //   status: "Analista",
    // },
    {
      name: "Blanca Pedauyé",
      imgURL: "",
      status: "Nutricionista",
    },
    {
      name: "María José Massuh",
      imgURL: "",
      status: "Nutricionista",
    },
    {
      name: "Belén de Gracia",
      imgURL: "",
      status: "Nutricionista",
    },
    {
      name: "Nacho García",
      imgURL: "",
      status: "Psicólogo",
    },
  ],
  players: [
    {
      name: "Lucía Fresno",
      imgURL: "",
      number: "1",
      position: "",
    },
    {
      name: "Andrea Ovejero",
      imgURL: "",
      number: "2",
      position: "",
    },
    {
      name: "Lucía Adán",
      imgURL: "",
      number: "3",
      position: "",
    },
    {
      name: "Nuria Díaz",
      imgURL: "",
      number: "4",
      position: "",
    },
    {
      name: "Sarah Yague",
      imgURL: "",
      number: "5",
      position: "",
    },
    {
      name: "Daniela Sanchís",
      imgURL: "",
      number: "7",
      position: "",
    },
    {
      name: "Valentina Ruiz",
      imgURL: "",
      number: "8",
      position: "",
    },
    {
      name: "Claudia Hernándo",
      imgURL: "",
      number: "9",
      position: "",
    },
    {
      name: "Raquel Guardado",
      imgURL: "10",
      number: "",
      position: "",
    },
    {
      name: "Marta Buendía",
      imgURL: "",
      number: "18",
      position: "",
    },
    {
      name: "Iciar Cofrades",
      imgURL: "",
      number: "20",
      position: "",
    },
    {
      name: "Iratxe Rodríguez",
      imgURL: "",
      number: "22",
      position: "",
    },
    {
      name: "María Herrero",
      imgURL: "",
      number: "23",
      position: "",
    },
    //SENIOR A O SENIOR B
    {
      name: "Lucía Sánchez",
      imgURL: "",
      number: "24",
      position: "",
    },
    {
      name: "Cristina Menéndez",
      imgURL: "",
      number: "26",
      position: "",
    },
    {
      name: "Patricia Camacho",
      imgURL: "",
      number: "27",
      position: "",
    },
    {
      name: "Elisa Puerta",
      imgURL: "",
      number: "28",
      position: "",
    },
    {
      name: "Manuela Alfayate",
      imgURL: "",
      number: "30",
      position: "",
    },
    {
      name: "Paula Jiménez",
      imgURL: "",
      number: "34",
      position: "",
    },
    {
      name: "Elisa García",
      imgURL: "",
      number: "43",
      position: "",
    },
    {
      name: "Mireya Nieto",
      imgURL: "",
      number: "47",
      position: "",
    },
    {
      name: "Lucía Fernández",
      imgURL: "",
      number: "77",
      position: "",
    },
  ],
});

let SeniorC = new Team({
  general: {
    name: "Senior C",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=senior_c",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Guillermo Fernández",
      imgURL: "",
      status: "Primer entrenador",
    },
    {
      name: "Álvaro García",
      imgURL: "",
      status: "Segundo entrenador",
    },
    {
      name: "Verónica Hernández",
      imgURL: "",
      status: "Segunda entrenadora",
    },
    {
      name: "Tuco García",
      imgURL: "",
      status: "Entrenador de Porteras",
    },
    {
      name: "Blanca Pedauyé",
      imgURL: "",
      status: "Nutricionista",
    },
    {
      name: "María José Massuh",
      imgURL: "",
      status: "Nutricionista",
    },
    {
      name: "Belén de Gracia",
      imgURL: "",
      status: "Nutricionista",
    },
    {
      name: "Nacho García",
      imgURL: "",
      status: "Psicólogo",
    },
  ],
  players: [
    {
      name: "Ana Losada",
      imgURL: "",
      number: "6",
      position: "",
    },
    {
      name: "Blanca Ruiz",
      imgURL: "",
      number: "11",
      position: "",
    },
    {
      name: "Alicia Mota",
      imgURL: "",
      number: "15",
      position: "",
    },
    {
      name: "Marta García",
      imgURL: "",
      number: "24",
      position: "",
    },
    {
      name: "Carlota Rascón",
      imgURL: "",
      number: "33",
      position: "",
    },
    {
      name: "Lucía Abelaria",
      imgURL: "",
      number: "35",
      position: "",
    },
    {
      name: "Cayetana Medina",
      imgURL: "",
      number: "36",
      position: "",
    },
    {
      name: "Mónica Navas",
      imgURL: "",
      number: "38",
      position: "",
    },
    {
      name: "Sara García",
      imgURL: "",
      number: "58",
      position: "",
    },
    {
      name: "Lucía Ruiz",
      imgURL: "",
      number: "59",
      position: "",
    },
    {
      name: "Inés del Olmo",
      imgURL: "",
      number: "61",
      position: "",
    },
    {
      name: "Selma Florentini",
      imgURL: "",
      number: "62",
      position: "",
    },
    {
      name: "Lucía Rodríguez",
      imgURL: "",
      number: "66",
      position: "",
    },
    {
      name: "Iria Cons",
      imgURL: "",
      number: "74",
      position: "",
    },
    {
      name: "Cristina Sánchez",
      imgURL: "",
      number: "75",
      position: "",
    },
    {
      name: "Inés Fuentes",
      imgURL: "",
      number: "83",
      position: "",
    },
    {
      name: "Daniela de Miguel",
      imgURL: "",
      number: "91",
      position: "",
    },
    {
      name: "Manuela López",
      imgURL: "",
      number: "92",
      position: "",
    },
    {
      name: "Paula Prieto",
      imgURL: "",
      number: "93",
      position: "",
    },
    {
      name: "Irene Barajas",
      imgURL: "",
      number: "95",
      position: "",
    },
  ],
});

let Veteranas = new Team({
  general: {
    name: "Veteranas",
    imgURL: "",
    pageURL: "/pages/equipo_olympia.html?equipo=veteranas",
    //calendarURL: "", //Fot the full match calendar in matchapp or other app/web
    //matches: //Will have to find a way of fetching the data from matches into each team in order to have an automated calendar or so
  },
  staff: [
    {
      name: "Arantxa de la Chica",
      imgURL: "",
      status: "Primera entrenadora",
    },
    {
      name: "Sebas Rodríguez",
      imgURL: "",
      status: "Segundo entrenador",
    },
  ],
  players: [
    {
      name: "Luz Lorena Zubillaga",
      imgURL: "",
      number: "1",
      position: "",
    },
    {
      name: "Violeta Saavedra",
      imgURL: "",
      number: "4",
      position: "",
    },
    {
      name: "Conchita Manzano",
      imgURL: "",
      number: "9",
      position: "",
    },
    {
      name: "Carmen Navarro",
      imgURL: "",
      number: "10",
      position: "",
    },
    {
      name: "Vanesa Díaz",
      imgURL: "",
      number: "11",
      position: "",
    },
    {
      name: "Cristina Sanz-Aranguez",
      imgURL: "",
      number: "12",
      position: "",
    },
    {
      name: "Carmen Casares",
      imgURL: "",
      number: "13",
      position: "",
    },
    {
      name: "Pilar Martín",
      imgURL: "",
      number: "14",
      position: "",
    },
    {
      name: "Beatriz Cruz",
      imgURL: "",
      number: "15",
      position: "",
    },
    {
      name: "Beatriz Sobrino",
      imgURL: "",
      number: "17",
      position: "",
    },
    {
      name: "Norma Cordero",
      imgURL: "",
      number: "19",
      position: "",
    },
    {
      name: "Milagros Fenoy",
      imgURL: "",
      number: "20",
      position: "",
    },
    {
      name: "María del Mar Liñán",
      imgURL: "",
      number: "23",
      position: "",
    },
    {
      name: "Tania Vasquez",
      imgURL: "",
      number: "24",
      position: "",
    },
    {
      name: "Ana Esteban",
      imgURL: "",
      number: "31",
      position: "",
    },
    {
      name: "Katerine Ocaciones",
      imgURL: "",
      number: "33",
      position: "",
    },
    {
      name: "Isabel García",
      imgURL: "",
      number: "99",
      position: "",
    },
    {
      name: "Cristina del Collado",
      imgURL: "",
      number: "",
      position: "",
    },
    {
      name: "Nerea Pérez",
      imgURL: "",
      number: "",
      position: "",
    },
  ],
});

//EXPORTATION
CLUB.push(
  SeniorA,
  SeniorB,
  SeniorC,
  BenjaminA,
  BenjaminB,
  BenjaminC,
  AlevinA,
  AlevinB,
  AlevinC,
  InfantilF11,
  InfantilA,
  InfantilB,
  InfantilC,
  InfantilD,
  CadeteA,
  CadeteB,
  CadeteC,
  JuvenilA,
  JuvenilB,
  Veteranas
);

export { CLUB, SeniorA };
