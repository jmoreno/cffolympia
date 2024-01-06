const mainInfoTemplate = document.createElement("template");

mainInfoTemplate.innerHTML = `
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
  .info {
    width: 100%;
    margin: 8rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 4rem 4rem;
  }
  .info__container {
    width: 100%;
    padding: 2.5rem 3rem 3rem;
    border: 0.2rem solid var(--mint);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-right: 2rem;
  }
  .info__container:last-child,
  .info__container:nth-child(2) {
    margin-right: 0;
  }
  .info__container:nth-child(1),
  .info__container:nth-child(2) {
    flex-basis: calc((100% - 2rem) / 2);
  }
  .info__container:nth-child(3),
  .info__container:nth-child(4),
  .info__container:nth-child(5) {
    flex-basis: calc((100% - 4rem) / 3);
  }
  .info__title {
    font-family: var(--title);
    font-weight: 800;
    font-size: 14rem;
    color: var(--mint);
    margin: 0 0 2rem;
    padding: 0;
  }
  .info__anchor {
    margin: 0;
    width: 100%;
    background: var(--blue);
    border-radius: 500rem;
    border: 0.3rem solid var(--mint);
    position: relative;
    font-family: var(--stitle);
    font-weight: 400;
    font-size: 3rem;
    color: var(--mint);
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }

  @media (max-width: 1460px) {
    .info__title {
      font-size: 12rem;
    }
    .info__anchor {
      font-size: 2.5rem;
      padding: 1.3rem 0;
    }
  }
  @media (max-width: 1260px) {
    .info__title {
      font-size: 10.3rem;
    }
    .info__anchor {
      font-size: 2rem;
      padding: 1.1rem 0;
    }
  }
  @media (max-width: 1120px) {
    .info__title {
      font-size: 9.5rem;
    }
  }
  @media (max-width: 1040px) {
    .info {
      margin: 8rem 0 1.5rem;
    }
    .info__container {
      padding: 1.6rem 2rem 2rem;
      margin-right: 1.5rem;
    }
    .info__container:last-child,
    .info__container:nth-child(2) {
      margin-right: 0;
    }
    .info__container:nth-child(1),
    .info__container:nth-child(2) {
      flex-basis: calc((100% - 1.5rem) / 2);
    }
    .info__container:nth-child(3),
    .info__container:nth-child(4),
    .info__container:nth-child(5) {
      flex-basis: calc((100% - 3rem) / 3);
    }
    .info__anchor {
      border: 0.25rem solid var(--mint);
    }
  }
  @media (max-width: 1000px) {
    .info {
      flex-wrap: wrap;
    }
    .info__container:nth-child(3),
    .info__container:nth-child(4),
    .info__container:nth-child(5) {
      flex-basis: calc((100% - 1.5rem) / 2);
    }
    .info__container:last-child,
    .info__container:nth-child(2),
    .info__container:nth-child(4) {
      margin-right: 0;
    }
    .info__container:last-child {
      flex-basis: calc(100%);
      margin-bottom: 0;
    }
  }
  @media (max-width: 900px) {
    .info__container:nth-child(1),
    .info__container:nth-child(2) {
      flex-basis: calc(100%);
    }
    .info__container:nth-child(3),
    .info__container:nth-child(4) {
      flex-basis: calc((100% - 1.5rem) / 2);
    }
    .info__container:last-child,
    .info__container:nth-child(1),
    .info__container:nth-child(2),
    .info__container:nth-child(4) {
      margin-right: 0;
    }
  }
  @media (max-width: 680px) {
    .info__container:nth-child(3),
    .info__container:nth-child(4) {
      flex-basis: calc(100%);
    }
    .info__container:nth-child(3) {
      margin-right: 0;
    }
  }
  @media (max-width: 470px) {
    .info__title {
      font-size: 8rem;
    }
    .info__anchor {
      font-size: 2rem;
      padding: 1.1rem 0;
    }
  }
  @media (max-width: 460px) {
    .info {
      padding: 0 2rem 4rem;
    }
  }
  @media (max-width: 390px) {
    .info__title {
      font-size: 6rem;
    }
    .info__anchor {
      font-size: 2rem;
      padding: 1.1rem 0;
    }
  }
</style>
<section class="info">
  <div class="info__container info__horario--jug">
    <h2 class="info__title">HORARIO GENERAL</h2>
    <a href="/public/docs/Horarios de Entrenamiento CFF Olympia Temporada 23-24.pdf" target="_blank" class="info__anchor">Ver Horario</a>
  </div>
  <div class="info__container info__horario--por">
    <h2 class="info__title">HORARIO PORTERAS</h2>
    <a href="/public/docs/Horarios de Entrenamiento de Porteras CFF Olympia Temporada 23-24.pdf" target="_blank" class="info__anchor">Ver Horario</a>
  </div>
  <div class="info__container info__rgpd">
    <h2 class="info__title">PRIVACIDAD</h2>
    <a href="/public/docs/Política de privacidad CFF Olympia Las Rozas.pdf" target="_blank" class="info__anchor">Ver Políticas</a>
  </div>
  <div class="info__container info__reglamento">
    <h2 class="info__title">REGLAMENTO</h2>
    <a href="/public/docs/Reglamento interno del CFF Olympia.pdf" target="_blank" class="info__anchor">Ver Reglamento</a>
  </div>
  <div class="info__container info__mutualidad">
    <h2 class="info__title">LESIONES</h2>
    <a href="https://www.rffm.es/cartera-de-servicios/rffm-servicios-medicos/mutualidad" target="_blank" class="info__anchor">Ver Mutualidad</a>
  </div>
</section>
`;

class Info extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(mainInfoTemplate.content);
  }
}

customElements.define("main_info-component", Info);
