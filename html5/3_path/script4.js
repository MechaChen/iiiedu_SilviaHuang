function init() {
  const canvas = document.getElementById("canvas");
  canvas.width = "800";
  canvas.height = "600";

  const context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(200, 200);
  context.lineTo(300, 100);
  context.lineTo(400, 300);
  context.lineTo(200, 80);
  context.closePath();

  context.strokeStyle = "#abc";
  context.fillStyle = "#faa";
  context.lineWidth = 10;
  context.stroke();
  context.fill();
}

window.onload = init;
