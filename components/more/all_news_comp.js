import NOTICIAS from "/api/news.mjs";

const allNewsTemplate = document.createElement("template");

allNewsTemplate.innerHTML = `
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
.news {
  width: 100%;
  margin: 8rem 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem 4rem;
}
.news__display {
  width: 100%;
  padding: 0 6rem 4rem;
  margin: 0 0 4rem;
  display: flex;
  flex-direction: column;
  border-left: 0.2rem solid var(--mint);
  border-right: 0.2rem solid var(--mint);
}
.news__article {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 0.2rem solid var(--mint);
  padding: 4rem 0;
}
.news__article:last-child {
  border: none;
  padding: 4rem 0 0;
}
.article__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 4rem 0 0;
}
.article__title {
  font-size: 11rem;
  font-weight: 600;
  font-family: var(--title);
  margin: 0 0 1rem;
  padding: 0;
  text-transform: uppercase;
}
.article__date {
  font-size: 1.6rem;
  font-weight: 400;
  font-family: var(--text);
  margin: 0 0 2rem;
  padding: 0;
  white-space: nowrap;
}
.article__text {
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 400;
  font-family: var(--text);
  margin: 0;
  padding: 0;
}
.article__img {
  width: 40%;
  aspect-ratio: 1.618;
  object-fit: cover;
}
.news__control {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
.control__box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 1rem;
  flex-wrap: wrap;
}
.control__option {
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mint);
  font-size: 2rem;
  font-family: var(--stitle);
  border: 0.2rem solid var(--mint);
  border-radius: 1rem;
  background-color: var(--blue);
  text-decoration: none;
}
.control__option:not(:last-child) {
  margin: 0 0.75rem 0 0;
}
.control__option--selected {
  color: var(--blue);
  background-color: var(--mint);
}
.control__option:hover {
  color: var(--blue);
  background-color: var(--mint);
}

@media (max-width: 1720px) {
  .article__title {
    font-size: 10rem;
  }
  .article__date {
    font-size: 1.55rem;
  }
}
@media (max-width: 1560px) {
  .article__title {
    font-size: 9rem;
  }
  .article__text {
    font-size: 1.9rem;
    line-height: 2.3rem;
  }
}
@media (max-width: 1360px) {
  .article__title {
    font-size: 8rem;
  }
  .article__text {
    font-size: 1.8rem;
    line-height: 2.1rem;
  }
}
@media (max-width: 1270px) {
  .article__title {
    font-size: 7rem;
  }
}
@media (max-width: 1200px) {
  .article__title {
    font-size: 6.5rem;
  }
  .article__date {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
  .article__text {
    font-size: 1.6rem;
    line-height: 2rem;
  }
}
@media (max-width: 1120px) {
  .article__title {
    font-size: 5rem;
  }
}
@media (max-width: 1000px) {
  .news__display {
    padding: 0 4rem 4rem;
  }
  .news__article {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .article__img {
    border-radius: 1rem;
    margin: 0 0 2rem;
    width: 100%;
  }
}
@media (max-width: 660px) {
  .article__title {
    font-size: 4.5rem;
  }
  .article__date {
    font-size: 1.2rem;
  }
  .article__text {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
}
@media (max-width: 520px) {
  .news__article:first-child {
    padding: 0 0 4rem;
  }
  .news__display {
    padding: 0 0 0;
    border: none;
  }
}
@media (max-width: 390px) {
  .article__title {
    font-size: 2.8rem;
  }
  .article__date {
    font-size: 1.2rem;
  }
  .article__text {
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
}
</style>
<section class="news">
  <div class="news__display">

  </div>
  <div class="news__control">
    <div class="control__box">
    
    </div>
  </div>
</section>
`;

class AllNewsComp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(allNewsTemplate.content);

    //NEWS LOADER

    const grupoBuscado = new URLSearchParams(window.location.search).get("grupo");
    const numeroGrupos = Math.floor(NOTICIAS.length / 10) + 1;
    const grupoDevuelto = numeroGrupos < grupoBuscado ? numeroGrupos : grupoBuscado;

    const shadow = document.querySelector("all_news-component").shadowRoot;
    const newsContainer = shadow.querySelector(".news__display");
    const controlBox = shadow.querySelector(".control__box");

    for (
      let i = 1 + (grupoDevuelto - 1) * 10;
      i <= (grupoDevuelto * 10 > NOTICIAS.length ? NOTICIAS.length : grupoDevuelto * 10);
      i++
    ) {
      let title = NOTICIAS[i - 1].title;
      let imgLink = NOTICIAS[i - 1].imgLink;
      let text = NOTICIAS[i - 1].text;
      let date = NOTICIAS[i - 1].date;
      let imgPos = NOTICIAS[i - 1].imgPosition;
      newsContainer.innerHTML += `
      <div id="news${i}" class="news__article">
        <div class="article__content">
          <h3 class="article__title">${title}</h3>
          <span class="article__date">${date}</span>
          <p class="article__text">${text}</p>
        </div>
        <img class="article__img" src="${imgLink}" style="object-position: ${imgPos};" />
      </div>`;
    }

    for (let i = 1; i <= numeroGrupos; i++) {
      controlBox.innerHTML += `
      <a 
        href="/pages/noticias.html?grupo=${i}" 
        class="control__option ${i == grupoDevuelto ? "control__option--selected" : ""}" >
        ${i}
      </a>
      `;
    }
  }
}

customElements.define("all_news-component", AllNewsComp);
