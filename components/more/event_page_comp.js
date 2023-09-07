import EVENTS from "/api/events.mjs";

const eventPageTemplate = document.createElement("template");

eventPageTemplate.innerHTML = `
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
  .event {
    width: 100%;
    margin: 8rem 0 4rem;
    padding: 0;
  }
  .event__cover {
    position: relative;
    width: 100%;
    margin: 0 0 2rem;
    padding: 0;
    overflow: hidden;
    max-height: calc(100vh - 12rem);
  }
  .event__img {
    max-height: calc(100vh - 12rem);
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    object-position: center center;
    border: 0.2rem solid var(--mint);
    border-style: solid none;
  }
  .event__content {
    max-width: 98rem;
    margin: 9rem auto 12rem;
    padding: 0 4rem;
  }
  .event__title {
    font-family: var(--title);
    font-weight: 800;
    font-size: 16rem;
    color: var(--white);
    margin: 0 0 0.5rem;
    padding: 0;
  }
  .event__text {
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: var(--white);
    margin: 0 0 2rem;
    padding: 0;
  }
  @media (max-width: 1000px) {
    .event__content {
      margin: 5rem auto 6rem;
    }
    .event__title {
      font-size: 14rem;
    }
    .event__text {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
  @media (max-width: 600px) {
    .event__content {
      margin: 3rem auto 4.5rem;
      padding: 0 3rem;
    }
    .event__title {
      font-size: 11rem;
    }
    .event__text {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
  @media (max-width: 500px) {
    .event__content {
      margin: 2.5rem auto 2.5rem;
      padding: 0 3rem;
    }
    .event__title {
      font-size: 9rem;
    }
    .event__text {
      font-size: 1.3rem;
      line-height: 1.65rem;
      margin: 0;
    }
  }
</style>
<section class="event">
  
</section>
`;

class EventPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(eventPageTemplate.content);

    const shadow = document.querySelector("event-component").shadowRoot;

    //EVENT EVALUATOR
    const eventoBuscado = new URLSearchParams(window.location.search).get("evento");
    let eventoACargar = "none";
    for (let i = 0; i < EVENTS.length; i++) {
      if (eventoBuscado == EVENTS[i].pageURL.slice(27)) {
        eventoACargar = EVENTS[i].pageURL.slice(27);
      }
    }
    if (eventoACargar == "none") {
      location.replace("/index.html");
    }
    const eventoArrPosition = EVENTS.findIndex((event) => event.pageURL.slice(27) == eventoACargar);

    //EVENT LOADER
    const portada = shadow.querySelector(".event");
    let name = EVENTS[eventoArrPosition].name;
    let pageCoverImgURL = EVENTS[eventoArrPosition].pageCoverImgURL;
    let largeDescription = EVENTS[eventoArrPosition].largeDescription;

    document.title += " " + name;

    portada.innerHTML += `
    <div class="event__cover">
      <img
        src="${pageCoverImgURL}"
        alt="Imagen del evento ${name}"
        class="event__img" />
    </div>
    <div class="event__content">
      <h2 class="event__title">${name}</h2>
      <p class="event__text">${largeDescription}</p>
    </div>
    `;
  }
}

customElements.define("event-component", EventPage);
