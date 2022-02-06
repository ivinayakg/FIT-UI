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
