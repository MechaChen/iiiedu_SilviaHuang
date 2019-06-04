function init() {
  const canvas = document.querySelector("#canvas");
  canvas.width = "800";
  canvas.height = "600";

  const context = canvas.getContext("2d");

  // 格線繪製
  for (let i = 0; i < 20; i++) {
    const pos = i * 50;

    context.moveTo(0, pos);
    context.lineTo(canvas.width, pos);
    context.fillText(pos, 0, pos);

    context.moveTo(pos, 0);
    context.lineTo(pos, canvas.height);
    context.fillText(pos, pos, 8);
  }

  context.strokeStyle = "rgba(0, 0, 0, 0.3)";
  context.stroke();

  context.beginPath();
  context.moveTo(300, 300);
  context.bezierCurveTo(400, 150, 500, 100, 500, 400);
  context.lineWidth = 3;
  context.storkeStlye = "#000";
  context.stroke();

  context.beginPath();
  context.moveTo(300, 300);
  context.lineTo(400, 150);
  context.lineTo(500, 100);
  context.lineTo(500, 400);
  context.strokeStyle = "#00f";
  context.lineWidth = 1;
  context.stroke();
}

window.addEventListener("load", init);
