/*
Cole aqui os links REAIS da Hotmart.

Fluxo:
Front -> Upsell 1
U1 aceita -> U2 -> Oferta Final -> Obrigado
U1 recusa -> Downsell -> Oferta Final -> Obrigado
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
