let SHOP_PRODUCTS = [
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "LLAVERO PERSONALIZADO (NUEVO)",
  //   price: "5,00 EUR",
  //   imgURL: "/public/img/shop/llavero_front.png",
  //   hoverImgURL: "/public/img/shop/llavero_back.png",
  //   productImages: [
  //     "/public/img/noticias/noticia_3.JPG",
  //     "/public/img/noticias/noticia_3.JPG",
  //     "/public/img/noticias/noticia_3.JPG",
  //     "/public/img/noticias/noticia_3.JPG",
  //   ],
  //   pageName: "llavero_personalizado",
  //   pageURL: "/pages/producto_tienda.html?producto=llavero_personalizado",
  //   selections: [],
  //   otherInputs: [
  //     {
  //       type: "text",
  //       name: "Nombre en llavero",
  //       placeholder: "Nombre en llavero",
  //       value: "",
  //       isRequired: true,
  //     },
  //     {
  //       type: "number",
  //       name: "Dorsal en llavero",
  //       placeholder: "Dorsal en llavero",
  //       value: "",
  //       isRequired: true,
  //     },
  //   ],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "SUDADERA BLANCA OLYMPIA",
    price: "21,50 EUR",
    imgURL: "/public/img/shop/hoodie_front.png",
    hoverImgURL: "/public/img/shop/hoodie_front.png",
    productImages: [
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "sudadera_blanca",
    pageURL: "/pages/producto_tienda.html?producto=sudadera_blanca",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L"],
      },
    ],
    otherInputs: [
      {
        type: "hidden",
        name: "_cc",
        placeholder: "",
        value: "info@artycosl.com",
        isRequired: false,
      },
    ],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA BÁSICA OLYMPIA (NUEVO)",
    price: "12,00 EUR",
    imgURL: "/public/img/shop/camiseta_basica_front.png",
    hoverImgURL: "/public/img/shop/camiseta_basica_front.png",
    productImages: [
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "camiseta_basica",
    pageURL: "/pages/producto_tienda.html?producto=camiseta_basica",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: S", "Talla: M", "Talla: L"],
      },
      {
        name: "Color",
        isRequired: true,
        options: ["Azul Oscuro", "Blanco"],
      },
    ],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CHUBASQUERO OLYMPIA (NUEVO)",
    price: "47,00 EUR",
    imgURL: "/public/img/shop/chubasquero_front.png",
    hoverImgURL: "/public/img/shop/chubasquero_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/chubasquero/adidas/entrada-22-olympia-las-rozas-team-navy-blue",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CHUBASQUERO OLYMPIA NIÑA (NUEVO)",
    price: "47,00 EUR",
    imgURL: "/public/img/shop/chubasquero_front.png",
    hoverImgURL: "/public/img/shop/chubasquero_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/chubasquero/adidas/entrada-22-nino-olympia-las-rozas-team-navy-blue",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CINTAS DEL PELO OLYMPIA",
  //   price: "9,00 EUR",
  //   imgURL: "/public/img/shop/cintas_front.png",
  //   hoverImgURL: "/public/img/shop/cintas_front.png",
  //   productImages: [
  //     "/public/img/noticias/noticia_3.JPG",
  //     "/public/img/noticias/noticia_11.JPG",
  //     "/public/img/noticias/noticia_13.JPG",
  //     "/public/img/noticias/noticia_1.JPG",
  //   ],
  //   pageName: "cintas_pelo",
  //   pageURL: "/pages/producto_tienda.html?producto=cintas_pelo",
  //   selections: [
  //     {
  //       name: "Color",
  //       isRequired: true,
  //       options: [
  //         "Azul Oscuro",
  //         "Blanco",
  //         "Rosa",
  //         "1ud Rosa & 1ud Blanco (15 € total)",
  //         "1ud Azul Osc & 1ud Blanco (15 € total)",
  //         "2uds Azul Oscuro (15 € total)",
  //         "2uds Blanco (15 € total)",
  //         "2uds Rosa (15 € total)",
  //       ],
  //     },
  //     {
  //       name: "Texto",
  //       isRequired: true,
  //       options: [
  //         "Texto: Olympia",
  //         'Texto: "Nombre personalizado"',
  //         'Texto: "Nombre personalizado" + "Dorsal"',
  //         'Texto: "Nombre personalizado" + Olympia',
  //         'Texto: "Nombre personalizado" + "Dorsal" + Olympia',
  //       ],
  //     },
  //   ],
  //   otherInputs: [
  //     {
  //       type: "text",
  //       name: "Nombre personalizado (si aplica)",
  //       placeholder: "Nombre personalizado (si aplica)",
  //       value: "",
  //       isRequired: false,
  //     },
  //     {
  //       type: "number",
  //       name: "Dorsal (si aplica)",
  //       placeholder: "Dorsal (si aplica)",
  //       value: "",
  //       isRequired: false,
  //     },
  //   ],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "BUFANDA OLYMPIA",
  //   price: "15,00 EUR",
  //   imgURL: "/public/img/shop/bufanda_front.png",
  //   hoverImgURL: "/public/img/shop/bufanda_front.png",
  //   productImages: [
  //     "/public/img/noticias/noticia_3.JPG",
  //     "/public/img/noticias/noticia_3.JPG",
  //     "/public/img/noticias/noticia_3.JPG",
  //     "/public/img/noticias/noticia_3.JPG",
  //   ],
  //   pageName: "bufanda",
  //   pageURL: "/pages/producto_tienda.html?producto=bufanda",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "ABRIGO OLYMPIA",
    price: "61,00 EUR",
    imgURL: "/public/img/shop/abrigo_front.png",
    hoverImgURL: "/public/img/shop/abrigo_front.png",
    productImages: [
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "abrigo",
    pageURL: "/pages/producto_tienda.html?producto=abrigo",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L", "Talla: 2XL", "Talla: 3XL"],
      },
    ],
    otherInputs: [
      {
        type: "hidden",
        name: "_cc",
        placeholder: "",
        value: "info@artycosl.com",
        isRequired: false,
      },
    ],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PACK JUGADORAS CANTERA",
    price: "230,00 EUR",
    imgURL: "/public/img/escudos/olympia.png",
    hoverImgURL: "/public/img/escudos/olympia.png",
    productImages: [],
    pageName: "-",
    pageURL: "https://www.futbolemotion.com/es/comprar/pack/futbol/olympia-jugadoras-cantera",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PACK PORTERAS CANTERA",
    price: "230,00 EUR",
    imgURL: "/public/img/escudos/olympia.png",
    hoverImgURL: "/public/img/escudos/olympia.png",
    productImages: [],
    pageName: "-",
    pageURL: "https://www.futbolemotion.com/es/comprar/pack/futbol/olympia-porteras-cantera",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PACK VETERANAS NO FEDERADAS",
    price: "105,00 EUR",
    imgURL: "/public/img/escudos/olympia.png",
    hoverImgURL: "/public/img/escudos/olympia.png",
    productImages: [],
    pageName: "-",
    pageURL: "https://www.futbolemotion.com/es/comprar/pack/futbol/veteranas-no-federadas-olympia",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PACK JUEGO VETERANAS NO FEDERADAS",
    price: "90,00 EUR",
    imgURL: "/public/img/escudos/olympia.png",
    hoverImgURL: "/public/img/escudos/olympia.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pack/futbol/juego-veteranas-no-federadas-olympia",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA COMPETICIÓN AZUL",
    price: "40,00 EUR",
    imgURL: "/public/img/shop/camiseta_azul_front.png",
    hoverImgURL: "/public/img/shop/camiseta_azul_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/competition-21-miteam-mc-mujer-olympia-las-rozas-navy-blue-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA COMPETICIÓN AZUL NIÑA",
    price: "40,00 EUR",
    imgURL: "/public/img/shop/camiseta_azul_front.png",
    hoverImgURL: "/public/img/shop/camiseta_azul_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/competition-21-miteam-mc-nino-olympia-las-rozas-navy-blue-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA COMPETICIÓN MINT",
    price: "20,00 EUR",
    imgURL: "/public/img/shop/camiseta_mint_front.png",
    hoverImgURL: "/public/img/shop/camiseta_mint_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-mujer-olympia-clear-mint",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA COMPETICIÓN MINT NIÑA",
    price: "20,00 EUR",
    imgURL: "/public/img/shop/camiseta_mint_front.png",
    hoverImgURL: "/public/img/shop/camiseta_mint_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-nino-olympia-clear-mint",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA PORTERA AMARILLA",
    price: "40,00 EUR",
    imgURL: "/public/img/shop/camiseta_amarilla_front.png",
    hoverImgURL: "/public/img/shop/camiseta_amarilla_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/competition-21-miteam-mc-mujer-olympia-las-rozas-yellow-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA PORTERA AMARILLA NIÑA",
    price: "40,00 EUR",
    imgURL: "/public/img/shop/camiseta_amarilla_front.png",
    hoverImgURL: "/public/img/shop/camiseta_amarilla_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/competition-21-miteam-mc-nino-olympia-las-rozas-yellow-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA PORTERA ROSA",
    price: "20,00 EUR",
    imgURL: "/public/img/shop/camiseta_rosa_front.png",
    hoverImgURL: "/public/img/shop/camiseta_rosa_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-mujer-olympia-semi-pink-glow",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA PORTERA ROSA NIÑA",
    price: "20,00 EUR",
    imgURL: "/public/img/shop/camiseta_rosa_front.png",
    hoverImgURL: "/public/img/shop/camiseta_rosa_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-nino-olympia-semi-pink-glow",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN AZUL OLYMPIA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/pantalon_azul_front.png",
    hoverImgURL: "/public/img/shop/pantalon_azul_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/squadra-21-mujer-olympia-team-navy-blue-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN AZUL OLYMPIA NIÑA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/pantalon_azul_front.png",
    hoverImgURL: "/public/img/shop/pantalon_azul_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/squadra-21-nino-olympia-team-navy-blue-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN MINT OLYMPIA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/pantalon_mint_front.png",
    hoverImgURL: "/public/img/shop/pantalon_mint_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-mujer-olympia-clear-mint",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN MINT OLYMPIA NIÑA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/pantalon_mint_front.png",
    hoverImgURL: "/public/img/shop/pantalon_mint_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-nino-olympia-clear-mint",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN AMARILLO OLYMPIA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/pantalon_amarillo_front.png",
    hoverImgURL: "/public/img/shop/pantalon_amarillo_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/squadra-21-olympia-team-yellow-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN AMARILLO OLYMPIA NIÑA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/pantalon_amarillo_front.png",
    hoverImgURL: "/public/img/shop/pantalon_amarillo_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/squadra-21-nino-olympia-team-yellow-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN NEGRO OLYMPIA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/pantalon_negro_front.png",
    hoverImgURL: "/public/img/shop/pantalon_negro_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-mujer-olympia-black",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN NEGRO OLYMPIA NIÑA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/pantalon_negro_front.png",
    hoverImgURL: "/public/img/shop/pantalon_negro_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-nino-olympia-black",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "MEDIAS AZULES OLYMPIA",
    price: "8,00 EUR",
    imgURL: "/public/img/shop/medias_azules_front.png",
    hoverImgURL: "/public/img/shop/medias_azules_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/medias/adidas/milano-23-cff-olympia-las-rozas-team-navy-blue-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "MEDIAS BLANCAS OLYMPIA",
    price: "8,00 EUR",
    imgURL: "/public/img/shop/medias_blancas_front.png",
    hoverImgURL: "/public/img/shop/medias_blancas_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/medias/adidas/milano-23-cff-olympia-las-rozas-white-black",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "MEDIAS AMARILLAS OLYMPIA",
    price: "8,00 EUR",
    imgURL: "/public/img/shop/medias_amarillas_front.png",
    hoverImgURL: "/public/img/shop/medias_amarillas_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/medias/adidas/milano-23-olympia-las-rozas-team-yellow-black",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "MEDIAS NEGRAS OLYMPIA",
    price: "8,00 EUR",
    imgURL: "/public/img/shop/medias_negras_front.png",
    hoverImgURL: "/public/img/shop/medias_negras_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/medias/adidas/milano-23-cff-olympia-las-rozas-black-white",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "SUDADERA MINT OLYMPIA",
    price: "30,00 EUR",
    imgURL: "/public/img/shop/sudadera_mint_front.png",
    hoverImgURL: "/public/img/shop/sudadera_mint_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/sudadera/adidas/entrada-22-training-mujer-olympia-clear-mint",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "SUDADERA MINT OLYMPIA NIÑA",
    price: "30,00 EUR",
    imgURL: "/public/img/shop/sudadera_mint_front.png",
    hoverImgURL: "/public/img/shop/sudadera_mint_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/sudadera/adidas/entrada-22-training-nino-olympia-clear-mint",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN LARGO OLYMPIA",
    price: "23,00 EUR",
    imgURL: "/public/img/shop/pantalon_largo_front.png",
    hoverImgURL: "/public/img/shop/pantalon_largo_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-largo/adidas/entrada-22-training-mujer-olympia-team-navy-blue",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN LARGO OLYMPIA NIÑA",
    price: "23,00 EUR",
    imgURL: "/public/img/shop/pantalon_largo_front.png",
    hoverImgURL: "/public/img/shop/pantalon_largo_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-largo/adidas/entrada-22-training-nino-olympia-team-navy-blue",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA ENTRENAMIENTO",
    price: "17,00 EUR",
    imgURL: "/public/img/shop/camiseta_entrenamiento_front.png",
    hoverImgURL: "/public/img/shop/camiseta_entrenamiento_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-mujer-olympia-clear-mint-0",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA ENTRENAMIENTO NIÑA",
    price: "17,00 EUR",
    imgURL: "/public/img/shop/camiseta_entrenamiento_front.png",
    hoverImgURL: "/public/img/shop/camiseta_entrenamiento_back.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-nino-olympia-clear-mint-0",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN ENTRENAMIENTO",
    price: "14,00 EUR",
    imgURL: "/public/img/shop/pantalon_entrenamiento_front.png",
    hoverImgURL: "/public/img/shop/pantalon_entrenamiento_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-mujer-olympia-clear-mint-0",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "PANTALÓN ENTRENAMIENTO NIÑA",
    price: "14,00 EUR",
    imgURL: "/public/img/shop/pantalon_entrenamiento_front.png",
    hoverImgURL: "/public/img/shop/pantalon_entrenamiento_front.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-nino-olympia-clear-mint-0",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "MOCHILA OLYMPIA",
    price: "31,00 EUR",
    imgURL: "/public/img/shop/mochila_front.png",
    hoverImgURL: "/public/img/shop/mochila_front.png",
    productImages: [],
    pageName: "-",
    pageURL: "https://www.futbolemotion.com/es/comprar/mochila/adidas/tiro-olympia-black-white",
    selections: [],
    otherInputs: [],
  },
];

export default SHOP_PRODUCTS;
