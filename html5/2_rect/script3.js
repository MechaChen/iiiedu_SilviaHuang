function init() {
  const canvas = document.querySelector("#canvas");

  const context = canvas.getContext("2d");
  context.rect(100, 100, 200, 200);
  context.fill();
}

window.onload = init;
