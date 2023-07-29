import { CLUB } from "/api/club.mjs";

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//
//  FALTA ESTILIZAR LAS IMAGENES CUANDO LAS TENGAMOS
//
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

const equipoPersonasTemplate = document.createElement("template");

equipoPersonasTemplate.innerHTML = `
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
  .team {
    position: relative;
    width: 100%;
    margin: 4rem 0 2rem;
    display: flex;
    flex-direction: column;
    padding: 0 4rem;
  }
  .team__name {
    font-family: var(--title);
    font-weight: 800;
    font-size: 16rem;
    color: var(--white);
    margin: 0 0 2rem;
    padding: 0;
  }
  .team__group {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 7rem;
  }
  .team__group:last-child {
    margin-bottom: 0;
  }
  .team__group-name {
    font-family: var(--stitle);
    font-weight: 400;
    font-size: 5rem;
    color: var(--white);
    margin: 1rem 0 2.5rem;
    padding: 0;
  }
  .group__person {
    flex-basis: calc((100vw - 8rem - 6rem) / 5);
    aspect-ratio: 0.8;
    background: linear-gradient(323deg, var(--blue), var(--mint));
    border-radius: 1rem;
    position: relative;
  }
  .person__name {
    position: absolute;
    bottom: 5%;
    left: 5%;
    font-family: var(--title);
    font-weight: 600;
    font-size: 5.3rem;
    line-height: 5.3rem;
    color: var(--white);
    margin: 0 0 -0.9rem;
    padding: 0;
    z-index: 5;
    text-transform: uppercase;
  }
  .person__position {
    position: absolute;
    height: 3.3rem;
    bottom: 4.5%;
    left: 96%;
    font-family: var(--stitle);
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 2.8rem;
    color: var(--white);
    margin: 0;
    padding: 0;
    z-index: 2;
    transform: rotate(270deg);
    transform-origin: bottom left;
    white-space: nowrap;
    text-transform: uppercase;
  }
  .person__number {
    position: absolute;
    top: 5%;
    right: 5%;
    font-family: var(--title);
    font-weight: 700;
    font-size: 18rem;
    line-height: 18rem;
    color: var(--white);
    margin: -2.3rem 0 0;
    padding: 0;
    z-index: 2;
    text-transform: uppercase;
  }
  .person__status {
    position: absolute;
    height: 3.3rem;
    bottom: 4.5%;
    left: 96%;
    font-family: var(--stitle);
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 2.8rem;
    color: var(--white);
    margin: 0;
    padding: 0;
    z-index: 2;
    transform: rotate(270deg);
    transform-origin: bottom left;
    white-space: nowrap;
    text-transform: uppercase;
  }
  .person__img {
    z-index: 3;
  }

  @media (max-width: 1680px) {
    .group__person {
      flex-basis: calc((100vw - 8rem - 4.5rem) / 4);
    }
  }
  @media (max-width: 1360px) {
    .person__name {
      font-size: 4.5rem;
      line-height: 4.5rem;
    }
    .person__position {
      height: 2.64rem;
      left: 97%;
      font-size: 2.2rem;
      line-height: 2.2rem;
    }
    .person__number {
      font-size: 16rem;
      line-height: 16rem;
      margin: -2rem 0 0;
    }
    .person__status {
      height: 2.64rem;
      left: 97%;
      font-size: 2.2rem;
      line-height: 2.2rem;
    }
  }
  @media (max-width: 1180px) {
    .group__person {
      flex-basis: calc((100vw - 8rem - 3rem) / 3);
    }
  }
  @media (max-width: 900px) {
    .person__name {
      font-size: 3.5rem;
      line-height: 3.5rem;
      margin: 0 0 -0.6rem;
    }
    .person__position {
      height: 2.16rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
    .person__number {
      font-size: 14rem;
      line-height: 14rem;
      margin: -1.8rem 0 0;
    }
    .person__status {
      height: 2.16rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
  }
  @media (max-width: 760px) {
    .group__person {
      flex-basis: calc((100vw - 8rem - 1.5rem) / 2);
    }
  }
  @media (max-width: 530px) {
    .person__name {
      font-size: 3rem;
      line-height: 3rem;
    }
    .person__position {
      height: 1.92rem;
      left: 95%;
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
    .person__number {
      font-size: 12rem;
      line-height: 12rem;
      margin: -1.5rem 0 0;
    }
    .person__status {
      height: 1.92rem;
      left: 95%;
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }
  @media (max-width: 480px) {
    .team {
      margin: 2rem 0 2rem;
      padding: 0 3rem;
    }
    .team__name {
      font-size: 11rem;
      margin: 0 0 0.5rem;
    }
    .team__group {
      gap: 1rem;
      margin-bottom: 5rem;
    }
    .team__group-name {
      font-size: 3rem;
      margin: 0.7rem 0 1.5rem;
    }
    .group__person {
      flex-basis: calc((100vw - 6rem - 1rem) / 2);
      border-radius: 0.6rem;
    }
  }
  @media (max-width: 440px) {
    .person__name {
      font-size: 2.6rem;
      line-height: 2.6rem;
    }
    .person__position {
      height: 1.68rem;
      left: 96.5%;
      font-size: 1.4rem;
      line-height: 1.4rem;
    }
    .person__number {
      font-size: 10rem;
      line-height: 10rem;
      margin: -1.4rem 0 0;
    }
    .person__status {
      height: 1.68rem;
      left: 96.5%;
      font-size: 1.4rem;
      line-height: 1.4rem;
    }
  }
  @media (max-width: 390px) {
    .person__name {
      font-size: 2.4rem;
      line-height: 2.4rem;
    }
    .person__position {
      height: 1.44rem;
      left: 95.5%;
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
    .person__number {
      font-size: 9rem;
      line-height: 9rem;
      margin: -1.3rem 0 0;
    }
    .person__status {
      height: 1.44rem;
      left: 95.5%;
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
</style>

<section class="team">
  <h2 class="team__name">SENIOR A</h2>
  <h3 class="team__group-name">JUGADORAS</h3>
  <div class="team__group team__group--jug">
    
  </div>
  <h3 class="team__group-name">CUERPO TÉCNICO</h3>
  <div class="team__group team__group--staff">
    
  </div>
</section>
`;

