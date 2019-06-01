function init() {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  // context.textBaseline = "top";

  context.font = "600 60px Tahoma";
  // context.fillText("omgSilvia", 100, 100);
  context.strokeText("godSilvia", 100, 100);

  context.moveTo(100, 100);
  context.lineTo(500, 100);
  context.stroke();
}

window.addEventListener("load", init);
