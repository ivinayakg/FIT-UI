const inputs = document.querySelectorAll(".input--comp");

inputs.forEach((target, i) => {
  target.addEventListener("change", () => {
    if (!target.validity.typeMismatch) {
      target.classList.add("input--valid");
    }

    if (target.value === "") {
      target.classList.remove("input--valid");
    }
  });
});
