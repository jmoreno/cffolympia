//[ ]

//The idea is that i fetch the data from an api and add it here without intervention

///////////////////////////////////////////////////////////
//SENIOR A AUTOMATION
import SEASON_SENIOR_A from "/api/senior_season.mjs";
const now = new Date();
let nextMatch;
let nextMatchArrIndex;
let dateFound = false;

for (let i = 0; i < SEASON_SENIOR_A.length; i++) {
  const matchDay = new Date(SEASON_SENIOR_A[i].date);
  if (matchDay.getTime() + 7200000 > now.getTime() && !dateFound) {
    nextMatch = matchDay;
    dateFound = true;
    nextMatchArrIndex = i;
  } else if (!dateFound && i + 1 == SEASON_SENIOR_A.length) {
    nextMatch = new Date(SEASON_SENIOR_A[i].date);
  }
}

let SenAImgURl = SEASON_SENIOR_A[nextMatchArrIndex].imgURL;
let SenAMapsURl = SEASON_SENIOR_A[nextMatchArrIndex].mapsURL;
let SenALiveURl = SEASON_SENIOR_A[nextMatchArrIndex].liveURL;
let SenAHashtag = SEASON_SENIOR_A[nextMatchArrIndex].hashtag;
let SenAIsLocal = SEASON_SENIOR_A[nextMatchArrIndex].isLocal;
///////////////////////////////////////////////////////////

let MATCHDATA = {
  senior_a: {
    imgURL: SenAImgURl,
    date: nextMatch,
    mapsURL: SenAMapsURl,
    liveURL: SenALiveURl,
    hashtag: SenAHashtag,
    isLocal: SenAIsLocal,
  },
  senior_b: {
    imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  senior_c: {
    imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  juvenil_a: {
    imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  juvenil_b: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  cadete_a: {
    imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  cadete_b: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  cadete_c: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  infantil_f11: {
    imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  infantil_a: {
    imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  infantil_b: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  infantil_c: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  infantil_d: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  alevin_a: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  alevin_b: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  alevin_c: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  benjamin_a: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  benjamin_b: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  benjamin_fs: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
  veteranas: {
    //imgURL: "/public/img/escudos/atleti.png",
    date: "Jun 24, 2023 14:00:00",
  },
};

export default MATCHDATA;
