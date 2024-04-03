const burgerbtn = document.querySelector(".bx-menu");
const navMenu = document.querySelector(".link");

// BURGER BTN MENU
burgerbtn.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
  navMenu.classList.toggle("visible-transition");
  burgerbtn.classList.toggle("bx-x");
});
