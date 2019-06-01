function init() {
  const canvas = document.querySelector("#canvas");
  canvas.width = "1000";
  canvas.height = "800";

  const context = canvas.getContext("2d");
  // context.fillRect(100, 100, 300, 250);
  // context.clearRect(150, 150, 50, 50);

  context.rect(100, 100, 300, 250);
  context.fill();

  context.clearRect(0, 0, canvas.width, canvas.height);
}

window.onload = init;
