import EVENTS from "/api/events.mjs";

const eventsCarouselTemplate = document.createElement("template");

eventsCarouselTemplate.innerHTML = `
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
.events {
  width: 100%;
  margin: 2rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.events__marquee-track {
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--mint);
  height: 5rem;
  padding: 0.4rem 0;
  flex-shrink: 0;
}
.events__marquee {
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
.events__marquee--right {
  animation: marquee 41s infinite linear reverse;
}
.events__marquee--left {
  animation: marquee 41s infinite linear;
}
.events__marquee::before {
  word-spacing: 0.3rem;
  content: "  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //";
}
.events__marquee::after {
  word-spacing: 0.3rem;
  content: "  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //  EVENTOS  //  EVENTS  //";
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.events__container {
  flex-grow: 1;
  background: var(--blue);
  width: 100%;
  height: calc(44vw / 1.3 + 4rem + 2rem);
  position: relative;
}
.events__wrapper {
  position: absolute;
  padding: 2rem 0;
  top: 0rem;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  height: 100%;
  overflow: -moz-hidden-unscrollable;
  overflow: hidden;
}
.events__carousel {
  height: 100%;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: nowrap;
  white-space: nowrap;
  cursor: grab;
  overflow: scroll;
}
.grabbing {
  cursor: grabbing;
}
.events__event {
  width: 44vw;
  flex-shrink: 0;
  aspect-ratio: 1.3;
  margin-left: 4rem;
  padding: 4rem;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  overflow: hidden;
}
.events__event:first-child {
  margin-left: 4rem;
}
.events__event:last-child {
  margin-right: 4rem;
}
.event__visual-container {
  flex-shrink: 0;
  height: 100%;
  aspect-ratio: 0.706651;
  margin: 0 3rem 0 0;
}
.event__poster {
  height: 100%;
  width: 100%;
  border-radius: 0.1rem;
}
.event__text-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  white-space: normal;
}
.event__title {
  font-family: var(--title);
  font-weight: 800;
  font-size: 12.4rem;
  color: var(--white);
  margin: 0;
  padding: 0;
}
.event__date {
  font-family: var(--title);
  font-weight: 700;
  font-style: italic;
  font-size: 3.6rem;
  letter-spacing: 0.15rem;
  color: var(--white);
  margin: -1.4rem 0 2rem;
  padding: 0;
}
.event__description {
  font-family: var(--text);
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: var(--white);
  margin: 0 0 2.5rem;
  padding: 0;
}
.event__btn {
  flex-grow: 0;
  flex-shrink: 1;
  text-decoration: none;
  font-family: var(--stitle);
  font-weight: 400;
  font-size: 2.8rem;
  color: var(--mint);
  border-radius: 30rem;
  border: 0.3rem solid var(--mint);
  background: transparent;
  padding: 1.4rem 3.5rem;
  margin: 0;
  transition: all 0.3s ease;
}
.event__btn:hover, 
.event__btn:focus {
  color: var(--blue);
  background: var(--mint);
}

@media (max-width: 1780px) {
  .events__container {
    height: calc(48vw / 1.3 + 4rem + 2rem);
  }
  .events__event {
    width: 48vw;
  }
  .event__title {
    font-size: 10.8rem;
  }
  .event__date {
    font-size: 2.8rem;
  }
  .event__description {
    font-size: 1.6rem;
    line-height: 2rem;
  }
  .event__btn {
    font-size: 2.6rem;
    border: 0.25rem solid var(--mint);
  }
}
@media (max-width: 1480px) {
  .events__container {
    height: calc(50vw / 1.3 + 4rem + 2rem);
  }
  .events__event {
    width: 50vw;
  }
}
@media (max-width: 1360px) {
  .events__container {
    height: calc(51vw / 1.3 + 4rem + 2rem);
  }
  .events__event {
    width: 51vw;
  }
  .event__title {
    font-size: 10rem;
  }
  .event__date {
    font-size: 2.4rem;
  }
  .event__description {
    font-size: 1.4rem;
    line-height: 1.7rem;
  }
  .event__btn {
    font-size: 2.3rem;
    border: 0.25rem solid var(--mint);
  }
}
@media (max-width: 1240px) {
  .events__container {
    height: calc(56vw / 1.3 + 4rem + 2rem);
  }
  .events__event {
    width: 56vw;
  }
}
@media (max-width: 1180px) {
  .event__title {
    font-size: 9.2rem;
  }
  .event__date {
    font-size: 2rem;
  }
  .event__description {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  .event__btn {
    font-size: 2rem;
    border: 0.22rem solid var(--mint);
  }
}
@media (max-width: 1130px) {
  .events__container {
    height: calc(64vw / 1.3 + 4rem + 2rem);
  }
  .events__event {
    width: 64vw;
  }
}
@media (max-width: 1000px) {
  .events__container {
    height: calc(72vw / 1.3 + 4rem + 2rem);
  }
  .events__event {
    width: 72vw;
    margin-left: 2rem;
  }
}
@media (max-width: 860px) {
  .events__container {
    height: calc(76vw / 1.3 + 4rem + 2rem);
  }
  .events__event {
    width: 76vw;
  }
  .events__event:first-child {
    margin-left: 3rem;
  }
  .events__event:last-child {
    margin-right: 3rem;
  }
  .event__title {
    font-size: 8.6rem;
  }
  .event__date {
    font-size: 1.6rem;
    margin: -1rem 0 2rem;
  }
  .event__description {
    font-size: 1.1rem;
    line-height: 1.35rem;
  }
  .event__btn {
    font-size: 1.6rem;
    padding: 1.2rem 3.1rem;
    border: 0.22rem solid var(--mint);
  }
}
@media (max-width: 760px) {
  .events__container {
    height: calc(84vw / 1.3 + 4rem + 2rem);
  }
  .events__event {
    width: 84vw;
    margin-left: 2rem;
  }
  .events__event:first-child {
    margin-left: 2rem;
  }
  .events__event:last-child {
    margin-right: 2rem;
  }
  .event__title {
    font-size: 7.5rem;
  }
  .event__date {
    font-size: 1.5rem;
    margin: -0.5rem 0 2rem;
  }
  .event__btn {
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border: 0.22rem solid var(--mint);
  }
}
@media (max-width: 640px) {
  .events__marquee-track {
    height: 4rem;
  }
  .events__marquee {
    font-size: 2.5rem;
    line-height: 3rem;
    border-top: 0.15rem solid var(--blue);
    border-bottom: 0.15rem solid var(--blue);
  }
  .events__wrapper {
    padding: 0rem 0;
  }
  .events__container {
    height: calc(84vw / 1.3 + 4rem);
  }
  .events__event {
    margin-left: 1rem;
  }
  .events__event:first-child {
    margin-left: 0;
  }
  .events__event:last-child {
    margin-right: 6rem;
  }
  .event__title {
    font-size: 6rem;
  }
  .event__date {
    font-size: 1.35rem;
    margin: -0.4rem 0 1.5rem;
  }
  .event__description {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 0 0 2rem;
  }
  .event__btn {
    font-size: 1.35rem;
    border: 0.22rem solid var(--mint);
  }
}
@media (max-width: 590px) {
  .events__container {
    height: calc(90vw / 1.3 + 4rem);
  }
  .events__event {
    width: 90vw;
    margin-left: 1rem;
  }
  .events__event:last-child {
    margin-right: 6rem;
  }
  .event__title {
    font-size: 5.4rem;
  }
  .event__date {
    font-size: 1.3rem;
    margin: -0.4rem 0 1.3rem;
  }
  .event__description {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 0 0 1.8rem;
  }
  .event__btn {
    font-size: 1.3rem;
    border: 0.22rem solid var(--mint);
  }
}
@media (max-width: 540px) {
  .events__container {
    height: calc(98vw / 1.3 + 4rem);
  }
  .events__event {
    width: 98vw;
    margin-left: 1rem;
  }
  .events__event:last-child {
    margin-right: 0rem;
  }
  .event__visual-container {
    margin: 0 2.2rem 0 0;
  }
  .event__title {
    font-size: 5rem;
  }
  .event__date {
    margin: -0.3rem 0 1.2rem;
  }
  .event__description {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 0 0 1.5rem;
  }
  .event__btn {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
    border: 0.17rem solid var(--mint);
  }
}
@media (max-width: 470px) {
  .events__container {
    height: calc(100vw / 1.3);
  }
  .events__event {
    width: 100vw;
    margin-left: 0rem;
  }
  .event__visual-container {
    margin: 0 2.2rem 0 0;
  }
  .event__title {
    font-size: 5rem;
  }
  .event__date {
    margin: -0.3rem 0 1.2rem;
  }
  .event__description {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 0 0 1.5rem;
  }
  .event__btn {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
    border: 0.17rem solid var(--mint);
  }
}
@media (max-width: 410px) {
  .events__container {
    height: calc(100vw / 1.3 - 2rem);
  }
  .event__visual-container {
    margin: 0 2rem 0 0;
  }
  .event__title {
    font-size: 4.4rem;
  }
  .event__date {
    font-size: 1.1rem;
    margin: -0.2rem 0 1.2rem;
  }
  .event__description {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 0 0 1.5rem;
  }
  .event__btn {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
    border: 0.17rem solid var(--mint);
  }
}
@media (max-width: 380px) {
  .events__container {
    height: calc(100vw / 1.3 - 2.5rem);
  }
  .event__title {
    font-size: 4.3rem;
  }
  .event__btn {
    font-size: 1.1rem;
    padding: 0.7rem 1.6rem;
    border: 0.13rem solid var(--mint);
  }
}
@media (max-width: 364px) {
  .events__container {
    height: calc(100vw / 1.3 - 2.8rem);
  }
  .event__visual-container {
    margin: 0 1.7rem 0 0;
  }
  .event__date {
    font-size: 1.1rem;
    margin: -0.2rem 0 1rem;
  }
  .event__description {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 0 0 1.3rem;
  }
  .event__title {
    font-size: 4.1rem;
  }
}
</style>
<section class="events">
  <div class="events__marquee-track">
    <div class="events__marquee events__marquee--right"></div>
  </div>
  <div class="events__container">
    <div class="events__wrapper">
      <div class="events__carousel"></div>
    </div>
  </div>
  <div class="events__marquee-track">
    <div class="events__marquee events__marquee--left"></div>
  </div>
</section>
`;

class EventsSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(eventsCarouselTemplate.content);

    const shadow = document.querySelector("events_section-component").shadowRoot;
    const carousel = shadow.querySelector(".events__carousel");

    //EVENTS LOADING
    for (let i = 0; i < EVENTS.length; i++) {
      let name = EVENTS[i].name;
      let date = EVENTS[i].date;
      let description = EVENTS[i].description;
      let imgURL = EVENTS[i].imgURL;
      let pageURL = EVENTS[i].pageURL;
      carousel.innerHTML += `
      <div class="events__event">
        <div class="event__visual-container">
          <img src="${imgURL}" alt="Póster del evento" class="event__poster" />
        </div>
        <div class="event__text-container">
          <h3 class="event__title">${name}</h3>
          <p class="event__date">${date}</p>
          <p class="event__description">${description}</p>
          <a href="${pageURL}" class="event__btn">VER EVENTO</a>
        </div>
      </div>
      `;
    }

    //CAROSUEL GRABBING
    //const firstImg = shadow.querySelector(".team__player");
    let isDragStart = false;
    let prevPageX;
    let prevScrollLeft;
    let positionDifference;
    // const autoSlide = () => {
    //   positionDifference = Math.abs(positionDifference);
    //   let firstImageWidth = firstImg.clientWidth + 40;
    //   let valDifference = firstImageWidth - positionDifference;
    //   if (carousel.scrollLeft > prevScrollLeft) {
    //     return (carousel.scroll +=
    //       positionDifference > firstImageWidth / 3 ? valDifference : -positionDifference);
    //   }
    //   carousel.scroll -=
    //     positionDifference > firstImageWidth / 3 ? valDifference : -positionDifference;
    // };
    const dragStart = (e) => {
      setTimeout(() => (isDragStart = true), 5);
      prevPageX = e.pageX;
      prevScrollLeft = carousel.scrollLeft;
    };
    const dragging = (e) => {
      if (!isDragStart) {
        return;
      }
      carousel.classList.add("grabbing");
      e.preventDefault();
      positionDifference = e.pageX - prevPageX;
      carousel.scrollLeft = prevScrollLeft - positionDifference;
    };
    const dragStop = () => {
      setTimeout(() => (isDragStart = false), 6);
      carousel.classList.remove("grabbing");
      // autoSlide();
    };
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
  }
}

customElements.define("events_section-component", EventsSection);
