(function () {
  const cfg = window.FUNIL_CONFIG || {};
  const page = document.body.dataset.page;
  const map = {
    "upsell-1": cfg.upsell1,
    "upsell-2": cfg.upsell2,
    "downsell": cfg.downsell,
    "oferta-final": cfg.finalOffer
  };
  const current = map[page] || {};

  const progress = document.getElementById("progresso");
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    progress.style.width = Math.min(100, Math.max(0, p * 100)) + "%";
  };
  updateProgress();
  addEventListener("scroll", updateProgress, { passive: true });
  addEventListener("resize", updateProgress);

  const accept = document.querySelector("[data-accept]");
  const decline = document.querySelector("[data-decline]");
  const anchor = document.querySelector("[data-anchor]");

  if (anchor) {
    if (current.anchorPrice) {
      anchor.hidden = false;
      anchor.querySelector("[data-anchor-value]").textContent = current.anchorPrice;
    } else {
      anchor.hidden = true;
    }
  }

  const isFinal = page === "oferta-final";
  const acceptUrl = current.acceptUrl || "";
  const declineUrl = isFinal ? (current.declineUrl || cfg.thankYouUrl || "") : (current.declineUrl || "");

  if (accept) {
    accept.href = acceptUrl || "#";
    if (!acceptUrl) {
      document.body.classList.add("modo-config");
      accept.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Configure o link de compra da Hotmart em config.js antes de publicar.");
      });
    }
  }

  if (decline) {
    decline.href = declineUrl || "#";
    if (!declineUrl) {
      document.body.classList.add("modo-config");
      decline.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Configure o destino de recusa/acesso em config.js antes de publicar.");
      });
    }
  }
})();
