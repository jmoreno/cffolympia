let RFFM_EPISODES = [];

class Episode {
  constructor({
    name = "LUNES NOCHE FÚTBOL DE MADRID",
    imgURL = "public/img/video_covers/rffmplay.jpg",
    episodeURL,
  }) {
    this.name = name;
    this.imgURL = imgURL;
    this.episodeURL = episodeURL;
  }
}

//Video de prueba, cuando llegue el primer episodio del año que viene, se quitan todos

let ep1 = new Episode({
  name: "01/ Pepito Pérez y Joselito Jiménez",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://youtu.be/Pjo7oMxt0z0?t=4244",
});
let ep2 = new Episode({
  name: "02/ Pepito Pérez y Joselito Jiménez",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://youtu.be/Pjo7oMxt0z0?t=4244",
});
let ep3 = new Episode({
  name: "03/ Pepito Pérez y Joselito Jiménez",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://youtu.be/Pjo7oMxt0z0?t=4244",
});
let ep4 = new Episode({
  name: "04/ Pepito Pérez y Joselito Jiménez",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://youtu.be/Pjo7oMxt0z0?t=4244",
});
let ep5 = new Episode({
  name: "05/ Pepito Pérez y Joselito Jiménez",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://youtu.be/Pjo7oMxt0z0?t=4244",
});
let ep6 = new Episode({
  name: "06/ Pepito Pérez y Joselito Jiménez",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://youtu.be/Pjo7oMxt0z0?t=4244",
});
let ep7 = new Episode({
  name: "07/ Pepito Pérez y Joselito Jiménez",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://youtu.be/Pjo7oMxt0z0?t=4244",
});

//Solo se ponen los de cada año, una vez se termine la tempo, se espera al perimero de la siguiente y se eliminan el resto.
RFFM_EPISODES.push(ep7, ep6, ep5, ep4, ep3, ep2, ep1);

export default RFFM_EPISODES;
