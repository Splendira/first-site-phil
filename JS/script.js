const burgerbtn = document.querySelector(".bx-menu");
const navMenu = document.querySelector(".link");

// BURGER BTN MENU
burgerbtn.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
  navMenu.classList.toggle("visible-transition");
  burgerbtn.classList.toggle("bx-x");
});

// SCROLL
const mainContent = document.querySelector("#container-grid");
const btnScroll = document.querySelector(".arrow-icone");

btnScroll.addEventListener("click", handleScrollPage);

function handleScrollPage(e) {
  e.preventDefault();
  const element = window.scrollY + mainContent.getBoundingClientRect().top;

  scrollTo({
    top: element,
    behavior: "smooth",
  });
} 
