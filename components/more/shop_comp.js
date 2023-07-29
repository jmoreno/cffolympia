import SHOP_PRODUCTS from "/api/shopProducts.mjs";

const shopTemplate = document.createElement("template");

shopTemplate.innerHTML = `
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
  .shop {
    width: 100%;
    margin: 8rem 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .shop__marquee-track {
    position: fixed;
    z-index: 1000;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: var(--mint);
    height: 4rem;
    padding: 0.4rem 0;
    flex-shrink: 0;
  }
  .shop__marquee {
    position: relative;
    font-size: 2.5rem;
    line-height: 3rem;
    color: var(--blue);
    font-family: var(--title);
    font-weight: 700;
    white-space: nowrap;
    height: 100%;
    margin: 0;
    padding: 0;
    border-top: 0.17rem solid var(--blue);
    border-bottom: 0.17rem solid var(--blue);
  }
  .shop__marquee--right {
    animation: marquee 41s infinite linear reverse;
  }
  .shop__marquee--left {
    animation: marquee 41s infinite linear;
  }
  .shop__marquee::before {
    word-spacing: 0.3rem;
    content: "  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  // TIENDA  //  SHOP  //  TIENDA  //  SHOP  //";
  }
  .shop__marquee::after {
    word-spacing: 0.3rem;
    content: "  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  //  TIENDA  //  SHOP  // TIENDA  //  SHOP  //  TIENDA  //  SHOP  //";
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .shop__container {
    width: 100%;
    position: relative;
    padding: 8rem 4rem 6rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem 1rem;
    background-color: var(--blue);
  }
  .shop__product {
    flex-basis: calc((100% - 4rem) / 5);
    width: 100%;
    display: flex;
    flex-direction: column;
    filter: brightness(125%);
  }
  .product__inner {
    text-decoration: none;
    width: 100%;
    aspect-ratio: 0.7;
    background: var(--blue);
    padding: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .product__image, 
  .product__image--hover {
    width: 100%;
    object-fit: fill;
    transition: all 0.3s ease;
  }
  .product__image--hover {
    display: none;
  }
  .shop__product:hover .product__image,
  .shop__product:focus .product__image {
    display: none;
  }
  .shop__product:hover .product__image--hover,
  .shop__product:focus .product__image--hover {
    display: block;
    transform: scale(102%);
  }
  .product__outer {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .product__name {
    margin: 1rem 0 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: var(--white);
  }
  .product__price {
    margin: 0.3rem 0 0;
    padding: 0;
    font-family: var(--text);
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: var(--white);
  }

  @media (max-width: 1640px) {
    .shop__product {
      flex-basis: calc((100% - 3rem) / 4);
    }
  }
  @media (max-width: 1360px) {
    .shop__product {
      flex-basis: calc((100% - 2rem) / 3);
    }
  }
  @media (max-width: 1000px) {
    .product__name {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
    .product__price {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
  }
  @media (max-width: 940px) {
    .shop__product {
      flex-basis: calc((100% - 1rem) / 2);
    }
  }
  @media (max-width: 660px) {
    .shop__container {
      padding: 6rem 2rem 4rem;
    }
    .product__name {
      font-size: 1.15rem;
      line-height: 1.15rem;
    }
    .product__price {
      font-size: 1.15rem;
      line-height: 1.15rem;
    }
  }
  @media (max-width: 540px) {
    .product__name {
      font-size: 1.1rem;
      line-height: 1.1rem;
    }
    .product__price {
      font-size: 1.1rem;
      line-height: 1.1rem;
    }
  }
  @media (max-width: 520px) {
    .product__name {
      font-size: 1.05rem;
      line-height: 1.05rem;
    }
    .product__price {
      font-size: 1.05rem;
      line-height: 1.05rem;
    }
  }
  @media (max-width: 500px) {
    .product__name {
      font-size: 1rem;
      line-height: 1rem;
    }
    .product__price {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
  @media (max-width: 480px) {
    .shop__container {
      padding: 8rem 4rem 6rem;
    }
    .shop__product {
      flex-basis: calc(100%);
    }
    .product__name {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
    .product__price {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
  @media (max-width: 390px) {
    .shop__container {
      padding: 6rem 2rem 4rem;
    }
  }
</style>
<section class="shop">
  <div class="shop__marquee-track">
    <div class="shop__marquee shop__marquee--right"></div>
  </div>

  <div class="shop__container">
    
  </div>
</section>
`;

class Shop extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(shopTemplate.content);

    //SHOP LOADER
    const shadow = document.querySelector("shop-component").shadowRoot;
    const productsContainer = shadow.querySelector(".shop__container");
    for (let i = 1; i <= SHOP_PRODUCTS.length; i++) {
      let name = SHOP_PRODUCTS[i - 1].name;
      let price = SHOP_PRODUCTS[i - 1].price;
      let imgURL = SHOP_PRODUCTS[i - 1].imgURL;
      let hoverImgURL = SHOP_PRODUCTS[i - 1].hoverImgURL;
      let pageURL = SHOP_PRODUCTS[i - 1].pageURL;
      productsContainer.innerHTML += `
      <div class="shop__product">
        <a class="product__inner" href="${pageURL}">
          <img
            class="product__image"
            src="${imgURL}"
            alt="Imagen del Producto" />
          <img
            class="product__image--hover"
            src="${hoverImgURL}"
            alt="Imagen del Producto" />
        </a>
        <div class="product__outer">
          <span class="product__name">${name}</span>
          <span class="product__price">${price}</span>
        </div>
      </div>`;
    }
  }
}

customElements.define("shop-component", Shop);
