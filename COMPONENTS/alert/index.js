const alert = document.querySelectorAll(".alert");
const closeButtons = document.querySelectorAll(".alert_button");
const alertIcons = [
  "fa-check",
  "fa-exclamation-circle",
  "fa-info-circle",
  "fa-exclamation-triangle",
];

alert.forEach((element, i) => {
  //this is for injecting the icon into the dom from javascript
  let className = element.className;
  let icon = document.createElement("i");
  icon.classList.add("fas");
  if (className.includes("alert--success")) {
    icon.classList.add(alertIcons[0]);
  } else if (className.includes("alert--danger")) {
    icon.classList.add(alertIcons[1]);
  } else if (className.includes("alert--warning")) {
    icon.classList.add(alertIcons[3]);
  } else if (className.includes("alert--info")) {
    icon.classList.add(alertIcons[2]);
  }
  element.children[0].append(icon);

  closeButtons[i].addEventListener("click", (e) => {
    element.remove();
  });
});
