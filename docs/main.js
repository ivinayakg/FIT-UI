const docsLinksEl = document.querySelectorAll(".docs_link");
const docsLinks = [
  "get-started",
  "alert",
  "avatar",
  "badge",
  "button",
  "cards",
  "grid",
  "image",
  "input",
  "list",
  "modal",
  "navigation",
  "rating",
  "slider",
  "snackbar",
];
const Frame = document.querySelector(".docs_frame");
const themeToggler = document.querySelector(".header_themeToggle");

docsLinksEl.forEach((target, i) => {
  target.addEventListener("click", () => {
    Frame.onload = () => {
      let body = document.querySelector("body");
      let frameBody = Frame.contentWindow.document.querySelector("body");
      if (body.className.includes("dark-theme"))
        frameBody.classList.add("dark-theme");

      Frame.style.display = "block";
    };

    Frame.attributes["src"].nodeValue = `/docs/pages/${docsLinks[i]}.html`;
    Frame.style.display = "none";
  });
});

themeToggler.addEventListener("click", () => {
  let frameBody = Frame.contentWindow.document.querySelector("body");
  if (frameBody.className.includes("dark-theme"))
    frameBody.classList.remove("dark-theme");
  else frameBody.classList.add("dark-theme");
});

window.scroll(0, -10);
