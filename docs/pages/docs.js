const docsTitle = document.querySelector(".docs_titles");
const headings = document.querySelectorAll("h2");
const docContainer = document.querySelector(".docs_container");

const linkGenerator = (value, y) => {
  let link = document.createElement("span");
  link.innerText = value;
  link.classList.add("doc_titleLink");
  link.addEventListener("click", () => {
    docContainer.scrollTo({ top: y, behavior: "smooth" });
  });
  return link;
};

headings.forEach((target, i) => {
  let link = linkGenerator(target.innerText, target.getBoundingClientRect().y);
  if (i === 0) {
    link = linkGenerator(target.innerText, 0);
  }
  if (docsTitle) {
    docsTitle.append(link);
  }
});

window.scroll(0, -10);
