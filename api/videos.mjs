let VIDEOS = [];

class Video {
  constructor({ name = "", imgURL = "", videoURL = "" }) {
    this.name = name;
    this.imgURL = imgURL;
    this.videoURL = videoURL;
  }
}

let v1 = new Video({
  name: "Estrellas por la Igualdad",
  imgURL: "public/img/video_covers/estrellas22.jpg",
  videoURL: "https://youtu.be/2qdIcb7fZzA",
});

let v2 = new Video({
  name: "CFF Olympia vs CD Oceja",
  imgURL: "public/img/video_covers/olympia-oceja.jpg",
  videoURL: "https://www.youtube.com/watch?v=CEu7xRyJ3pM",
});

let v3 = new Video({
  name: "CFF Olympia vs CD Castellón",
  imgURL: "public/img/video_covers/olympia-castellon.jpg",
  videoURL: "https://www.youtube.com/watch?v=vOY_4-xlits",
});

let v4 = new Video({
  name: "Día del entrenador 22-23",
  imgURL: "public/img/video_covers/jornadaentrenador.jpg",
  videoURL: "https://www.youtube.com/live/MGvU6Cxu--8?si=pPpPg3mKOBmYNKVW&t=7988",
});

let v5 = new Video({
  name: "¡Abriendo camino, cumpliendo sueños!",
  imgURL: "public/img/video_covers/telediario.jpg",
  videoURL: "https://x.com/cff_olympia/status/1732156436514226562?s=46&t=FN9ri0Tbnwc3FJpmnM1Wpw",
});

//Máximo 15-20 video para no petar la web, iremos quitando superando el umbral de los 15 yo creo
VIDEOS.push(v5, v4, v3, v2, v1);

export default VIDEOS;
