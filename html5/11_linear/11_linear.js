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

  // let gradient = context.createLinearGradient(100, 100, 600, 400);
  let gradient = context.createLinearGradient(100, 250, 600, 250);
  gradient.addColorStop(0, "#30cfd0");
  gradient.addColorStop(1, "#330867");

  context.fillStyle = gradient;
  context.fillRect(100, 100, 500, 300);
}

window.addEventListener("load", init);
