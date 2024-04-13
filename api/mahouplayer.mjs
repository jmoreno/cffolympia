let JUGADORAS_MAHOU = [];
class JugadoraMahou {
  constructor({ name, month, imageURL = {} }) {
    this.name = name;
    this.month = month;
    this.imageURL = imageURL;
  }
}

let jm1 = new JugadoraMahou({
  name: "Patri Camacho",
  month: "NOVIEMBRE",
  imageURL: "/public/img/mahou/patri_camacho_22-23.jpg",
});
let jm2 = new JugadoraMahou({
  name: "Noemí Andrés",
  month: "DICIEMBRE",
  imageURL: "/public/img/mahou/noemi_andres_22-23.jpg",
});
let jm3 = new JugadoraMahou({
  name: "Cris Menéndez",
  month: "ENERO",
  imageURL: "/public/img/mahou/cris_menendez_22-23.jpg",
});
let jm4 = new JugadoraMahou({
  name: "Rosa Torres",
  month: "FEBRERO",
  imageURL: "/public/img/mahou/rosa_torres_22-23.jpg",
});
let jm5 = new JugadoraMahou({
  name: "Arantxa de la Chica",
  month: "MARZO",
  imageURL: "/public/img/mahou/arantxa_delachica_22-23.jpg",
});
let jm6 = new JugadoraMahou({
  name: "Alba Masa",
  month: "ABRIL",
  imageURL: "/public/img/mahou/alba_masa_22-23.jpg",
});
let jm7 = new JugadoraMahou({
  name: "Patri Camacho",
  month: "SEPTIEMBRE",
  imageURL: "/public/img/mahou/patri_camacho_23-24.jpg",
});
let jm8 = new JugadoraMahou({
  name: "Gabi de la Villa",
  month: "OCTUBRE",
  imageURL: "/public/img/mahou/gabi_de_la_villa_23-24.jpg",
});
let jm9 = new JugadoraMahou({
  name: "Andrea Totana",
  month: "NOVIEMBRE",
  imageURL: "/public/img/mahou/noviembre23.jpg",
});
let jm10 = new JugadoraMahou({
  name: "Marta Moreno",
  month: "DICIEMBRE",
  imageURL: "/public/img/mahou/diciembre23.jpg",
});
let jm11 = new JugadoraMahou({
  name: "Rocío Zafra",
  month: "ENERO",
  imageURL: "/public/img/mahou/enero24.jpg",
});
let jm12 = new JugadoraMahou({
  name: "Ea Tovar",
  month: "FEBRERO",
  imageURL: "/public/img/mahou/febrero24.jpg",
});
let jm13 = new JugadoraMahou({
  name: "Gema Prieto",
  month: "MARZO",
  imageURL: "/public/img/mahou/marzo24.jpg",
});

JUGADORAS_MAHOU.push(jm13, jm12, jm11, jm10, jm9, jm8, jm7, jm6, jm5, jm4, jm3, jm2, jm1);

export default JUGADORAS_MAHOU;
