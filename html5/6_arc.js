function init() {
  const canvas = document.querySelector("#canvas");
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

  // 4分線
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);
  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);
  context.strokeStyle = "rgba(0, 0, 0, 0.7)";
  context.stroke();

  // 半圓弧
  // context.beginPath();
  // context.arc(250, 200, 100, 0, Math.PI, false);
  // context.stroke();

  // context.beginPath();
  // context.arc(750, 200, 100, 0, Math.PI, true);
  // context.stroke();

  // context.beginPath();
  // context.arc(250, 600, 100, 0, 2 * Math.PI, true);
  // context.stroke();

  // context.beginPath();
  // context.arc(750, 600, 100, 0.3 * Math.PI, 1.65 * Math.PI, false);
  // context.stroke();

  let squid_1 = new Image();
  squid_1.src = "../images/squid_1.png";
  squid_1.addEventListener("load", function() {
    context.drawImage(squid_1, 0, 0, canvas.width / 2, canvas.height / 2);
  });
  let squid_2 = new Image();
  squid_2.src = "../images/squid_2.png";
  squid_2.addEventListener("load", function() {
    context.drawImage(squid_2, 0, 400, canvas.width / 2, canvas.height / 2);
  });
  let squid_3 = new Image();
  squid_3.src = "../images/squid_3.png";
  squid_3.addEventListener("load", function() {
    context.drawImage(squid_3, 500, 0, canvas.width / 2, canvas.height / 2);
  });
  let squid_4 = new Image();
  squid_4.src = "../images/squid_4.png";
  squid_4.addEventListener("load", function() {
    context.drawImage(squid_4, 500, 400, canvas.width / 2, canvas.height / 2);
  });
}

window.addEventListener("load", init);
