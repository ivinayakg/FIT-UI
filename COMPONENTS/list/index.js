const listComps = document.querySelectorAll(".list_comp");
const dropdownLists = document.querySelectorAll(".list_comp--dropdown");

listComps.forEach((target, i) => {
  if (
    !target.attributes["backColor"] ||
    target.attributes["backColor"].nodeValue === ""
  ) {
    target.style.backgroundColor = "rgba(0,0,0,0.35)";
  } else {
    target.style.backgroundColor = target.attributes["backColor"].nodeValue;
  }
  if (
    !target.attributes["textColor"] ||
    target.attributes["textColor"].nodeValue === ""
  ) {
    target.style.color = "#ffffff";
  } else {
    target.style.color = target.attributes["textColor"].nodeValue;
  }
});

dropdownLists.forEach((target, i) => {
  const allItems = target.querySelectorAll(".list_item");
  const dropDownmenu = document.createElement("div");
  dropDownmenu.classList.add("list_item-wrapper");
  allItems.forEach((el) => {
    dropDownmenu.append(el);
  });

  target.querySelector(".list_heading").addEventListener("click", () => {
    if (target.className.includes("list_comp--dropdown-active")) {
      target.classList.remove("list_comp--dropdown-active");
      dropDownmenu.remove();
    } else {
      target.append(dropDownmenu);
      setTimeout(() => target.classList.add("list_comp--dropdown-active"), 100);
    }
  });
});
