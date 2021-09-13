const navBar = document.querySelector(".nav-link__list");
const navToggle = document.getElementById("harmbugger");

navToggle.addEventListener("click", () => {
  navBar.classList.toggle("show");
});
