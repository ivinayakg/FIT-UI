export const snackbarHandler = () => {
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
};
export const sliderHandler = () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((target, i) => {
    let slide = target.querySelector(".slider_slide");
    let slideButtons = target.querySelector(".slider_buttons");
    let slideDots = target.querySelector(".slider_dots");
    let sliderItems = target.querySelectorAll(".slider_item");
    let slideWidth = slide.offsetWidth / sliderItems.length;

    let slideDotsEvent = target.className.includes("slider--dots");

    const translatePercentage = [];
    let current = 0;

    sliderItems.forEach((item, i) => {
      translatePercentage.push(slideWidth * i);

      if (slideDotsEvent) {
        let slideDot = document.createElement("div");
        slideDot.classList.add("slide_dot");
        slideDots.append(slideDot);
      }
    });

    if (slideDotsEvent) {
      let slideDotButton = target.querySelectorAll(".slide_dot");
      slideDotButton.forEach((btn, i) => {
        if (i !== current) {
          btn.innerHTML = '<i class="far fa-circle"></i>';
        } else {
          btn.innerHTML = '<i class="fas fa-circle"></i>';
        }

        btn.addEventListener("click", () => {
          slideDotButton.forEach((target) => {
            target.innerHTML = "";
            if (target !== btn) {
              target.innerHTML = '<i class="far fa-circle"></i>';
            }
          });
          btn.innerHTML = '<i class="fas fa-circle"></i>';
          current = i;
          slide.style.transform = `translate3d(-${translatePercentage[current]}px,0,0)`;
        });
      });
    } else if (!slideDotsEvent) {
      slideButtons.children[1].addEventListener("click", () => {
        current =
          current !== sliderItems.length - 1
            ? current + 1
            : sliderItems.length - 1;
        slide.style.transform = `translate3d(-${translatePercentage[current]}px,0,0)`;
      });
      slideButtons.children[0].addEventListener("click", () => {
        current = current !== 0 ? current - 1 : 0;
        slide.style.transform = `translate3d(-${translatePercentage[current]}px,0,0)`;
      });
    }
  });
};
export const ratingHandler = () => {
  const rating = document.querySelectorAll(".rating_comp");

  const starsColors = (stars, end) => {
    stars.forEach((target) => (target.style.color = "gray"));
    for (let i = 0; i <= end; ++i) {
      stars[i].style.color = "orange";
    }
  };

  rating.forEach((target, i) => {
    let stars = target.querySelectorAll(".rating_star");
    stars.forEach((star, z) => {
      star.addEventListener("click", () => {
        starsColors(stars, z);
      });
    });
  });
};
export const navigationHandler = () => {
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
};
export const modalHandler = () => {
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
};
export const listHandler = () => {
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
        setTimeout(
          () => target.classList.add("list_comp--dropdown-active"),
          100
        );
      }
    });
  });
};
export const inputHandler = () => {
  const inputs = document.querySelectorAll(".input");

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
};
export const gridHandler = () => {
  const gridComps = document.querySelectorAll(".grid_comp");

  gridComps.forEach((target, i) => {
    if (
      target.attributes["autoFill"] &&
      target.attributes["autoFill"].nodeValue !== ""
    ) {
      target.style.gridTemplateColumns = `repeat(auto-fill, minmax(${target.attributes["autoFill"].nodeValue}, 1fr))`;
    }
  });
};
export const badgeHandler = () => {
  const badge = document.querySelectorAll(".badge");

  badge.forEach((target, i) => {
    if (!target) return;
    target.style.position = "relative";
    let badge = document.createElement("span");
    badge.innerText = target.attributes.content.nodeValue;
    if (target.attributes.icon.nodeValue === "true") {
      badge = document.createElement("i");
      badge.classList.add("far");
      badge.classList.add(target.attributes.iconValue.nodeValue);
    }
    badge.classList.add("badge_icon");
    badge.classList.add(target.attributes.radius?.nodeValue);
    badge.classList.add(target.attributes.position?.nodeValue);
    badge.classList.add(target.attributes.color?.nodeValue);

    target.append(badge);
  });
};
export const avatarHandler = () => {
  const avatars = document.querySelectorAll(".avatar");

  avatars.forEach((target, i) => {
    target.style.backgroundColor = target.attributes.color.nodeValue;
  });
};
export const alertHandler = () => {
  const alert = document.querySelectorAll(".alert");
  const alertIcons = [
    "fa-check",
    "fa-exclamation-circle",
    "fa-info-circle",
    "fa-exclamation-triangle",
  ];

  alert.forEach((element, i) => {
    let closeButton = element.querySelector(".alert_button");
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

    closeButton.addEventListener("click", (e) => {
      element.remove();
    });
  });
};
