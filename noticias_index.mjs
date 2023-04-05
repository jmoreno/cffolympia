import { articulos } from "./noticias.mjs"

const newsGallery = document.querySelector(".main-news__selector");

for (let i = 4; i >= 1; i--) {
    newsGallery.innerHTML += 
    `<a class="news news${5 - i}" onmouseover="mainNewsFunc('${5 - i}')" href="./4-Noticias/noticias_index.html#${5 - i == 1 ? 'main" id="main"' :  4 - i}" style="background-image: linear-gradient(#00000000, #00000070), url('${articulos[i == 4 ? articulos.length - 1 : i == 3 ? articulos.length - 2 : i == 2 ? articulos.length - 3 : articulos.length - 4].imgLink}');">
        <h3>${articulos[i == 4 ? articulos.length - 1 : i == 3 ? articulos.length - 2 : i == 2 ? articulos.length - 3 : articulos.length - 4].title}</h3>
        <h5>${articulos[i == 4 ? articulos.length - 1 : i == 3 ? articulos.length - 2 : i == 2 ? articulos.length - 3 : articulos.length - 4].tag} 
        &nbsp;·&nbsp; ${articulos[i == 4 ? articulos.length - 1 : i == 3 ? articulos.length - 2 : i == 2 ? articulos.length - 3 : articulos.length - 4].date}</h5>
    </a>`;

    let article = document.querySelector(`#MainNews .news${5 - i}`);    
    if (i == 1) {article.style.boxShadow = `none`};
};