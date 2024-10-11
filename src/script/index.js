/*
Evitamos propagación de eventos y detecamos clic
*/
const hamburguer = document.querySelector(".hamburger");
const nav_mobile = document.querySelector(".nav-mobile");
const clic_service = document.querySelector(".servicio");
const list_service = document.querySelector(".dropdown-mobile");
console.log(clic_service);

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  hamburguer.classList.remove("is-active");
  nav_mobile.classList.remove("is-active-nav");
  list_service.classList.remove("active-list");
  clic_service.addEventListener("click", () => {
    if (list_service.classList.contains("active-list")) {
      list_service.classList.remove("active-list");
    } else {
      list_service.classList.add("active-list");
    }
  });
  hamburguer.addEventListener("click", () => {
    if (!hamburguer.classList.contains("is-active")) {
      hamburguer.classList.add("is-active");
      nav_mobile.classList.add("is-active-nav");
    } else {
      hamburguer.classList.remove("is-active");
      nav_mobile.classList.remove("is-active-nav");
    }
  });
});
