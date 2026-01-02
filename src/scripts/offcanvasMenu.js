const offcanvasBtn = document.getElementById("offcanvasBtn");
const offcanvasMenu = document.getElementById("offcanvasMenu");
const offcanvasOverlay = document.getElementById("offcanvasOverlay");
const closeOffcanvas = document.getElementById("closeOffcanvas");

function toggleOffcanvas() {
  if (offcanvasMenu && offcanvasOverlay) {
    const isOpen = offcanvasMenu.classList.contains("translate-x-0");
    if (isOpen) {
      offcanvasMenu.classList.remove("translate-x-0");
      offcanvasMenu.classList.add("translate-x-full");
      offcanvasOverlay.classList.remove("opacity-100", "visible");
      offcanvasOverlay.classList.add("opacity-0", "invisible");
    } else {
      offcanvasMenu.classList.remove("translate-x-full");
      offcanvasMenu.classList.add("translate-x-0");
      offcanvasOverlay.classList.remove("opacity-0", "invisible");
      offcanvasOverlay.classList.add("opacity-100", "visible");
    }
  }
}

if (offcanvasBtn) {
  offcanvasBtn.addEventListener("click", toggleOffcanvas);
}

if (closeOffcanvas) {
  closeOffcanvas.addEventListener("click", toggleOffcanvas);
}

if (offcanvasOverlay) {
  offcanvasOverlay.addEventListener("click", toggleOffcanvas);
}