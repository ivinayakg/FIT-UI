const headers = document.querySelectorAll(".header");

headers.forEach((target, i) => {
  let content = target.querySelector(".header_links");
  let toggle = target.querySelector(".header_toggle");

  toggle.addEventListener("click", () => {
    if (toggle.className.includes("header_toggle--active")) {
      toggle.classList.remove("header_toggle--active");
      content.classList.remove("header_links--active");
    } else {
      toggle.classList.add("header_toggle--active");
      content.classList.add("header_links--active");
    }
  });
});
