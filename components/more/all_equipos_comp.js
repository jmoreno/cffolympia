import { CLUB } from "/api/club.mjs";

const allEquiposTemplate = document.createElement("template");

allEquiposTemplate.innerHTML = `
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
  .teams {
    position: relative;
    width: 100%;
    margin: 8rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 4rem;
    overflow: hidden;
    gap: 2rem;
  }
  .group__team,
  .group__team--main {
    flex-basis: calc((100vw - 8rem - 4rem) / 3);
    padding: 1rem 2rem;
    aspect-ratio: 1.618;
    border-radius: 1rem;
    border: 0.2rem solid var(--mint);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-box-shadow: inset 0 -149px 82px -78px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: inset 0 -149px 82px -78px rgba(0, 0, 0, 0.72);
    box-shadow: inset 0 -149px 82px -78px rgba(0, 0, 0, 0.72);
    text-decoration: none;
  }
  .group__team--main {
    flex-basis: calc((100vw - 8rem - 2rem) / 2);
    padding: 1.5rem 2.5rem;
  }
  .group__team .team__name,
  .group__team--main .team__name {
    font-family: var(--title);
    font-weight: 800;
    font-size: 10rem;
    color: var(--white);
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  .group__team--main .team__name {
    font-size: 14rem;
  }

  @media (max-width: 1640px) {
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 8rem;
    }
    .group__team--main .team__name {
      font-size: 12rem;
    }
  }
  @media (max-width: 1370px) {
    .group__team {
      flex-basis: calc((100vw - 8rem - 2rem) / 2);
      padding: 1.5rem 2.5rem;
    }
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 11rem;
    }
  }
  @media (max-width: 1260px) {
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 9.5rem;
    }
  }
  @media (max-width: 1140px) {
    .teams {
      padding: 0 2rem;
    }
    .group__team,
    .group__team--main {
      flex-basis: calc((100vw - 4rem - 2rem) / 2);
      padding: 1.5rem 2.5rem;
    }
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 8.5rem;
    }
  }
  @media (max-width: 1000px) {
    .teams {
      gap: 1.5rem;
    }
    .group__team,
    .group__team--main {
      flex-basis: calc((100vw - 4rem - 1.5rem) / 2);
      padding: 1rem 1.8rem;
    }
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 7.5rem;
    }
  }
  @media (max-width: 860px) {
    .teams {
      gap: 1.2rem;
    }
    .group__team,
    .group__team--main {
      flex-basis: calc((100vw - 4rem - 1.2rem) / 2);
    }
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 6.5rem;
    }
  }
  @media (max-width: 770px) {
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 5.5rem;
    }
  }
  @media (max-width: 860px) {
    .teams {
      gap: 1rem;
    }
    .group__team,
    .group__team--main {
      flex-basis: calc((100vw - 4rem - 1rem) / 2);
      padding: 1rem 1.5rem;
    }
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 5rem;
    }
  }
  @media (max-width: 570px) {
    .teams {
      gap: 1.5rem;
    }
    .group__team,
    .group__team--main {
      flex-basis: calc(100vw - 4rem);
      padding: 1rem 1.8rem;
    }
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 9rem;
    }
  }
  @media (max-width: 500px) {
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 7rem;
    }
  }
  @media (max-width: 420px) {
    .teams {
      gap: 1.2rem;
    }
    .group__team,
    .group__team--main {
      padding: 1rem 1.5rem;
    }
    .group__team .team__name,
    .group__team--main .team__name {
      font-size: 5.5rem;
    }
  }
</style>
<section class="teams">
</section>
`;

class AllEquipos extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(allEquiposTemplate.content);

    //TEAMS LOADER
    const shadow = document.querySelector("all_equipos-component").shadowRoot;
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

customElements.define("all_equipos-component", AllEquipos);
