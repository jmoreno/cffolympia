let SHOP_PRODUCTS = [
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA BÁSICA OLYMPIA (NUEVO)",
    price: "126312736,00 EUR",
    imgURL: "/public/img/escudos/olympia.png",
    hoverImgURL: "/public/img/escudos/olympia.png",
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
    imgURL: "/public/img/escudos/olympia.png",
    hoverImgURL: "/public/img/escudos/olympia.png",
    productImages: [
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/categoria/colectivos/equipaciones-cff-olympia-las-rozas",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CINTAS DEL PELO OLYMPIA",
    price: "9,00 EUR",
    imgURL: "/public/img/escudos/olympia.png",
    hoverImgURL: "/public/img/escudos/olympia.png",
    productImages: [
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_11.JPG",
      "/public/img/noticias/noticia_13.JPG",
      "/public/img/noticias/noticia_1.JPG",
    ],
    pageName: "cintas_pelo",
    pageURL: "/pages/producto_tienda.html?producto=cintas_pelo",
    selections: [
      {
        name: "Color",
        isRequired: true,
        options: [
          "Azul Oscuro",
          "Blanco",
          "Rosa",
          "1ud Rosa & 1ud Blanco (15 € total)",
          "1ud Azul Osc & 1ud Blanco (15 € total)",
          "2uds Azul Oscuro (15 € total)",
          "2uds Blanco (15 € total)",
          "2uds Rosa (15 € total)",
        ],
      },
      {
        name: "Texto",
        isRequired: true,
        options: [
          "Texto: Olympia",
          'Texto: "Nombre personalizado"',
          'Texto: "Nombre personalizado" + "Dorsal"',
          'Texto: "Nombre personalizado" + Olympia',
          'Texto: "Nombre personalizado" + "Dorsal" + Olympia',
        ],
      },
    ],
    otherInputs: [
      {
        type: "text",
        name: "Nombre personalizado (si aplica)",
        placeholder: "Nombre personalizado (si aplica)",
        value: "",
        isRequired: false,
      },
      {
        type: "number",
        name: "Dorsal (si aplica)",
        placeholder: "Dorsal (si aplica)",
        value: "",
        isRequired: false,
      },
    ],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "BUFANDA OLYMPIA",
    price: "15,00 EUR",
    imgURL: "/public/img/escudos/olympia.png",
    hoverImgURL: "/public/img/escudos/olympia.png",
    productImages: [
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "bufanda",
    pageURL: "/pages/producto_tienda.html?producto=bufanda",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "ABRIGO OLYMPIA",
    price: "61,00 EUR",
    imgURL: "/public/img/escudos/olympia.png",
    hoverImgURL: "/public/img/escudos/olympia.png",
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
];

export default SHOP_PRODUCTS;
