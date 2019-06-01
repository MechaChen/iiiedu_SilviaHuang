function init() {
  const canvas = document.querySelector("#canvas");
  canvas.width = "1000";
  canvas.height = "800";

  const context = canvas.getContext("2d");
  context.moveTo(200, 200);
  context.lineTo(300, 100);
  context.lineTo(400, 300);
  context.lineTo(200, 80);
  context.closePath();
  context.strokeStyle = "#faa";
  context.fillStyle = "#abc";
  context.lineWidth = 10;
  context.stroke();
  context.fill();
}

window.onload = init;
