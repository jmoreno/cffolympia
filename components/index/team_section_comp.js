import { SeniorA } from "/api/club.mjs";

const teamCarouselTemplate = document.createElement("template");

teamCarouselTemplate.innerHTML = `
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
.team {
  padding: 4rem;
  overflow-x: scroll;
}
.team__title {
  font-family: var(--title);
  font-weight: 800;
  font-size: 10rem;
  color: var(--white);
  margin: 0 0 0.5rem;
  padding: 0;
}
.team__frame {
  border-top: 0.1rem solid var(--white);
  /* border-bottom: 0.1rem solid var(--white); */
  height: calc((100vw - 8rem - 8rem) / 5 + 4rem);
  position: relative;
}
.team__wrapper {
  position: absolute;
  padding: 2rem 0;
  top: 0rem;
  bottom: 0rem;
  left: -4rem;
  right: -4rem;
  height: 100%;
  overflow: -moz-hidden-unscrollable;
  overflow: hidden;
}
.team__carousel {
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
.team__player {
  width: calc((100% - 16rem) / 5);
  flex-shrink: 0;
  aspect-ratio: 1;
  background: var(--mint);
  border-radius: 1rem;
  margin-left: 2rem;
}
.team__player:first-child {
  margin-left: 4rem;
}
.team__player:last-child {
  margin-right: 4rem;
}
.player__text-content {
  height: calc(100% - 1rem);
  width: 100%;
  padding: 1rem 2rem;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.player__name {
  font-family: var(--title);
  font-weight: 700;
  font-size: 6rem;
  color: var(--white);
  margin: 0;
  padding: 0;
}

@media (max-width: 1700px) {
  .player__name {
    font-size: 5rem;
  }
}
@media (max-width: 1510px) {
  .team__frame {
    height: calc((100vw - 8rem - 6rem) / 4 + 4rem);
  }
  .team__player {
    width: calc((100% - 14rem) / 4);
  }
}
@media (max-width: 1250px) {
  .team__frame {
    height: calc((100vw - 8rem - 4rem) / 3 + 4rem);
  }
  .team__player {
    width: calc((100% - 12rem) / 3);
  }
}
@media (max-width: 980px) {
  .team__title {
    font-size: 8rem;
  }
  .player__name {
    font-size: 4.2rem;
  }
}
@media (max-width: 800px) {
  .team__frame {
    height: calc((100vw - 8rem - 2rem) / 2 + 4rem);
  }
  .team__player {
    width: calc((100% - 10rem) / 2);
  }
}
@media (max-width: 580px) {
  .team {
    padding: 2rem 4rem;
    overflow-x: scroll;
  }
  .team__frame {
    height: calc((100vw - 8rem - 1.5rem) / 1.5 + 4rem);
  }
  .team__player {
    width: calc((100% - 9.5rem) / 1.5);
  }
}
@media (max-width: 460px) {
  .team__title {
    font-size: 7rem;
  }
  .team__frame {
    height: calc((100vw - 8rem - 1.3rem) / 1.3 + 4rem);
  }
  .team__player {
    width: calc((100% - 9.3rem) / 1.3);
  }
}
@media (max-width: 400px) {
  .team__title {
    font-size: 5.6rem;
  }
  .team__frame {
    height: calc((100vw - 8rem - 1.15rem) / 1.15 + 4rem);
  }
  .team__player {
    width: calc((100% - 9.15rem) / 1.15);
  }
  .player__name {
    font-size: 3.6rem;
  }
}
</style>
<section class="team">
<h2 class="team__title">PRIMER EQUIPO</h2>
  <div class="team__frame">
    <div class="team__wrapper">
      <div class="team__carousel"></div>
    </div>
  </div>
</section>
`;

class TeamSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(teamCarouselTemplate.content);

    const shadow = document.querySelector("team_section-component").shadowRoot;
    const carousel = shadow.querySelector(".team__carousel");

    //PLAYERS LOADING
    for (let i = 0; i < SeniorA.players.length; i++) {
      //Remember that the img is th cut one and the bg goes as the bg of team_player div.
      //...this is so that i can do certain animations. The bg image is selected depending on the position
      //One day I might add some new data under the h3

      // [ ] We still have to add the element for the dorsal which appears behind the img and before the bg
      let name = SeniorA.players[i].name;
      let imgURL = SeniorA.players[i].imgURL;
      let position = SeniorA.players[i].position;
      carousel.innerHTML += `
      <div class="team__player" style="background-image: url(${
        position == "delantera"
          ? "public/img/club/background/delantera.jpg"
          : position == "medio"
          ? "public/img/club/background/mediocentro.jpg"
          : position == "defensa"
          ? "public/img/club/background/defensa.jpg"
          : "public/img/club/background/portera.jpg"
      });">
          <div class="player__text-content">
            <h3 class="player__name">${name}</h3>
          </div>
          <img src="${imgURL}" alt="" class="player__img" />
      </div>
      `;
    }
    for (let i = 0; i < SeniorA.staff.length; i++) {
      //Remember that the img is th cut one and the bg goes as the bg of team_player div.
      //...this is so that i can do certain animations. The bg image is selected depending on the position
      //One day I might add some new data under the h3

      // [ ] We still have to add the element for the dorsal which appears behind the img and before the bg
      let name = SeniorA.staff[i].name;
      let imgURL = SeniorA.staff[i].imgURL;
      carousel.innerHTML += `
      <div class="team__player" style="background-image: url('public/img/club/background/staff.jpg');">
          <div class="player__text-content">
            <h3 class="player__name">${name}</h3>
          </div>
          <img src="${imgURL}" alt="" class="player__img" />
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

customElements.define("team_section-component", TeamSection);
