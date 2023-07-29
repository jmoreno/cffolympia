let JUGADORAS_MAHOU = [];
class JugadoraMahou {
  constructor({ name, month, imageURL = {} }) {
    this.name = name;
    this.month = month;
    this.imageURL = imageURL;
  }
}

let jm1 = new JugadoraMahou({
  name: "Arantxa de la Chica",
  month: "SEPTIEMBRE",
  imageURL: "/public/img/noticias/noticia_25.JPG",
});

let jm2 = new JugadoraMahou({
  name: "",
  month: "ENERO",
  imageURL: "/public/img/noticias/noticia_25.JPG",
});

let jm3 = new JugadoraMahou({
  name: "",
  month: "FEBRERO",
  imageURL: "/public/img/noticias/noticia_25.JPG",
});

JUGADORAS_MAHOU.push(jm3, jm2, jm1);

export default JUGADORAS_MAHOU;
