function init() {
  const canvas = document.querySelector("#canvas");
  canvas.width = "1000";
  canvas.height = "800";

  const context = canvas.getContext("2d");
  context.font = "600 50px Tahoma";

  context.fillText("omgSilvia", 100, 100);
  context.strokeText("godSilvia", 100, 300);

  //   Won't work
  //   context.text("ohmygoshSilvia", 100, 500);
  //   context.fill();

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(400, 100);
  context.strokeStyle = "#ccc";
  context.lineWidth = 3;
  context.stroke();

  context.beginPath();
  context.moveTo(100, 300);
  context.lineTo(400, 300);
  context.strokeStyle = "#000";
  context.stroke();
}

window.onload = init;
