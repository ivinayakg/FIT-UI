import {
  alertHandler,
  avatarHandler,
  badgeHandler,
  gridHandler,
  inputHandler,
  listHandler,
  modalHandler,
  navigationHandler,
  ratingHandler,
  sliderHandler,
  snackbarHandler,
} from "/JS/component.js";

alertHandler();
avatarHandler();
badgeHandler();
gridHandler();
inputHandler();
listHandler();
modalHandler();
navigationHandler();
ratingHandler();
sliderHandler();
snackbarHandler();

const themeHanlder = () => {
  let toggle = document.querySelector(".header_themeToggle");
  toggle.innerHTML = '<i class="fas fa-sun"></i>';
  let body = document.querySelector("body");

  toggle.addEventListener("click", () => {
    if (body.className.includes("dark-theme")) {
      body.classList.remove("dark-theme");
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      body.classList.add("dark-theme");
      toggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
};

themeHanlder();
