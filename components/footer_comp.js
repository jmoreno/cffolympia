const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
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
  .footer {
    width: 100%;
    margin: 2rem 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .footer__marquee-track {
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: var(--mint);
    height: 5rem;
    padding: 0.4rem 0;
    flex-shrink: 0;
  }
  .footer__marquee {
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
  .footer__marquee--right {
    animation: marquee 41s infinite linear reverse;
  }
  .footer__marquee--left {
    animation: marquee 41s infinite linear;
  }
  .footer__marquee::before {
    word-spacing: 0.3rem;
    content: "  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //";
  }
  .footer__marquee::after {
    word-spacing: 0.3rem;
    content: "  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //  OLYMPIA  //";
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .footer__container {
    flex-grow: 1;
    background: var(--mint);
    width: 100%;
    position: relative;
    padding: 4rem 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer__newsletter {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .newsletter__title {
    font-family: var(--title);
    font-weight: 800;
    font-size: 20rem;
    color: var(--blue);
    margin: 0 0 0.5rem;
    padding: 0;
  }
  .newsletter__form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .newsletter__input {
    margin: 0 0 2rem;
    padding: 0;
    background: transparent;
    border-radius: 0;
    border: none;
    border-bottom: 0.2rem solid var(--blue);
    height: 6.3rem;
    position: relative;
    font-family: var(--title);
    font-weight: 600;
    font-size: 6rem;
    color: var(--blue);
    padding: 0;
  }
  .newsletter__input::-webkit-input-placeholder {
    font-family: var(--title);
    font-weight: 600;
    font-size: 6rem;
    color: var(--blue);
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .newsletter__input:-moz-placeholder {
    font-family: var(--title);
    font-weight: 600;
    font-size: 6rem;
    color: var(--blue);
    margin: 0;
    opacity: 1;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .newsletter__input::-moz-placeholder {
    font-family: var(--title);
    font-weight: 600;
    font-size: 6rem;
    color: var(--blue);
    margin: 0;
    opacity: 1;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .newsletter__input:-ms-input-placeholder {
    font-family: var(--title);
    font-weight: 600;
    font-size: 6rem;
    color: var(--blue);
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .newsletter__input::-ms-input-placeholder {
    font-family: var(--title);
    font-weight: 600;
    font-size: 6rem;
    color: var(--blue);
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .newsletter__input::placeholder {
    font-family: var(--title);
    font-weight: 600;
    font-size: 6rem;
    color: var(--blue);
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .newsletter__submit {
    margin: 3rem 0 2rem;
    background: transparent;
    border-radius: 500rem;
    border: 0.3rem solid var(--blue);
    position: relative;
    font-family: var(--stitle);
    font-weight: 400;
    font-size: 4rem;
    color: var(--blue);
    padding: 0;
  }
  .newsletter__submit:hover {
    background: var(--blue);
    color: var(--mint);
    cursor: pointer;
  }
  .footer__morecontent {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .footer__hashtag {
    font-family: var(--title);
    font-weight: 700;
    font-size: 48rem;
    color: var(--blue);
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1880px) {
    .footer__hashtag {
      font-size: 46rem;
    }
  }
  @media (max-width: 1830px) {
    .footer__hashtag {
      font-size: 44rem;
    }
  }
  @media (max-width: 1780px) {
    .footer__hashtag {
      font-size: 44rem;
    }
    .newsletter__title {
      font-weight: 800;
      font-size: 18rem;
    }
    .newsletter__input {
      height: 5.75rem;
      font-size: 5.5rem;
    }
    .newsletter__input::-webkit-input-placeholder {
      font-size: 5.5rem;
    }
    .newsletter__input:-moz-placeholder {
      font-size: 5.5rem;
    }
    .newsletter__input::-moz-placeholder {
      font-size: 5.5rem;
    }
    .newsletter__input:-ms-input-placeholder {
      font-size: 5.5rem;
    }
    .newsletter__input::-ms-input-placeholder {
      font-size: 5.5rem;
    }
    .newsletter__input::placeholder {
      font-size: 5.5rem;
    }
    .newsletter__submit {
      margin: 3rem 0 3rem;
      font-size: 3.8rem;
    }
  }
  @media (max-width: 1720px) {
    .footer__hashtag {
      font-size: 40rem;
    }
  }
  @media (max-width: 1620px) {
    .footer__hashtag {
      font-size: 38rem;
    }
    .newsletter__title {
      font-weight: 800;
      font-size: 16rem;
    }
    .newsletter__submit {
      margin: 2rem 0 2.5rem;
      font-size: 3.6rem;
    }
  }
  @media (max-width: 1520px) {
    .footer__hashtag {
      font-size: 34rem;
    }
    .newsletter__title {
      font-weight: 800;
      font-size: 16rem;
    }
    .newsletter__submit {
      margin: 2rem 0 2.5rem;
      font-size: 3.6rem;
    }
  }
  @media (max-width: 1420px) {
    .footer__hashtag {
      font-size: 30rem;
    }
    .newsletter__title {
      font-weight: 800;
      font-size: 15rem;
    }
    .newsletter__input {
      height: 5.25rem;
      font-size: 5rem;
    }
    .newsletter__input::-webkit-input-placeholder {
      font-size: 5rem;
    }
    .newsletter__input:-moz-placeholder {
      font-size: 5rem;
    }
    .newsletter__input::-moz-placeholder {
      font-size: 5rem;
    }
    .newsletter__input:-ms-input-placeholder {
      font-size: 5rem;
    }
    .newsletter__input::-ms-input-placeholder {
      font-size: 5rem;
    }
    .newsletter__input::placeholder {
      font-size: 5rem;
    }
    .newsletter__submit {
      font-size: 3.4rem;
    }
  }
  @media (max-width: 1300px) {
    .footer__hashtag {
      font-size: 26rem;
    }
    .newsletter__title {
      font-weight: 800;
      font-size: 14rem;
    }
  }
  @media (max-width: 1180px) {
    .footer__container {
      flex-direction: column;
      align-items: center;
    }
    .footer__newsletter {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 790px) {
    .footer__hashtag {
      font-size: 24rem;
    }
  }
  @media (max-width: 690px) {
    .footer__hashtag {
      font-size: 20rem;
    }
  }
  @media (max-width: 580px) {
    .footer__hashtag {
      font-size: 16rem;
    }
    .footer__marquee-track {
      height: 4rem;
    }
    .footer__marquee {
      font-size: 2.5rem;
      line-height: 3rem;
      border-top: 0.15rem solid var(--blue);
      border-bottom: 0.15rem solid var(--blue);
    }
  }
  @media (max-width: 450px) {
    .footer__container {
      padding: 2rem;
    }
    .newsletter__title {
      font-weight: 800;
      font-size: 13rem;
    }
    .newsletter__input {
      height: 4.25rem;
      font-size: 4rem;
    }
    .newsletter__input::-webkit-input-placeholder {
      font-size: 4rem;
    }
    .newsletter__input:-moz-placeholder {
      font-size: 4rem;
    }
    .newsletter__input::-moz-placeholder {
      font-size: 4rem;
    }
    .newsletter__input:-ms-input-placeholder {
      font-size: 4rem;
    }
    .newsletter__input::-ms-input-placeholder {
      font-size: 4rem;
    }
    .newsletter__input::placeholder {
      font-size: 4rem;
    }
    .newsletter__submit {
      font-size: 3rem;
    }
    .footer__hashtag {
      font-size: 13rem;
    }
  }
  @media (max-width: 380px) {
    .newsletter__title {
      font-weight: 800;
      font-size: 12rem;
    }
    .footer__hashtag {
      font-size: 12rem;
    }
  }
</style>
<footer class="footer">
    <div class="footer__marquee-track">
        <div class="footer__marquee footer__marquee--left"></div>
    </div>
    <div class="footer__container">
        <div class="footer__newsletter">
            <h3 class="newsletter__title">NEWSLETTER</h3>
            <form
            class="newsletter__form"
            action="https://formsubmit.co/info@cffolympia.es"
            method="POST">
            <input
                type="hidden"
                name="_subject"
                value="Alguien nuevo quiere apuntarse a la Newsletter del Olympia" />
            <input type="hidden" name="_next" value="https://cffolympia.es/confirmacion_envio.html">
            <input type="hidden" name="_url" value="https://www.cffolympia.es/index.html" />
            <input type="hidden" name="_cc" value="tesoreria@cffolympia.es" />
            <input
                class="newsletter__input"
                placeholder="NOMBRE COMPLETO"
                type="text"
                name="Nombre"
                required />
            <input
                class="newsletter__input"
                placeholder="EMAIL"
                type="email"
                name="Email"
                required />
            <button class="newsletter__submit" type="submit">¡Apúntame!</button>
            </form>
        </div>
        <div class="footer__morecontent">
            <h2 class="footer__hashtag">#CFFOLYMPIA</h2>
        </div>
    </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
