function init() {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  // 格線繪製
  let theClock = setInterval(drawCastle, 30);

  let carX = 50;

  function drawCastle() {
    context.clearRect(0, 0, canvas.width, canvas.height);

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
    context.moveTo(25, 350);
    context.lineTo(375, 350);
    context.strokeStyle = "rgb(0, 0, 0)";
    context.stroke();

    // 兩邊淺藍色方塊
    context.beginPath();
    context.rect(50, 300, 50, 50);
    context.rect(300, 300, 50, 50);
    context.fillStyle = "lightblue";
    context.fill();
    context.stroke();

    // 右邊長條方塊
    context.beginPath();
    context.rect(250, 250, 50, 100);
    context.fillStyle = "tomato";
    context.fill();
    context.stroke();

    // 中間大門
    context.beginPath();
    context.moveTo(100, 350);
    context.lineTo(100, 200);
    context.lineTo(250, 200);
    context.lineTo(250, 350);
    context.lineTo(200, 350);
    context.lineTo(200, 250);
    context.arc(175, 250, 25, 0, Math.PI, true);
    context.lineTo(150, 350);
    context.closePath();
    context.fillStyle = "darkseagreen";
    context.strokeStyle = "rgb(0,0,0)";
    context.stroke();
    context.fill();

    // 屋頂
    context.beginPath();
    context.moveTo(100, 200);
    context.lineTo(175, 150);
    context.lineTo(250, 200);
    context.closePath();
    context.fillStyle = "tomato";
    context.fill();
    context.stroke();

    // 屋頂上的旗子
    context.beginPath();
    context.moveTo(175, 150);
    context.lineTo(175, 75);
    context.lineTo(225, 100);
    context.lineTo(175, 130);
    context.fillStyle = "yellow";
    context.fill();
    context.stroke();

    // 車子
    carX %= 500 + 40;

    context.fillStyle = "#ddd";
    context.fillRect(-40 + carX, 325, 40, 25);
    context.strokeRect(-40 + carX, 325, 40, 25);

    context.beginPath();
    context.arc(-40 + 10 + carX, 350, 5, 0, 2 * Math.PI, true);
    context.fillStyle = "#aaa";
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(-40 + 30 + carX, 350, 5, 0, 2 * Math.PI, true);
    context.fill();
    context.stroke();

    carX += 2;
  }
}

window.addEventListener("load", init);
