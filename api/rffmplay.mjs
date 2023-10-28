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

let ep1 = new Episode({
  name: "01/ Patri Camacho",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/UP4AYgZxisA?si=jTCh9h3Wjx2g2w9B&t=4418",
});

let ep2 = new Episode({
  name: "02/ Iratxe Rodríguez",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/FU3VHhOyoD8?si=Tx5OdiILTR3eLCpZ&t=4750",
});

let ep3 = new Episode({
  name: "03/ Valentina Ruiz",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/AfpH7J4ZE9A?si=ZGd05JxDUtLWbyab&t=5647",
});

let ep4 = new Episode({
  name: "04/ Lucía Fernández",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/hsfeHaAmFyw?si=qtnpRxr4UT3Qavr0&t=5579",
});

//Solo se ponen los de cada año, una vez se termine la tempo, se espera al primero de la siguiente y se eliminan el resto.
RFFM_EPISODES.push(ep4, ep3, ep2, ep1);

export default RFFM_EPISODES;

// let ep1 = new Episode({
//   name: "01/ Noelia Llamas y Nuria Díaz",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://youtu.be/Pjo7oMxt0z0?t=4244",
// });
// let ep2 = new Episode({
//   name: "02/ Cris Menéndez e Irene González",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://youtu.be/8cKPmhVXRfw?t=4880",
// });
// let ep3 = new Episode({
//   name: "03/ Alba Masa",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/TQEcYiiyh7c?feature=share&t=5249",
// });
// let ep4 = new Episode({
//   name: "04/ Arantxa y Raquel Guardado",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/_IOZnSWAAZM?feature=share&t=5415",
// });
// let ep5 = new Episode({
//   name: "05/ Rosa Torres e Iratxe Rodríguez",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/fWi-vovvN7c?feature=share&t=4562",
// });
// let ep6 = new Episode({
//   name: "06/ Manuela Alfayate",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/S7mw2GlnGu8?feature=share&t=5516",
// });
// let ep7 = new Episode({
//   name: "07/ Gabriela de la Villa",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/70MoHl7iGFs?feature=share&t=5827",
// });
// let ep8 = new Episode({
//   name: "08/ Claudia Domínguez",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://youtu.be/NIC4C8th3SE?t=4430",
// });
// let ep9 = new Episode({
//   name: "09/ Sara Yagüe",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https:/https://www.youtube.com/live/mNlmfJrzERs?feature=share&t=6017",
// });
// let ep10 = new Episode({
//   name: "10/ Lucía Fernández",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/To3hy6NKU5g?feature=share&t=5162",
// });
// let ep11 = new Episode({
//   name: "11/ Noemí Andrés y Daniela Sanchís",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/GaWPCAhUCVs?feature=share&t=4838",
// });
// let ep12 = new Episode({
//   name: "12/ Patri Camacho y Andrea Ovejero",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/ItEcAS0saOw?feature=share&t=5194",
// });
// let ep13 = new Episode({
//   name: "13/ Andrea García e Iria Moya",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/sdbdQ2Wg2CA?feature=share&t=5252",
// });
// let ep14 = new Episode({
//   name: "14/ Elena Anós",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/TR6B5jRHeEs?feature=share&t=6345",
// });
// let ep15 = new Episode({
//   name: "15/ Ana de la Chica y Lucía Fresno",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/1KhlzNgqsWg?feature=share&t=1170",
// });
// let ep16 = new Episode({
//   name: "16/ Iciar y Estrella",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/qW4za_yhgOA?feature=share&t=5914",
// });
// let ep17 = new Episode({
//   name: "17/ Emanuel, Pedro y Sofía",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/Lp51bkBQzys?feature=share&t=4846",
// });
