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

  let gradient = context.createRadialGradient(400, 300, 195, 400, 300, 205);
  gradient.addColorStop(0, "#333");
  gradient.addColorStop(0.5, "#fff");
  gradient.addColorStop(1, "#333");

  context.beginPath();
  context.arc(400, 300, 200, 0, 2 * Math.PI);
  context.lineWidth = 10;
  context.strokeStyle = gradient;
  context.stroke();
}

window.addEventListener("load", init);
