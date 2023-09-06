import NOTICIAS from "/api/news.mjs";

const mainNewsTemplate = document.createElement("template");

mainNewsTemplate.innerHTML = `
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
    margin: 2rem 0;
    height: 74rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.news__marquee-track {
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: var(--mint);
    height: 5rem;
    padding: 0.4rem 0;
    flex-shrink: 0;
}
.news__marquee {
    font-size: 3rem;
    line-height: 3.8rem;
    color: var(--blue);
    font-family: var(--title);
    font-weight: 700;
    white-space: nowrap;
    height: 100%;
    margin: 0;
    padding: 0;
    border-top: 0.2rem solid var(--blue);
    border-bottom: 0.2rem solid var(--blue);
}
.news__marquee--right {
    animation: marquee 41s infinite linear reverse;
}
.news__marquee--left {
    animation: marquee 41s infinite linear;
}
.news__marquee::before {
    word-spacing: 0.3rem;
    content: "  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //";
}
.news__marquee::after {
    word-spacing: 0.3rem;
    content: "  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //  NOTICIAS  //  NEWS  //";
}
@keyframes marquee {
    0% {
    transform: translateX(0);
    }
    100% {
    transform: translateX(-50%);
    }
}
.news__container {
    flex-grow: 1;
    background: var(--blue);
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
    transition: width 0.5s ease;
}
.news__article {
    height: 100%;
    flex-grow: 1;
    width: 16%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-box-shadow: inset 100px -149px 82px -78px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: inset 100px -149px 82px -78px rgba(0, 0, 0, 0.72);
    box-shadow: inset 100px -149px 82px -78px rgba(0, 0, 0, 0.72);
    padding: 3rem 4rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-end;
    align-content: flex-end;
    overflow: -moz-hidden-unscrollable;
    overflow: hidden;
    transition: width 0.5s ease;
    text-decoration: none;
    color: var(--white);
}
#focus {
    width: 100%;
    cursor: crosshair;
}
.news__article:first-child {
    -webkit-box-shadow: inset 0px -149px 82px -78px rgba(0, 0, 0, 0.78);
    -moz-box-shadow: inset 0px -149px 82px -78px rgba(0, 0, 0, 0.78);
    box-shadow: inset 0px -149px 82px -78px rgba(0, 0, 0, 0.78);
}
.article__text {
}
.article__date {
    font-size: 1.8rem;
    font-weight: 400;
    font-family: var(--text);
    margin: 0;
    padding: 0;
    white-space: nowrap;
}
.article__title {
    font-size: 6rem;
    font-weight: 600;
    font-family: var(--title);
    margin: 0;
    padding: 0;
    white-space: nowrap;
    text-transform: uppercase;
}

@media (max-width: 1600px) {
    .news__article:last-child {
    display: none;
    }
    .news__article {
    width: 18%;
    }
}
@media (max-width: 1280px) {
    .news {
    height: 68rem;
    }
}
@media (max-width: 1140px) {
    .news {
    height: 62rem;
    }
}
@media (max-width: 1080px) {
    .news {
    height: unset;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    }
    .news__container {
    -ms-flex-direction: column;
    flex-direction: column;
    }
    .news__article {
    width: 100%;
    aspect-ratio: 2;
    -webkit-box-shadow: inset 0px -149px 82px -78px rgba(0, 0, 0, 0.78);
    -moz-box-shadow: inset 0px -149px 82px -78px rgba(0, 0, 0, 0.78);
    box-shadow: inset 0px -149px 82px -78px rgba(0, 0, 0, 0.78);
    }
    .news__article:last-child {
    display: flex;
    }
}
@media (max-width: 800px) {
    .article__date {
    font-size: 1.6rem;
    }
    .article__title {
    font-size: 5rem;
    }
}
@media (max-width: 600px) {
    .news__article {
    padding: 2rem 3rem;
    }
    .article__date {
    font-size: 1.4rem;
    }
    .article__title {
    font-size: 4rem;
    }
    .news__marquee-track {
    height: 4rem;
    }
    .news__marquee {
    font-size: 2.5rem;
    line-height: 3rem;
    border-top: 0.15rem solid var(--blue);
    border-bottom: 0.15rem solid var(--blue);
    }
}
@media (max-width: 600px) {
    .news__article {
    aspect-ratio: 1.618;
    padding: 1.33rem 2rem;
    }
    .article__date {
    font-size: 1.1rem;
    }
    .article__title {
    font-size: 3.2rem;
    }
}
</style>
<section class="news">
<div class="news__marquee-track">
    <div class="news__marquee news__marquee--right"></div>
</div>

<div class="news__container">
    
</div>

<div class="news__marquee-track">
    <div class="news__marquee news__marquee--left"></div>
</div>
</section>
`;

class MainNewsSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(mainNewsTemplate.content);

    //NEWS LOADER
    const shadow = document.querySelector("main_news-component").shadowRoot;
    const newsContainer = shadow.querySelector(".news__container");
    for (let i = 1; i <= 4; i++) {
      let title = NOTICIAS[i - 1].title;
      let imgLink = NOTICIAS[i - 1].imgLink;
      let date = NOTICIAS[i - 1].date;
      newsContainer.innerHTML += `
      <a href="/pages/noticias.html?grupo=1" class="news__article news__article--${i}" style="background-image: url(${imgLink});">
        <div class="article__text">
            <p class="article__date">${date}</p>
            <h2 class="article__title">${title}</h2>
        </div>
      </a>`;
    }

    //NEWS RESIZER
    const article1 = shadow.querySelector(".news__article--1");
    const article2 = shadow.querySelector(".news__article--2");
    const article3 = shadow.querySelector(".news__article--3");
    const article4 = shadow.querySelector(".news__article--4");

    article1.setAttribute("id", "focus");

    article1.addEventListener("mouseover", () => {
      article1.setAttribute("id", "focus");
      article2.removeAttribute("id", "focus");
      article3.removeAttribute("id", "focus");
      article4.removeAttribute("id", "focus");
    });

    article2.addEventListener("mouseover", () => {
      article2.setAttribute("id", "focus");
      article3.removeAttribute("id", "focus");
      article4.removeAttribute("id", "focus");
      article1.removeAttribute("id", "focus");
    });

    article3.addEventListener("mouseover", () => {
      article3.setAttribute("id", "focus");
      article4.removeAttribute("id", "focus");
      article1.removeAttribute("id", "focus");
      article2.removeAttribute("id", "focus");
    });

    article4.addEventListener("mouseover", () => {
      article4.setAttribute("id", "focus");
      article1.removeAttribute("id", "focus");
      article2.removeAttribute("id", "focus");
      article3.removeAttribute("id", "focus");
    });
  }
}

customElements.define("main_news-component", MainNewsSection);
