import FAQS from "/api/faqs.mjs";

const faqsTemplate = document.createElement("template");

faqsTemplate.innerHTML = `
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
  .faqs {
    width: 100%;
    margin: 4rem 0 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 8rem 4rem;
  }
  .faqs__question {
    width: 100%;
    border: 0.1rem solid var(--mint);
    border-style: none none solid;
    padding: 4rem 2.6rem 0rem 2.6rem;
    position: relative;
  }
  .faqs__question:first-child {
    border-style: solid none solid;
  }
  .question__toggle {
    position: absolute;
    top: 3.2rem;
    right: 2.6rem;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0 -5px 0 0;
    height: 3.4rem;
    width: 3.4rem;
    transition: all 0.3s ease;
  }
  .question__toggle:hover,
  .question__toggle:focus {
    rotate: 180deg;
    cursor: pointer;
  }
  .question__toggle-icon {
    rotate: 180deg;
    width: 100%;
    height: 100%;
    filter: brightness(0) saturate(100%) invert(84%) sepia(15%) saturate(513%)
      hue-rotate(128deg) brightness(98%) contrast(88%);
  }
  .question__title {
    font-family: var(--text);
    font-weight: 400;
    color: var(--mint);
    font-size: 2rem;
    line-height: 2.4rem;
    padding: 0;
    margin: 0 0 3.8rem;
  }
  .question__answer {
    font-family: var(--text);
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: var(--white);
    text-align: justify;
    margin: 0 0 4rem;
    padding: 0;
  }
  .question__answer br {
    height: 1rem;
    line-height: 1rem;
    content: "";
    display: block;
  }

  @media (max-width: 920px) {
    .faqs {
      padding: 0 4rem 4rem;
    }
    .question__answer {
      text-align: left;
    }
  }
  @media (max-width: 740px) {
    .question__title {
      font-size: 1.7rem;
      line-height: 2rem;
    }
    .question__answer {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
  @media (max-width: 620px) {
    .question__title {
      font-size: 1.5rem;
      line-height: 1.7rem;
    }
  }
  @media (max-width: 560px) {
    .question__title {
      font-size: 1.4rem;
      line-height: 1.65rem;
      margin: 0 0 2.8rem;
    }
    .question__answer {
      font-size: 1.1rem;
      line-height: 1.3rem;
      margin: 0 0 3rem;
    }
    .faqs__question {
      padding: 3rem 4rem 0rem 1.3rem;
    }
    .question__toggle {
      top: 2.2rem;
      right: 1.3rem;
    }
  }
  @media (max-width: 460px) {
    .faqs {
      padding: 0 2rem 4rem;
    }
  }
</style>
<section class="faqs">
  
</section>
`;

class Faqs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(faqsTemplate.content);

    const shadow = document.querySelector("faqs-component").shadowRoot;
    const faqsContainer = shadow.querySelector(".faqs");

    for (let i = 1; i <= FAQS.length; i++) {
      let question = FAQS[i - 1].question;
      let answer = FAQS[i - 1].answer;
      faqsContainer.innerHTML += `
      <div class="faqs__question">
        <button class="question__toggle question__toggle--${i}">
          <img
            src="/public/img/general/toggle_arrow.png"
            class="question__toggle-icon"
            alt="Pincha aquí para ver la respuesta" />
        </button>
        <h2 class="question__title">${question}</h2>
        <p class="question__answer">${answer}</p>
      </div>`;
    }

    const answers = [...shadow.querySelectorAll(".question__answer")];
    const toggles = [...shadow.querySelectorAll(".question__toggle")];
    const toggleIcons = [...shadow.querySelectorAll(".question__toggle-icon")];

    for (let i = 0; i < answers.length; i++) {
      answers[i].style.display = "none";

      toggles[i].addEventListener("click", function () {
        if (answers[i].style.display == "none") {
          answers[i].style.display = "block";
          toggleIcons[i].style.rotate = "0deg";
        } else if (answers[i].style.display == "block") {
          answers[i].style.display = "none";
          toggleIcons[i].style.rotate = "180deg";
        }
      });
    }
  }
}

customElements.define("faqs-component", Faqs);
