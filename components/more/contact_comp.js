const contactTemplate = document.createElement("template");

contactTemplate.innerHTML = `
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
.contact {
  width: 100%;
  margin: 8rem 0 0;
  min-height: calc(100vh - 8rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 4rem 4rem;
}
.contact_info {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 0 2rem;
}
.info_container {
  width: 100%;
  padding: 2.5rem 3rem 3rem;
  border: 0.2rem solid var(--mint);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
}
.info_container:not(:last-child) {
  margin-right: 2rem;
}
.info_title {
  font-family: var(--title);
  font-weight: 800;
  font-size: 14rem;
  color: var(--mint);
  margin: 0 0 2rem;
  padding: 0;
}
.info_anchor {
  margin: 0;
  width: 100%;
  background: var(--blue);
  border-radius: 500rem;
  border: 0.3rem solid var(--mint);
  position: relative;
  font-family: var(--stitle);
  font-weight: 400;
  font-size: 3rem;
  color: var(--mint);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
.contact_maps {
  width: 100%;
  flex-grow: 1;
  padding: 2.5rem;
  border: 0.2rem solid var(--mint);
  border-radius: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.contact_maps iframe {
  border-radius: 1rem;
  height: 100%;
  min-height: 30rem;
  width: 100%;
  flex-grow: 1;
}

@media (max-width: 1440px) {
  .info_title {
    font-size: 12rem;
  }
  .info_anchor {
    font-size: 2.5rem;
    padding: 1.3rem 0;
  }
}
@media (max-width: 1240px) {
  .info_title {
    font-size: 11rem;
  }
  .info_anchor {
    font-size: 2.2rem;
    padding: 1.2rem 0;
  }
}
@media (max-width: 1120px) {
  .info_title {
    font-size: 10rem;
  }
  .info_anchor {
    font-size: 2rem;
    padding: 1.1rem 0;
  }
}
@media (max-width: 1040px) {
  .contact_info {
    margin: 0 0 1.5rem;
  }
  .info_container {
    padding: 1.6rem 2rem 2rem;
  }
  .info_container:not(:last-child) {
    margin-right: 1.5rem;
  }
  .info_anchor {
    border: 0.25rem solid var(--mint);
  }
  .contact_maps {
    padding: 2rem;
  }
}
@media (max-width: 1000px) {
  .contact_info {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .info_container:first-child {
    flex-basis: calc(50% - 0.75rem);
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    flex-shrink: 0;
  }
  .info_container:nth-child(2) {
    flex-basis: calc(50% - 0.75rem);
    margin-right: 0;
    margin-bottom: 1.5rem;
    flex-shrink: 0;
  }
  .info_container:last-child {
    flex-basis: calc(100%);
    margin-bottom: 0;
  }
}
@media (max-width: 675px) {
  .contact_info {
    flex-direction: column;
    flex-wrap: wrap;
  }
  .info_container:first-child {
    flex-basis: unset;
    margin-right: 0;
  }
  .info_container:nth-child(2) {
    flex-basis: unset;
    margin-right: 0;
  }
  .info_container:last-child {
    flex-basis: unset;
  }
}
@media (max-width: 460px) {
  .contact {
    padding: 0 2rem 4rem;
  }
}
</style>
<section class="contact">
  <div class="contact_info">
    <div class="info_container info_phone">
      <h2 class="info_title">TELÉFONO</h2>
      <a href="tel:626487563" class="info_anchor">Llama al 626 48 75 63</a>
    </div>
    <div class="info_container info_email">
      <h2 class="info_title">EMAIL</h2>
      <a href="mailto:info@cffolympia.es" class="info_anchor">info@cffolympia.es</a>
    </div>
    <div class="info_container info_place">
      <h2 class="info_title">UBICACIÓN</h2>
      <a
        href="https://www.google.es/maps/place/Recinto+Ferial/@40.5096523,-3.8916099,17z/data=!3m1!4b1!4m6!3m5!1s0xd418338f1ae0d99:0x84ae9b6eb02d6356!8m2!3d40.5096523!4d-3.8916099!16s%2Fg%2F11bc7cx3hz?hl=es&entry=ttu"
        class="info_anchor">
        Recinto Ferial Las Rozas
      </a>
    </div>
  </div>
  <div class="contact_maps">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.4450878231905!2d-3.8916098999999997!3d40.5096523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418338f1ae0d99%3A0x84ae9b6eb02d6356!2sRecinto%20Ferial!5e0!3m2!1ses!2ses!4v1688886410440!5m2!1ses!2ses"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>
`;

class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(contactTemplate.content);
  }
}

customElements.define("contact-component", Contact);
