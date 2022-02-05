const toggleBtn = document.querySelectorAll(".modal_toggle");

toggleBtn.forEach((target, i) => {
  let modalId = target.attributes["ModalId"].nodeValue;
  let Modal = document.querySelector(`#${modalId}`);
  let modalActions = Modal.querySelectorAll(".modal_actionBtn");

  Modal.addEventListener("click", (e) => {
    if (document.elementFromPoint(e.x, e.y) === Modal) {
      Modal.classList.remove("modal--active");
    }
  });

  target.addEventListener("click", () => {
    Modal.classList.add("modal--active");
  });

  modalActions.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      Modal.classList.remove("modal--active");
    });
  });
});
