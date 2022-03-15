// apply to background moving function
const container = document.getElementById("container");
window.onmousemove = function (move) {
  let x = -move.clientX / 6;
  y = -move.clientY / 6;
  container.style.backgroundPositionX = x + "px";
  container.style.backgroundPositionY = y + "px";
};
