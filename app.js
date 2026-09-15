(function(){
  const cfg = window.FUNIL_CONFIG || {};
  const page = document.body.dataset.page;

  const map = {
    "upsell-1": cfg.upsell1 || {},
    "upsell-2": cfg.upsell2 || {},
    "downsell": cfg.downsell || {},
    "oferta-final": cfg.finalOffer || {}
  };

  const current = map[page] || {};
  const accept = document.querySelector("[data-accept]");
  const decline = document.querySelector("[data-decline]");
  const anchor = document.querySelector("[data-anchor]");

  if(anchor){
    if(current.anchorPrice){
      anchor.hidden = false;
      const el = anchor.querySelector("[data-anchor-value]");
      if(el) el.textContent = current.anchorPrice;
    }else{
      anchor.hidden = true;
    }
  }

  let acceptUrl = current.acceptUrl || "";
  let declineUrl = current.declineUrl || "";

  if(page === "oferta-final"){
    declineUrl = current.declineUrl || cfg.thankYouUrl || "";
  }

  if(accept){
    accept.href = acceptUrl || "#";
    if(!acceptUrl){
      document.body.classList.add("modo-config");
      accept.addEventListener("click", function(e){
        e.preventDefault();
        alert("Configure o link de compra desta oferta no arquivo config.js.");
      });
    }
  }

  if(decline){
    decline.href = declineUrl || "#";
    if(!declineUrl){
      document.body.classList.add("modo-config");
      decline.addEventListener("click", function(e){
        e.preventDefault();
        alert("Configure o destino desta recusa no arquivo config.js.");
      });
    }
  }
})();
