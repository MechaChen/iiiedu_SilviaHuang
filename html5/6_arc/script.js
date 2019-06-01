function init() {
  const canvas = document.querySelector("#canvas");
  canvas.width = "1000";
  canvas.height = "800";

  const context = canvas.getContext("2d");
  // 一般分界線
  for (let i = 0; i < 20; i++) {
    context.beginPath();
    const record = i * 50;
    context.moveTo(0, record);
    context.lineTo(canvas.width, record);
    context.textBaseline = "bottom";
    context.fillText(record, 0, record);

    context.moveTo(record, 0);
    context.lineTo(record, canvas.height);
    context.strokeStyle = "#ccc";
    context.textBaseline = "top";
    context.fillText(record, record, 0);
    context.stroke();
  }

  // 四分線
  context.beginPath();
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);
  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);
  context.lineWidth = 3;
  context.strokeStyle = "#333";
  context.stroke();

  const w = canvas.width;
  const h = canvas.height;
  context.lineWidth = 1;

  context.beginPath();
  context.arc(w / 4, h / 4, 100, 0, Math.PI, true);
  context.stroke();

  context.beginPath();
  context.arc((w * 3) / 4, h / 4, 100, 0, 2 * Math.PI, false);
  context.stroke();

  context.beginPath();
  context.arc(w / 4, (h * 3) / 4, 100, 0.3 * Math.PI, 1.6 * Math.PI, false);
  context.stroke();

  context.beginPath();
  context.arc(
    (w * 3) / 4,
    (h * 3) / 4,
    100,
    0.67 * Math.PI,
    1.43 * Math.PI,
    true
  );
  context.stroke();
}

window.onload = init;
