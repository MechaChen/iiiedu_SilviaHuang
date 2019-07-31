function init() {
  const canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 800;

  const ctx = canvas.getContext("2d");

  //   格線繪製
  for (let i = 0; i < 16; i++) {
    const gridLine = i * 50;
    // 垂直線
    ctx.beginPath();
    ctx.moveTo(gridLine, 0);
    ctx.lineTo(gridLine, canvas.height);
    ctx.strokeStyle = "#999";
    ctx.stroke();

    ctx.font = "14px Tahoma";
    ctx.fillText(i, gridLine, 0);
    ctx.fillStyle = "#333";
    ctx.textBaseline = "top";

    // 水平線
    ctx.beginPath();
    ctx.moveTo(0, gridLine);
    ctx.lineTo(canvas.width, gridLine);
    ctx.stroke();

    ctx.fillText(i, 0, gridLine);
  }

  //   分隔線繪製
  for (let i = 1; i < 2; i++) {
    const sepLine = i * 400;
    ctx.beginPath();
    ctx.moveTo(sepLine, 0);
    ctx.lineTo(sepLine, canvas.height);
    ctx.strokeStyle = "#666";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, sepLine);
    ctx.lineTo(canvas.width, sepLine);
    ctx.strokeStyle = "#666";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  drawSmile();
  drawAngry();
  drawSad();
  drawSneak();
}

// 笑臉
function drawSmile() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(200, 200, 150, 0, Math.PI * 2, true);
  ctx.moveTo(150, 150);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 150, 30, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(160.605, 160.605, 15, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(250, 150, 30, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(239.395, 160.605, 15, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(200, 240, 60, 0, Math.PI, false);
  ctx.stroke();
}

function drawAngry() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  // 生氣
  ctx.beginPath();
  ctx.arc(600, 200, 150, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(500, 120);
  ctx.lineTo(580, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(700, 120);
  ctx.lineTo(620, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(520, 225);
  ctx.lineTo(580, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(680, 225);
  ctx.lineTo(620, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(600, 275);
  ctx.bezierCurveTo(620, 325, 670, 300, 680, 265);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(600, 275);
  ctx.bezierCurveTo(580, 225, 530, 250, 520, 285);
  ctx.stroke();
}

//   哭臉
function drawSad() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(200, 600, 150, 0, Math.PI * 2, true);
  ctx.stroke();

  //   左眼
  ctx.beginPath();
  ctx.arc(150, 550, 30, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 535, 15, 0, Math.PI * 2, true);
  ctx.fill();

  //   右眼
  ctx.beginPath();
  ctx.arc(250, 550, 30, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(250, 565, 15, 0, Math.PI * 2, true);
  ctx.fill();

  //   嘴巴
  ctx.beginPath();
  ctx.arc(200, 700, 60, 0, Math.PI, true);
  ctx.stroke();

  //   淚滴
  ctx.beginPath();
  ctx.arc(270, 590, 5, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(275, 605, 5, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(280, 620, 5, 0, Math.PI * 2, true);
  ctx.stroke();
}

// 奸笑
function drawSneak() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(600, 600, 150, 0, Math.PI * 2, true);
  ctx.stroke();

  //   左眼
  ctx.beginPath();
  ctx.arc(550, 550, 30, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(550, 535, 15, 0, Math.PI * 2, true);
  ctx.fill();

  //   右眼
  ctx.beginPath();
  ctx.arc(650, 550, 30, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(650, 535, 15, 0, Math.PI * 2, true);
  ctx.fill();

  //   嘴巴
  ctx.beginPath();
  ctx.moveTo(525, 650);
  ctx.bezierCurveTo(570, 720, 625, 720, 675, 650);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(560, 650);
  ctx.lineTo(560, 690);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(600, 650);
  ctx.lineTo(600, 701);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(637, 650);
  ctx.lineTo(637, 690);
  ctx.stroke();
}

window.onload = init;
