/*
  CONFIGURAÇÃO DO FUNIL
  1) Cole os links de compra OTO da Hotmart nos campos acceptUrl.
  2) Preencha anchorPrice apenas se esse for um preço normal REAL do produto.
  3) Configure thankYouUrl para a página de acesso/obrigado.
*/
window.FUNIL_CONFIG = {
  upsell1: {
    acceptUrl: "",
    declineUrl: "/downsell/",
    anchorPrice: ""
  },
  upsell2: {
    acceptUrl: "",
    declineUrl: "/oferta-final/",
    anchorPrice: ""
  },
  downsell: {
    acceptUrl: "",
    declineUrl: "/oferta-final/",
    anchorPrice: ""
  },
  finalOffer: {
    acceptUrl: "",
    declineUrl: "",
    anchorPrice: ""
  },
  thankYouUrl: ""
};
