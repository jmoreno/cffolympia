//ESTA SECCION LA DEJAMOS EN STAND BY

import { CLUB } from "/api/club.mjs";

const equipoPartidoTemplate = document.createElement("template");

equipoPartidoTemplate.innerHTML = `
<style>
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .match {
    position: relative;
    margin: 4rem 0 2rem;
    padding: 0 2rem;
    height: 100vh;
    width: 100%;

    overflow: hidden;
  }
  .gallery__slide {
    border-radius: 1rem;
    border: 0.2rem solid var(--mint);
    background: var(--blue);
    flex-basis: 100%;
    height: 100%;
    flex-shrink: 0;
    scroll-snap-align: center;
  }
  .slide__content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3.5rem 4rem 9rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .slide__head {
    width: 100%;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    flex-shrink: 0;
  }
  .slide__title {
    font-size: clamp(6rem, 10rem, 10rem);
    line-height: clamp(6rem, 10rem, 10rem);
    font-weight: 600;
    font-family: var(--title);
    margin: 0;
    padding: 0;
    color: var(--white);
    position: relative;
  }

  .slide__match {
    position: relative;
    flex-grow: 1;
    padding: 2.5rem 0;
    max-height: 50rem;
    height: 80%;
    margin: 0 auto;
    justify-content: center;
  }
  .match__main {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    -ms-flex-direction: row;
    flex-direction: row;
    gap: clamp(3rem, 7rem, 7rem);
    align-items: center;
  }
  .match__escudo1-frame {
    height: 100%;
    aspect-ratio: 1;
  }
  .match__escudo1 {
    height: 100%;
    width: 100%;
    background-image: url("/public/img/escudos/olympia.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .match__vs {
    font-size: clamp(20rem, 40rem, 40rem);
    font-weight: 600;
    font-family: var(--title);
    margin: 0;
    padding: 0;
    color: var(--white);
  }
  .match__escudo2-frame {
    height: 100%;
    aspect-ratio: 1;
  }
  .match__escudo2 {
    height: 100%;
    width: 100%;
    background-image: url("/public/img/escudos/atleti.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .slide__foot {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-shrink: 0;
  }
  .slide__link {
    font-size: clamp(3rem, 6rem, 6rem);
    line-height: clamp(3rem, 6rem, 6rem);
    font-weight: 500;
    font-family: var(--title);
    margin: 0;
    padding: 0;
    color: var(--white);
    text-decoration: none;
    letter-spacing: 0.15rem;
  }
  .slide__link:hover,
  .slide__link:focus {
    color: var(--mint);
  }

  /* Left to adapt */
  /* @media (max-width: 1000px) {
    } */
</style>

<section class="match">
  <div class="gallery__slide gallery__slide--match">
    <div class="slide__content">
      <div class="slide__head">
        <h2 class="slide__title">NEXT MATCH</h2>
        <h2 class="slide__title slide__title--timer">17:00:09:35</h2>
      </div>
      <div class="slide__match">
        <div class="match__main">
          <div class="match__escudo1-frame">
            <div class="match__escudo1"></div>
          </div>
          <p class="match__vs">VS</p>
          <div class="match__escudo2-frame">
            <div class="match__escudo2"></div>
          </div>
        </div>
      </div>
      <div class="slide__foot">
        <span class="match__warn">
          AVISO: El partido puede no estar actualizado. No lo tomen como referencia, revisen
          MatchApp.
        </span>
      </div>
    </div>
  </div>
</section>
`;

class EquipoPartido extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(equipoPartidoTemplate.content);

    //TEAMS LOADER
    const shadow = document.querySelector("equipo_partido-component").shadowRoot;
    const teamsContainer = shadow.querySelector(".teams");

    for (let i = 1; i <= CLUB.length; i++) {
      let name = CLUB[i - 1].general.name;
      let imgURL = CLUB[i - 1].general.imgURL;
      let pageURL = CLUB[i - 1].general.pageURL;
      teamsContainer.innerHTML += `
      <a
        class="${name == "Senior A" || name == "Senior B" ? "group__team--main" : "group__team"}"
        href="${pageURL}"
        style="background-image: url(${imgURL})">
        <span class="team__name">${name}</span>
      </a>`;
    }
  }
}

customElements.define("equipo_partido-component", EquipoPartido);
