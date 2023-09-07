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

//Máximo 15-20 video para no petar la web, iremos quitando superando el umbral de los 15 yo creo
VIDEOS.push(v1);

export default VIDEOS;
