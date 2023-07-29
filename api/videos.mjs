let VIDEOS = [];

class Video {
  constructor({ name = "", imgURL = "", videoURL = "" }) {
    this.name = name;
    this.imgURL = imgURL;
    this.videoURL = videoURL;
  }
}

//Videos de prueba, cuando se lance solo se queda el de estrellas por la igualdad
let v1 = new Video({
  name: "CFF Olympia vs Atlético de Madrid",
  imgURL: "public/img/video_covers/2022-10-29_jornada7.jpg",
  videoURL: "https://www.youtube.com/live/SC1AF72c08c?feature=share",
});

let v2 = new Video({
  name: "CFF Olympia vs CD Sport Extremadura",
  imgURL: "public/img/video_covers/2022-11-13_jornada9.jpg",
  videoURL: "https://www.youtube.com/live/U_SMVr4z0AI?feature=share&t=1",
});

let v3 = new Video({
  name: "CFF Olympia vs Extremadura CF",
  imgURL: "public/img/video_covers/2022-11-27_jornada11.jpg",
  videoURL: "https://www.youtube.com/live/z_3BWFfLNIM?feature=share",
});

let v4 = new Video({
  name: "CFF Olympia vs CD Atlético Lince",
  imgURL: "public/img/video_covers/2022-12-18_jornada13.jpg",
  videoURL: "https://www.youtube.com/live/IPKRuKvGV68?feature=share",
});

let v5 = new Video({
  name: "Estrellas por la Igualdad",
  imgURL: "public/img/video_covers/estrellas22.jpg",
  videoURL: "https://youtu.be/2qdIcb7fZzA",
});

//Máximo 15-20 video para no petar la web, iremos quitando superando el umbral de los 15 yo creo
VIDEOS.push(v5, v4, v3, v2, v1);

export default VIDEOS;
