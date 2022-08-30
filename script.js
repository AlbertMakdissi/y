const rippleButton = document.querySelector(".ripple-bttn");

function mousePositionToCustomProp(event, element) {
  let posX = event.offsetX;
  let posY = event.offsetY;

  element.style.setProperty("--x", posX + "px");
  element.style.setProperty("--y", posY + "px");
}

rippleButton.addEventListener("click", (event) => {
  mousePositionToCustomProp(event, rippleButton);
  rippleButton.classList.add("pulse");
  rippleButton.addEventListener("animationend", () => {
    rippleButton.classList.remove("pulse");
  });
});
