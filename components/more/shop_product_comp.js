import SHOP_PRODUCTS from "/api/shopProducts.mjs";

const productTemplate = document.createElement("template");

productTemplate.innerHTML = `
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
  .product {
    width: 100%;
    margin: 8rem 0 4rem;
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 0 2rem;
  }
  .product__images {
    padding: 0 2rem 2rem 0;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
  }
  .product__img {
    flex-basis: calc(50% - 0.5rem);
    width: calc(50% - 0.5rem);
    aspect-ratio: 0.79;
    object-fit: cover;
    object-position: center center;
  }
  .product__img:first-child,
  .product__img:nth-child(3) {
    margin-right: 1rem;
  }
  .product__img:first-child,
  .product__img:nth-child(2) {
    margin-bottom: 1rem;
  }
  .product__payment {
    padding: 0 0 2rem;
    width: 30%;
    height: calc((70vw - 3rem) / 0.8 + 1rem);
  }
  .product__sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 8rem;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  .product__data {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  .product__name {
    margin: 1.5rem 0 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: var(--white);
  }
  .product__price {
    margin: 0.5rem 0 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: var(--white);
  }
  .product__form {
    display: flex;
    flex-direction: column;
  }
  .form__input {
    background-color: transparent;
    border: 0.15rem solid var(--white);
    height: 3.5rem;
    padding: 0 0.8rem;
    margin-bottom: 0.5rem;
    color: var(--white);
    text-transform: capitalize;
  }
  .form__input::-webkit-input-placeholder {
    color: #bbb;
  }
  .form__input:-moz-placeholder {
    color: #bbb;
    opacity: 1;
  }
  .form__input::-moz-placeholder {
    color: #bbb;
    opacity: 1;
  }
  .form__input:-ms-input-placeholder {
    color: #bbb;
  }
  .form__input::-ms-input-placeholder {
    color: #bbb;
  }
  .form__input::placeholder {
    color: #bbb;
  }
  .form__select {
    background-color: transparent;
    border: 0.15rem solid var(--white);
    height: 3.5rem;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--white);
    text-transform: capitalize;
  }
  .form__option {
    background: var(--blue);
  }
  .form__option:hover {
    background: var(--blue);
  }
  .form__text {
    margin: 2rem 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: var(--white);
  }
  .form__text a {
    text-decoration: underline;
    color: var(--white);
  }
  .form__submit {
    background-color: var(--mint);
    border: none;
    height: 4.3rem;
    padding: 0;
    margin: 0;
    color: var(--blue);
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .form__submit:hover {
    filter: brightness(85%);
    cursor: pointer;
  }

  @media (max-width: 1480px) {
    .product__images {
      width: 65%;
    }
    .product__payment {
      width: 35%;
      height: calc((65vw - 3rem) / 0.8 + 1rem);
    }
  }
  @media (max-width: 1200px) {
    .product__images {
      width: 60%;
    }
    .product__payment {
      width: 40%;
      height: calc((60vw - 3rem) / 0.8 + 1rem);
    }
  }
  @media (max-width: 940px) {
    .product {
      width: 100%;
      margin: 8rem 0 4rem;
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 0 2rem;
      overflow: hidden;
    }
    .product__images {
      padding: 0 0 2rem 0;
      width: unset;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .product__img {
      flex-basis: unset;
      width: 65%;
      aspect-ratio: 0.79;
      object-fit: cover;
      object-position: center center;
      margin: 0 1rem 1rem 0;
    }
    .product__img:last-child {
      margin-right: 0;
    }
    .product__payment {
      padding: 0 0 4rem;
      width: 100%;
      height: unset;
    }
    .product__sticky {
      position: relative;
      top: unset;
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    .product__images {
      padding: 0;
    }
    .product__img {
      width: 75%;
    }
  }
  @media (max-width: 520px) {
    .product__img {
      width: 85%;
    }
    .product__name {
      font-size: 1.4rem;
      line-height: 1.4rem;
    }
    .product__price {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
    .form__input {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
    .form__select {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
  }
  @media (max-width: 440px) {
    .product__img {
      width: 90%;
    }
    .product__name {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
    .product__price {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
    .form__input {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
    .form__select {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
  @media (max-width: 400px) {
    .product__img {
      width: 93%;
    }
  }

  .more {
    width: 100%;
    margin: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .more__container {
    width: 100%;
    position: relative;
    padding: 0rem 2rem 8rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem 1rem;
    background-color: var(--blue);
  }
  .more__suggestion {
    flex-basis: calc((100% - 4rem) / 5);
    width: 100%;
    display: flex;
    flex-direction: column;
    filter: brightness(125%);
  }
  .suggestion__inner {
    text-decoration: none;
    width: 100%;
    aspect-ratio: 0.7;
    background: var(--blue);
    padding: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .suggestion__image,
  .suggestion__image--hover {
    max-width: calc(100% - 3.5rem);
    max-height: calc(100% - 3.5rem);
    object-fit: contain;
    transition: all 0.3s ease;
    filter: brightness(80%);
  }
  .suggestion__image--hover {
    display: none;
  }
  .more__suggestion:hover .suggestion__image,
  .more__suggestion:focus .suggestion__image {
    display: none;
  }
  .more__suggestion:hover .suggestion__image--hover,
  .more__suggestion:focus .suggestion__image--hover {
    display: block;
    transform: scale(102%);
  }
  .suggestion__outer {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .suggestion__name {
    margin: 1rem 0 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: var(--white);
  }
  .suggestion__price {
    margin: 0.3rem 0 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: var(--white);
  }

  @media (max-width: 1640px) {
    .more__suggestion {
      flex-basis: calc((100% - 3rem) / 4);
    }
    .more__suggestion:last-child {
      display: none;
    }
  }
  @media (max-width: 1360px) {
    .more__suggestion {
      flex-basis: calc((100% - 2rem) / 3);
    }
    .more__suggestion:nth-child(4) {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    .suggestion__name {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
    .suggestion__price {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
  }
  @media (max-width: 940px) {
    .more {
      display: none;
      margin: 0;
      padding: 0;
      flex-basis: calc((100% - 1rem) / 2);
    }
  }
  @media (max-width: 660px) {
    .suggestion__name {
      font-size: 1.15rem;
      line-height: 1.15rem;
    }
    .suggestion__price {
      font-size: 1.15rem;
      line-height: 1.15rem;
    }
  }
  @media (max-width: 540px) {
    .suggestion__name {
      font-size: 1.1rem;
      line-height: 1.1rem;
    }
    .suggestion__price {
      font-size: 1.1rem;
      line-height: 1.1rem;
    }
  }
  @media (max-width: 520px) {
    .suggestion__name {
      font-size: 1.05rem;
      line-height: 1.05rem;
    }
    .suggestion__price {
      font-size: 1.05rem;
      line-height: 1.05rem;
    }
  }
  @media (max-width: 500px) {
    .suggestion__name {
      font-size: 1rem;
      line-height: 1rem;
    }
    .suggestion__price {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
  @media (max-width: 480px) {
    .more__container {
      padding: 0rem 2rem 8rem;
    }
    .more__suggestion {
      flex-basis: calc(100%);
    }
    .more__suggestion:nth-child(4),
    .more__suggestion:last-child {
      display: none;
    }
    .suggestion__name {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
    .suggestion__price {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
  @media (max-width: 390px) {
    .more__container {
      padding: 6rem 2rem 4rem;
    }
  }
</style>
<section class="product">
  
</section>
<section class="more">
  <div class="more__container">
  </div>
</section>
`;

