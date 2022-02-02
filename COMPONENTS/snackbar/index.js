const snackbartoggles = document.querySelectorAll(".snackbar_toggle");

snackbartoggles.forEach((target, i) => {
  let snackbar = document.querySelector(
    `#${target.attributes["SnackbarId"].nodeValue}`
  );
  let snackbarClose = snackbar.querySelector(".snackbar_close");

  snackbarClose.addEventListener("click", () => {
    snackbar.classList.remove("snackbar--active");
  });

  target.addEventListener("click", (e) => {
    console.log(e.target);
    if (snackbar.className.includes("snackbar--active")) {
      return;
    } else {
      snackbar.classList.add("snackbar--active");
    }
  });
});
