const avatars = document.querySelectorAll(".avatar_div");

avatars.forEach((target, i) => {
  target.style.backgroundColor = target.attributes.color.nodeValue;
});
