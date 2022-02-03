const gridComps = document.querySelectorAll(".grid_comp");

gridComps.forEach((target, i) => {
  if (
    target.attributes["autoFill"] &&
    target.attributes["autoFill"].nodeValue !== ""
  ) {
    target.style.gridTemplateColumns = `repeat(auto-fill, minmax(${target.attributes["autoFill"].nodeValue}, 1fr))`;
  }
});
