import SEASON_SENIOR_A from "/api/senior_season.mjs";

const seniorAMatches = document.createElement("template");

//////////////////////////////////////////////////////////
//FINDING THE INDEX OF THE ACTUAL MATCH
const now = new Date();
let nextMatch = "";
var nextMatchArrIndex;
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

//////////////////////////////////////////////////////////

seniorAMatches.innerHTML = `
<style>
  ::selection {
    background-color: var(--mint);
    color: var(--blue);
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  .season {
    width: 100%;
    overflow: hidden;
    margin: -3.5rem 0 4rem;
    padding: 0 4rem;
  }
  .season__title {
    display: none;
  }
  .season__container {
    width: 100%;
    border-top: 0.1rem solid var(--white);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
  }
  .season__match {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
  }
  .season__match--main {
    transform: scale(140%);
    padding: 2.5rem 0;
  }
  .match__escudo {
    aspect-ratio: 1;
    height: 6rem;
    object-fit: contain;
    object-position: center;
  }
  .match__result {
    font-size: 5rem;
    line-height: 5rem;
    font-weight: 600;
    font-family: var(--title);
    margin: 0;
    padding: 0 0.8rem;
    color: var(--white);
    position: relative;
    width: 6rem;
    text-align: center;
  }
  .match__date {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: var(--text);
    margin: 0 auto;
    padding: 0;
    color: var(--white);
    text-align: center;
  }
  .season__match--main .match__date {
    transform: scale(80%);
    padding: 1.5rem 0;
  }
  @media (max-width: 1760px) {
    .season__match {
      transform: scale(90%);
    }
    .season__match--main {
      transform: scale(115%);
    }
  }
  @media (max-width: 1570px) {
    .season__match {
      transform: scale(80%);
    }
    .season__match--main {
      transform: scale(100%);
    }
  }
  @media (max-width: 1450px) {
    .season__match {
      transform: scale(75%);
    }
    .season__match--main {
      transform: scale(92%);
    }
  }
  @media (max-width: 1360px) {
    .season__match:last-child,
    .season__match:first-child {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    .season__match:nth-child(2),
    .season__match:nth-child(6) {
      display: none;
    }
    .season__match {
      transform: scale(100%);
    }
    .season__match--main {
      transform: scale(140%);
    }
  }
  @media (max-width: 820px) {
    .season__match {
      transform: scale(90%);
    }
    .season__match--main {
      transform: scale(115%);
    }
  }
  @media (max-width: 700px) {
    .season {
      margin: 2rem 0 4rem;
    }
    .season__title {
      display: block;
      font-family: var(--title);
      font-weight: 800;
      font-size: 8rem;
      color: var(--white);
      margin: 0 0 0.5rem;
      padding: 0;
    }
    .season__container {
      width: 100%;
      border-top: 0.1rem solid var(--white);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      margin: 0;
    }
    .season__match {
      transform: scale(75%);
    }
    .season__match--main {
      transform: scale(92%);
    }
    .season__match:nth-child(3) {
      margin-left: -2rem;
    }
    .season__match:nth-child(5) {
      margin-right: -2rem;
    }
  }
  @media (max-width: 580px) {
    .season__container {
      padding: 0.7rem 0;
    }
    .season__match {
      transform: scale(70%);
    }
    .season__match--main {
      transform: scale(85%);
    }
    .season__match:nth-child(3) {
      margin-left: -2.5rem;
    }
    .season__match:nth-child(4) {
      margin-left: -2.5rem;
      margin-right: -2.5rem;
    }
    .season__match:nth-child(5) {
      margin-right: -2.5rem;
    }
  }
  @media (max-width: 530px) {
    .season__container {
      padding: 0 0;
    }
    .season__match {
      transform: scale(55%);
    }
    .season__match--main {
      transform: scale(65%);
    }
    .season__match:nth-child(3) {
      margin-left: -4rem;
    }
    .season__match:nth-child(4) {
      margin-left: -4rem;
      margin-right: -4rem;
    }
    .season__match:nth-child(5) {
      margin-right: -4rem;
    }
  }
  @media (max-width: 460px) {
    .season {
      margin: 2rem 0 2rem;
    }
    .season__title {
      font-size: 7rem;
    }
    .season__match {
      transform: scale(45%);
    }
    .season__match--main {
      transform: scale(55%);
    }
    .season__match:nth-child(3) {
      margin-left: -5.2rem;
      margin-top: -1rem;
    }
    .season__match:nth-child(4) {
      margin-left: -8.2rem;
      margin-right: -8.2rem;
      margin-top: -1rem;
    }
    .season__match:nth-child(5) {
      margin-right: -5.2rem;
      margin-top: -1rem;
    }
  }
  @media (max-width: 400px) {
    .season__title {
      font-size: 5.6rem;
    }
  }
</style>

<section class="season">
  <h2 class="season__title">PARTIDOS</h2>
  <div class="season__container">
    <!-- /////////// -->
    ${
      // nextMatchArrIndex - 3 < 0
      //   ? `<div class="season__match"></div>`
      //   :
      `<div class="season__match">
        <img src="/public/img/escudos/olympia.png" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex - 3] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex - 3].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex - 3] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex - 3].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex - 3] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex - 3].shortDate
        }</span>
      </div>`
    }
    ${
      // nextMatchArrIndex - 2 < 0
      //   ? `<div class="season__match"></div>`
      //   :
      `<div class="season__match">
        <img src="/public/img/escudos/olympia.png" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex - 2] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex - 2].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex - 2] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex - 2].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex - 2] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex - 2].shortDate
        }</span>
      </div>`
    }
    ${
      // nextMatchArrIndex - 1 < 0
      //   ? `<div class="season__match"></div>`
      //   :
      `<div class="season__match">
        <img src="/public/img/escudos/olympia.png" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex - 1] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex - 1].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex - 1] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex - 1].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex - 1] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex - 1].shortDate
        }</span>
      </div>`
    }
    ${
      // nextMatchArrIndex < 0
      //   ? `<div class="season__match"></div>`
      //   :
      `<div class="season__match season__match--main">
        <img src="/public/img/escudos/olympia.png" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex].shortDate
        }</span>
      </div>`
    }
    ${
      // nextMatchArrIndex + 1 < 0
      //   ? `<div class="season__match"></div>`
      //   :
      `<div class="season__match">
        <img src="/public/img/escudos/olympia.png" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex + 1] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex + 1].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex + 1] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex + 1].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex + 1] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex + 1].shortDate
        }</span>
      </div>`
    }
    ${
      // nextMatchArrIndex + 2 < 0
      //   ? `<div class="season__match"></div>`
      //   :
      `<div class="season__match">
        <img src="/public/img/escudos/olympia.png" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex + 2] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex + 2].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex + 2] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex + 2].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex + 2] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex + 2].shortDate
        }</span>
      </div>`
    }
    ${
      // nextMatchArrIndex + 3 < 0
      //   ? `<div class="season__match"></div>`
      //   :
      `<div class="season__match">
        <img src="/public/img/escudos/olympia.png" class="match__escudo match__escudo--1" />
        <span class="match__result">${
          SEASON_SENIOR_A[nextMatchArrIndex + 3] == undefined
            ? "-"
            : SEASON_SENIOR_A[nextMatchArrIndex + 3].result
        }</span>
        <img src="${
          SEASON_SENIOR_A[nextMatchArrIndex + 3] == undefined
            ? " "
            : SEASON_SENIOR_A[nextMatchArrIndex + 3].imgURL
        }" class="match__escudo match__escudo--2" />
        <span class="match__date">${
          SEASON_SENIOR_A[nextMatchArrIndex + 3] == undefined
            ? ""
            : SEASON_SENIOR_A[nextMatchArrIndex + 3].shortDate
        }</span>
      </div>`
    }
    <!-- /////////// -->
  </div>
</section>
`;

class SeniorAMatches extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(seniorAMatches.content);
    const shadow = document.querySelector("senior-a_matches-component").shadowRoot;
  }
}

customElements.define("senior-a_matches-component", SeniorAMatches);
