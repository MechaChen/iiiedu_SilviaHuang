function init() {
  const canvas = document.querySelector("#canvas");
  canvas.width = "800";
  canvas.height = "600";

  context = canvas.getContext("2d");

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
  canvas.addEventListener("mousemove", usePen);
}

function usePen(e) {
  context.beginPath();
  context.arc(e.pageX, e.pageY, 5, 0, 2 * Math.PI, false);
  context.fillStyle = "#f00";
  context.fill();
}

window.addEventListener("load", init);
