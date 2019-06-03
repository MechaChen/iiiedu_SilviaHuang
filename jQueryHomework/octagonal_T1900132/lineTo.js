function init() {
  const canvas = document.querySelector("#canvas");
  canvas.width = "600";
  canvas.height = "600";

  const context = canvas.getContext("2d");

  // 格線繪製
  for (let i = 0; i < 20; i++) {
    const line = i * 50;
    context.beginPath();
    context.moveTo(line, 0);
    context.lineTo(line, canvas.height);
    context.textBaseline = "top";
    context.fillText(line, line, 0);

    context.moveTo(0, line);
    context.lineTo(canvas.width, line);
    context.textBaseline = "bottom";
    context.fillText(line, 0, line);
    context.strokeStyle = "#666";
    context.stroke();
  }

  // 定義基本常數
  const divAngle = Math.PI / 8;
  const outRad = 250;
  const inRad = 50;
  const c = {
    x: 300,
    y: 300
  };

  // 八角形繪製
  context.beginPath();
  context.arc(c.x, c.y, inRad, 0, 2 * Math.PI, false);
  context.arc(c.x, c.y, outRad, 0, 2 * Math.PI, false);
  context.stroke();

  context.beginPath();
  context.moveTo(c.x + inRad, c.y);
  for (let i = 1; i <= 16; i++) {
    if (i % 2 == 1) {
      context.lineTo(
        c.x + outRad * Math.cos(i * divAngle),
        c.y + outRad * Math.sin(i * divAngle)
      );
    } else {
      context.lineTo(
        c.x + inRad * Math.cos(i * divAngle),
        c.y + inRad * Math.sin(i * divAngle)
      );
    }
  }
  context.lineWidth = 1;
  context.strokeStyle = "#000";
  context.stroke();
}

window.onload = init;
