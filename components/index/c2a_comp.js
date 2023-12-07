const c2aTemplate = document.createElement("template");

c2aTemplate.innerHTML = `
<style>
::selection {
    background-color: var(--mint);
    color: var(--blue);
}
.social {
    margin: 14rem 0;
    padding: 2rem 4rem;
    aspect-ratio: 2.28;
    display: flex;
    align-items: center;
    justify-content: center;
}
.social__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.social__hashtag {
    font-family: var(--title);
    font-weight: 600;
    font-size: calc(0.293686 * 100vw * 0.7);
    color: var(--white);
    padding: 0;
    margin: 0 0 2rem;
}
.social__hashtag span {
    color: transparent;
    -webkit-text-stroke: 0.15rem var(--white);
    text-stroke: 0.15rem var(--white);
}
.social__links {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    z-index: 3;
}
.social__link {
    height: 100%;
    aspect-ratio: 1;
    border-radius: 100rem;
    background: var(--blue);
    margin-right: 1.5rem;
    border: 0.3rem solid var(--mint);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    position: relative;
}
.social__link:last-child {
    margin: 0;
}
.social__icon {
    filter: brightness(0) saturate(100%) invert(84%) sepia(15%) saturate(513%)
    hue-rotate(128deg) brightness(98%) contrast(88%);
    width: 50%;
    transition: filter 0.5s ease;
}
.social__link:hover,
.social__link:focus {
    background-color: var(--mint);
}
.social__link:hover .social__icon,
.social__link:focus .social__icon {
    filter: invert(7%) sepia(59%) saturate(1551%) hue-rotate(212deg) brightness(87%)
    contrast(109%);
    width: 53%;
}
.social__img-container {
    position: absolute;
}
.social__img-container--1 {
    width: 18.3%;
    aspect-ratio: 0.75;
    top: 0%;
    left: 55%;
    transform: rotate(10deg);
    z-index: -1;
}
.social__img-container--2 {
    width: 28.57%;
    aspect-ratio: 1.618;
    bottom: 10%;
    left: 16%;
    transform: rotate(-5deg);
    z-index: -1;
}
.social__img {
    height: 100%;
    width: 100%;
}

@media (max-width: 1600px) {
    .social__hashtag {
    margin: 0 0 1.5rem;
    }
    .social__links {
    height: 5rem;
    }
}
@media (max-width: 1000px) {
    .social {
    margin: 8rem 0;
    }
}
@media (max-width: 680px) {
    .social {
    aspect-ratio: 1.6;
    margin: 2rem 0;
    }
    .social__hashtag {
    margin: 0 0 1rem;
    }
    .social__hashtag span {
    color: transparent;
    -webkit-text-stroke: 0.04rem var(--white);
    text-stroke: 0.04rem var(--white);
    }
    .social__img-container {
    display: none;
    }
    .social__links {
    height: 4.7rem;
    }
    .social__link {
    margin-right: 1.25rem;
    border: 0.25rem solid var(--mint);
    }
}
@media (max-width: 400px) {
    .social__links {
    height: 4rem;
    }
    .social__link {
    margin-right: 1rem;
    border: 0.2rem solid var(--mint);
    }
}
</style>

<section class="social">
    <div class="social__container">
        <h2 class="social__hashtag"><span>#</span>SOÑAMOSJUNTAS</h2>
        <div class="social__links">
            <a href="https://www.instagram.com/cff_olympia/" class="social__link">
                <img src="/public/icons/instagram.png" alt="Instagram" class="social__icon" />
            </a>
            <a href="https://twitter.com/cff_olympia?lang=es" class="social__link">
                <img src="/public/icons/twitter.png" alt="Twitter" class="social__icon" />
            </a>
            <a href="https://www.tiktok.com/@cff_olympia" class="social__link">
                <img src="/public/icons/tiktok.png" alt="TikTok" class="social__icon" />
            </a>
            <a href="https://www.facebook.com/cffolympialasrozas" class="social__link">
                <img src="/public/icons/facebook.png" alt="Facebook" class="social__icon" />
            </a>
        </div>
        <div class="social__img-container social__img-container--1">
            <img
            src="/public/img/social-index/img1.jpg"
            alt="Imagen del Olympia"
            class="social__img social__img--1" />
        </div>
        <div class="social__img-container social__img-container--2">
            <img
            src="/public/img/social-index/img3.jpg"
            alt="Imagen del Olympia"
            class="social__img social__img--2" />
        </div>
    </div>
</section>
`;

class C2A extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(c2aTemplate.content);

    // const shadow = document.querySelector("video_section-component").shadowRoot;
    // const carousel = shadow.querySelector(".videos__carousel");
    // const img1 = document.querySelector(".social__img--1");
    // const img2 = document.querySelector(".social__img--2");
    // window.onscroll = function () {
    //   let position = window.pageYOffset || document.documentElement.scrollTop;
    //   img1.style.marginTop = (position * 0.2) ** 1.000005 - 820 + "px";
    //   img2.style.marginTop = (position * 0.5) ** 1.000005 - 600 + "px";
    // };
  }
}

customElements.define("c2a-component", C2A);
