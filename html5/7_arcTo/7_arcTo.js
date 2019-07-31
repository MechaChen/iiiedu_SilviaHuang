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
  context.arcTo(400, 150, 550, 400, 100);
  context.lineWidth = 3;
  context.strokeStyle = "black";
  context.stroke();

  context.beginPath();
  context.moveTo(300, 300);
  context.lineTo(400, 150);
  context.lineTo(550, 400);
  context.strokeStyle = "#abc";
  context.lineWidth = 2;
  context.stroke();
}

window.addEventListener("load", init);
