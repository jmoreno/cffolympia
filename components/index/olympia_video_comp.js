import VIDEOS from "/api/videos.mjs";

const videosCarouselTemplate = document.createElement("template");

videosCarouselTemplate.innerHTML = `
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
.videos {
  padding: 4rem;
  overflow-x: scroll;
}
.videos__title {
  font-family: var(--title);
  font-weight: 800;
  font-size: 10rem;
  color: var(--white);
  margin: 0 0 0.5rem;
  padding: 0;
}
.videos__frame {
  border-top: 0.1rem solid var(--white);
  /* border-bottom: 0.1rem solid var(--white); */
  height: calc(((100vw - 14rem) / 4 + 4rem) / 1.78 + 6rem);
  position: relative;
}
.videos__wrapper {
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
.videos__carousel {
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
.videos__episode {
  width: calc((100% - 14rem) / 4);
  flex-shrink: 0;
  aspect-ratio: 1.78;
  border-radius: 1rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-decoration: none;
  color: var(--white);
}
.videos__episode:first-child {
  margin-left: 4rem;
}
.videos__episode:last-child {
  margin-right: 4rem;
}
.episode__img {
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 1.78;
  border-radius: 1rem;
}
.episode__text-content {
  height: 4rem;
  width: 100%;
  padding: 1rem 0;
}
.episode__name {
  font-family: var(--text);
  font-weight: 400;
  font-size: 1.7rem;
  color: var(--white);
  margin: 0;
  padding: 0;
}

@media (max-width: 1630px) {
  .episode__name {
    font-size: 1.5rem;
  }
}
@media (max-width: 1510px) {
  .videos__frame {
    height: calc(((100vw - 12rem) / 3 + 4rem) / 1.78 + 6rem);
  }
  .videos__episode {
    width: calc((100% - 12rem) / 3);
  }
}
@media (max-width: 1250px) {
  .videos__frame {
    height: calc(((100vw - 10.6rem) / 2.3 + 4rem) / 1.78 + 6rem);
  }
  .videos__episode {
    width: calc((100% - 10.6rem) / 2.3);
  }
}
@media (max-width: 980px) {
  .videos__title {
    font-size: 8rem;
  }
  .episode__name {
    font-size: 1.3rem;
  }
}
@media (max-width: 800px) {
  .videos__frame {
    height: calc(((100vw - 9rem) / 1.5 + 4rem) / 1.78 + 6rem);
  }
  .videos__episode {
    width: calc((100% - 9rem) / 1.5);
  }
}
@media (max-width: 580px) {
  .videos {
    padding: 2rem 4rem 0;
    overflow-x: scroll;
  }
  .videos__frame {
    height: calc(((100vw - 8.4rem) / 1.2 + 4rem) / 1.78 + 6rem);
  }
  .videos__episode {
    width: calc((100% - 8.4rem) / 1.2);
  }
}
@media (max-width: 460px) {
  .videos__title {
    font-size: 7rem;
  }
  .videos__frame {
    height: calc(((100vw - 8.1rem) / 1.05 + 4rem) / 1.78 + 6rem);
  }
  .videos__episode {
    width: calc((100% - 8.1rem) / 1.05);
  }
}
@media (max-width: 400px) {
  .videos__title {
    font-size: 5.6rem;
  }
  .videos__frame {
    height: calc(((100vw - 8rem) / 1 + 4rem) / 1.78 + 6rem);
  }
  .videos__episode {
    width: calc((100% - 8rem) / 1);
  }
  .episode__name {
    font-size: 1.2rem;
  }
}
</style>
<section class="videos">
  <h2 class="videos__title">CFF OLYMPIA TV</h2>
  <div class="videos__frame">
    <div class="videos__wrapper">
      <div class="videos__carousel"></div>
    </div>
  </div>
</section>
`;

class VideoSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(videosCarouselTemplate.content);

    const shadow = document.querySelector("video_section-component").shadowRoot;
    const carousel = shadow.querySelector(".videos__carousel");

    //EPISODES LOADING
    for (let i = 0; i < VIDEOS.length; i++) {
      let name = VIDEOS[i].name;
      let imgURL = VIDEOS[i].imgURL;
      let videoURL = VIDEOS[i].videoURL;
      carousel.innerHTML += `
      <div ondblclick="location.href='${videoURL}'" class="videos__episode">
        <img src="${imgURL}" alt="Vídeo del Olympia" class="episode__img" />
        <div class="episode__text-content">
          <p class="episode__name">${name}</p>
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

customElements.define("video_section-component", VideoSection);
