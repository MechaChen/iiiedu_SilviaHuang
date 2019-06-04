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
  context.translate(300, 300);
  context.arc(0, 0, 150, 0, 2 * Math.PI);
  context.lineWidth = 5;
  context.strokeStyle = "#f00";
  context.stroke();

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, -100);
  context.lineWidth = 2;
  context.strokeStyle = "#00f";
  context.stroke();
}

window.onload = init;