class Product extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(productTemplate.content);

    const shadow = document.querySelector("shop_product-component").shadowRoot;

    //PRODUCT EVALUATOR
    const productoBuscado = new URLSearchParams(window.location.search).get("producto");
    let productoACargar = "none";
    for (let i = 0; i < SHOP_PRODUCTS.length; i++) {
      if (productoBuscado == SHOP_PRODUCTS[i].pageName) {
        productoACargar = SHOP_PRODUCTS[i].pageName;
      }
    }
    if (productoACargar == "none") {
      location.replace("/pages/tienda.html");
    }
    const productArrPosition = SHOP_PRODUCTS.findIndex(
      (product) => product.pageName == productoACargar
    );

    //PRODUCT LOADER
    const productsContainer = shadow.querySelector(".product");
    let name = SHOP_PRODUCTS[productArrPosition].name;
    let price = SHOP_PRODUCTS[productArrPosition].price;
    let productImages = SHOP_PRODUCTS[productArrPosition].productImages;

    document.title += " " + name;

    let selections = SHOP_PRODUCTS[productArrPosition].selections;
    let selectorsHTML = "";
    for (let i = 0; i < selections.length; i++) {
      selectorsHTML += `
      <select class="form__select" name="${selections[i].name}" ${
        selections[i].isRequired ? "required" : ""
      }>`;
      for (let j = 0; j < selections[i].options.length; j++) {
        selectorsHTML += `<option class="form__option" value="${selections[i].options[j]}">${selections[i].options[j]}</option>`;
      }
      selectorsHTML += `</select>`;
    }

    let otherInputs = SHOP_PRODUCTS[productArrPosition].otherInputs;
    let otherInputsHTML = "";
    for (let i = 0; i < otherInputs.length; i++) {
      otherInputsHTML += `
      <input
        type="${otherInputs[i].type}"
        class="form__input"
        placeholder="${otherInputs[i].placeholder}"
        name="${otherInputs[i].name}"
        value="${otherInputs[i].value}"
        ${otherInputs[i].isRequired ? "required" : ""} />`;
    }

    productsContainer.innerHTML += `
    <div class="product__images">
      <img
        src="${productImages[0]}"
        alt="Imagen del producto"
        class="product__img" />
      <img
        src="${productImages[1]}"
        alt="Imagen del producto"
        class="product__img" />
      <img
        src="${productImages[2]}"
        alt="Imagen del producto"
        class="product__img" />
      <img
        src="${productImages[3]}"
        alt="Imagen del producto"
        class="product__img" />
    </div>
    <aside class="product__payment">
      <div class="product__sticky">
        <div class="product__data">
          <h2 class="product__name">${name}</h2>
          <span class="product__price">${price}</span>
        </div>
        <form
          class="product__form"
          action="https://formsubmit.co/equipaciones@cffolympia.es"
          method="POST">
          <input type="hidden" name="_subject" value="Nuevo pedido de ${name}" />
          <input type="hidden" name="_next" value="https://cffolympia.es/confirmacion_envio.html">
          <input
            type="hidden"
            name="_url"
            value="https://www.cffolympia.es/pages/producto_tienda.html?producto=camiseta_basica" />
          <input type="hidden" name="Producto" value="${name}" />
          <input
            type="text"
            class="form__input"
            placeholder="NOMBRE COMPLETO JUGADORA"
            name="Nombre"
            required />
          <input
            type="text"
            class="form__input"
            placeholder="CATEGORÍA Y LETRA"
            name="Categoria"
            required />
          <input type="email" class="form__input" placeholder="EMAIL" name="Email" required style="margin-bottom: 2rem;" />
          ${selectorsHTML}
          ${otherInputsHTML}
          <!--<span class="form__text">
            El importe del pedido debe realizarse a la cuenta del Artyco nº ES84 1465 0716 5417 2794 2566
            o bien relizar un Bizum al número 651811147. El justificante de la transferencia debe enviarse al correo
            <a href="mailto:equipaciones@cffolympia.es">equipaciones@cffolympia.es</a>.
          </span> -->
          <button class="form__submit" type="submit">REALIZAR PEDIDO</button>
        </form>
      </div>
    </aside>`;

    //SUGGESTIONS LOADER
    const suggestionsContainer = shadow.querySelector(".more__container");
    for (let i = 1; i <= 5; i++) {
      let name = SHOP_PRODUCTS[i - 1].name;
      let price = SHOP_PRODUCTS[i - 1].price;
      let imgURL = SHOP_PRODUCTS[i - 1].imgURL;
      let hoverImgURL = SHOP_PRODUCTS[i - 1].hoverImgURL;
      let pageURL = SHOP_PRODUCTS[i - 1].pageURL;
      suggestionsContainer.innerHTML += `
      <div class="more__suggestion">
        <a class="suggestion__inner" href="${pageURL}">
          <img
            class="suggestion__image"
            src="${imgURL}"
            alt="Imagen del producto" />
          <img
            class="suggestion__image--hover"
            src="${hoverImgURL}"
            alt="Imagen del producto" />
        </a>
        <div class="suggestion__outer">
          <span class="suggestion__name">${name}</span>
          <span class="suggestion__price">${price}</span>
        </div>
      </div>`;
    }
  }
}

customElements.define("shop_product-component", Product);
