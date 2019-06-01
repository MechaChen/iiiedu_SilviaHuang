function init() {
  const canvas = document.querySelector("#canvas");
  canvas.width = "1000";
  canvas.height = "800";

  const context = canvas.getContext("2d");
  context.font = "600 40px Tahoma";
  context.strokeText("omgSilvia", 100, 100);
  context.fillText("godSilvia", 100, 300);

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(400, 100);
  context.lineWidth = 3;
  context.strokeStyle = "#ccc";
  context.stroke();

  context.beginPath();
  context.moveTo(100, 300);
  context.lineTo(400, 300);
  context.strokeStyle = "#000";
  context.stroke();
}

window.onload = init;
