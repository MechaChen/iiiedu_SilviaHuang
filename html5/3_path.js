function init() {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  context.strokeStyle = "#f00";
  context.fillStyle = "indigo";

  context.moveTo(200, 200);
  context.lineTo(300, 100);
  context.lineTo(400, 300);
  context.lineTo(200, 80);
  context.closePath();
  context.stroke();
  context.fill();
}

window.addEventListener("load", init);
