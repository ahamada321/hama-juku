const header = document.getElementById("header-navbar");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("bg-white/70", "backdrop-blur-md","border-b","border-black/10");
    } else {
      header.classList.remove("bg-white/70", "backdrop-blur-md","border-b","border-black/10");
    }
  });
}