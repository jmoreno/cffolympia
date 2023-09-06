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
  imageURL: "/public/img/mahou/patri_camacho.jpg",
});
let jm2 = new JugadoraMahou({
  name: "Noemí Andrés",
  month: "DICIEMBRE",
  imageURL: "/public/img/mahou/noemi_andres.jpg",
});
let jm3 = new JugadoraMahou({
  name: "Cris Menéndez",
  month: "ENERO",
  imageURL: "/public/img/mahou/cris_menendez.jpg",
});
let jm4 = new JugadoraMahou({
  name: "Rosa Torres",
  month: "FEBRERO",
  imageURL: "/public/img/mahou/rosa_torres.jpg",
});
let jm5 = new JugadoraMahou({
  name: "Arantxa de la Chica",
  month: "MARZO",
  imageURL: "/public/img/mahou/arantxa_delachica.jpg",
});
let jm6 = new JugadoraMahou({
  name: "Alba Masa",
  month: "ABRIL",
  imageURL: "/public/img/mahou/alba_masa.jpg",
});

JUGADORAS_MAHOU.push(jm6, jm5, jm4, jm3, jm2, jm1);

export default JUGADORAS_MAHOU;
