import { CLUB } from "/api/club.mjs";

const equipoPortadaTemplate = document.createElement("template");

equipoPortadaTemplate.innerHTML = `
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
  .cover {
    position: relative;
    width: 100%;
    margin: 8rem 0 2rem;
    padding: 0;
    overflow: hidden;
    max-height: calc(100vh - 12rem);
  }
  .cover__img {
    max-height: calc(100vh - 12rem);
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    object-position: center center;
    border: 0.2rem solid var(--mint);
    border-style: solid none;
  }
</style>
<section class="cover">
  
</section>
`;

class EquipoPortada extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(equipoPortadaTemplate.content);

    const shadow = document.querySelector("equipo_portada-component").shadowRoot;

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

    //COVER LOADER
    const portada = shadow.querySelector(".cover");
    let name = CLUB[equipoArrPosition].general.name;

    document.title += " " + name;

    let imgURL = CLUB[equipoArrPosition].general.imgURL;

    portada.innerHTML += `
    <img src="${imgURL}" alt="Fotografía del equipo ${name}" class="cover__img" />
    `;
  }
}

customElements.define("equipo_portada-component", EquipoPortada);
