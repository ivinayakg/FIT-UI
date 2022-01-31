const avatars = document.querySelectorAll(".avatar");

avatars.forEach((target, i) => {
  target.style.backgroundColor = target.attributes.color.nodeValue;
});
