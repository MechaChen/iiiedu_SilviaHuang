function init() {
  const canvas = document.querySelector("#canvas");

  const context = canvas.getContext("2d");

  //   Rectangle
  //   context.fillRect(100, 100, 300, 250);
  //   context.clearRect(150, 150, 50, 50);

  //   context.rect(100, 100, 300, 250);
  //   context.fill();

  context.rect(100, 100, 300, 250);
  context.stroke();

  context.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("load", init);