class equipoPersonas extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(equipoPersonasTemplate.content);

    const shadow = document.querySelector("equipo_personas-component").shadowRoot;

    //TEAM EVALUATOR
    const equipoBuscado = new URLSearchParams(window.location.search).get("equipo");
    let equipoACargar = "none";
    for (let i = 0; i < CLUB.length; i++) {
      if (equipoBuscado == CLUB[i].general.pageURL.slice(34)) {
        equipoACargar = CLUB[i].general.pageURL.slice(34);
      }
    }
    if (equipoACargar == "none") {
      location.replace("/pages/equipos.html");
    }
    const equipoArrPosition = CLUB.findIndex(
      (team) => team.general.pageURL.slice(34) == equipoACargar
    );

    //TEAM LOADER
    const groupJugadoras = shadow.querySelector(".team__group--jug");
    for (let i = 1; i <= CLUB[equipoArrPosition].players.length; i++) {
      let name = CLUB[equipoArrPosition].players[i - 1].name;
      let number = CLUB[equipoArrPosition].players[i - 1].number;
      let position = CLUB[equipoArrPosition].players[i - 1].position;
      let imgURL = CLUB[equipoArrPosition].players[i - 1].imgURL;
      groupJugadoras.innerHTML += `
      <div class="group__person">
        <span class="person__name">${name}</span>
        <span class="person__position">${position}</span>
        <span class="person__number">${number}</span>
        <img src="${imgURL}" alt="Imagen de la jugadora" class="person__img" />
      </div>`;
    }

    const groupStaff = shadow.querySelector(".team__group--staff");
    for (let i = 1; i <= CLUB[equipoArrPosition].staff.length; i++) {
      let name = CLUB[equipoArrPosition].staff[i - 1].name;
      let status = CLUB[equipoArrPosition].staff[i - 1].status;
      let imgURL = CLUB[equipoArrPosition].staff[i - 1].imgURL;
      groupStaff.innerHTML += `
      <div class="group__person">
        <span class="person__name">${name}</span>
        <span class="person__status">${status}</span>
        <img src="${imgURL}" alt="Imagen del staff" class="person__img" />
      </div>`;
    }
  }
}

customElements.define("equipo_personas-component", equipoPersonas);
