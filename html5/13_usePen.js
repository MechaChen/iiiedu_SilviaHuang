function doFirst() {
  // 先跟HTML畫面產生關聯，並且建立事件聆聽功能
  var canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // 繪製格線
  context.lineWidth = 1;
  for (var i = 0; i < 20; i++) {
    var pos = i * 50;

    context.moveTo(0, pos);
    context.lineTo(canvas.width, pos);
    context.fillText(pos, 0, pos);

    context.moveTo(pos, 0);
    context.lineTo(pos, canvas.height);
    context.fillText(pos, pos, 8);
  }
  context.strokeStyle = "rgba(0,0,0,0.3)";
  context.stroke();
  //=========

  context.beginPath();

  canvas.addEventListener("mousemove", usePen);
}
function usePen(e) {
  context.beginPath();
  context.fillStyle = "red";
  context.arc(e.pageX, e.pageY, 5, 0, 2 * Math.PI);
  context.fill();
}
window.addEventListener("load", doFirst);
