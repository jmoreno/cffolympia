const standUpSlide = document.createElement("template");

standUpSlide.innerHTML = `
<style>
  *,
  ::before,
  ::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  .gallery__slide {
    background-image: linear-gradient(155deg, #ffffff 0%, #ffffff 91%, #b0b0b0 91%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
    justify-content: center;
    align-items: center;
  }
  .content__column {
    height: 100%;
    width: 100%;
    max-width: 740px;
    overflow: hidden;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .column__img {
    width: 100%;
    border-radius: 1rem;
    
  }
  .column__btns {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    gap: 2rem;
  }
  .btn {
    width: 100%;
    text-decoration: none;
    color: orange;
    border-radius: 1rem;
    border: 0.2rem solid orange;
    text-align: center;
    vertical-align: center;
    padding: 1.5rem 1rem;
    font-family: var(--stitle);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn:hover {
    color: white;
    background: orange;
  }

  @media (max-width: 790px) {
    .slide__content {
      padding: 2rem 2rem 10rem;
      justify-content: flex-start;
      gap: 2rem;
    }
    .gallery__slide {
      background-image: linear-gradient(155deg, #ffffff 0%, #ffffff 100%);
    }
  }
  @media (max-width: 500px) {
    .column__btns {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      gap: 2rem;
    }
  }
</style>

<div class="gallery__slide gallery__slide--match">
  <div class="slide__content">
    <div class="content__column">
      <img src="/public/img/social-index/standup-logo.jpg" alt="Stand up by L'Oréal" class="column__img"/>
      <div class="column__btns">
        <a href="https://www.standup-international.com/es/es/training/landing?utm_source=instagram&utm_medium=social_influencer&utm_content=oap_brde_branding_video_cv&utm_campaign=oap_brde_branding_standup_ifcom&utm_term=OlympiaCF" class="btn btn--main">
          ¡STAND UP!
        </a>
        <a href="/public/docs/standup.pdf" target="_blank" class="btn">
          MÁS INFORMACIÓN
        </a>
      </div>
    </div>
  </div>
</div>
`;

class StandUpSlide extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(standUpSlide.content);
    const shadow = document.querySelector("hero_gallery-component").shadowRoot;
    const shadow2 = shadow.querySelector("stand_up-slide").shadowRoot;
  }
}

customElements.define("stand_up-slide", StandUpSlide);
