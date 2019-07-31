let addedImgs = [];
let rotAngle = 0;
let zoomSize = 1;

function init() {
  const imgCollect = document.querySelectorAll(".imgs img");
  for (let i = 0; i < imgCollect.length; i++) {
    imgCollect[i].addEventListener("dragstart", startDrag);
  }

  const dragZone = document.getElementById("dragZone");
  dragZone.addEventListener("dragover", e => e.preventDefault());
  dragZone.addEventListener("drop", dropped);
}

function startDrag(e) {
  const data = `<img src="${e.target.src}" >`;
  e.dataTransfer.setData("image/gif", data);
}

function dropped(e) {
  e.preventDefault();
  const dragZone = document.getElementById("dragZone");
  dragZone.innerHTML += e.dataTransfer.getData("image/gif");
  addedImgs = $("#dragZone img");
  addedImgs.click(function() {
    $("#dragZone img").removeClass("focus");
    $(this).addClass("focus");
  });
  $("#rotate").click(rotate);
  $("#zoomIn").click(zoomIn);
  $("#trash").click(remove);
}

function rotate() {
  rotAngle += 10;
  console.log($(".focus").css("transform"));
  $(".focus").css({ transform: `rotate(${rotAngle}deg) scale(${zoomSize})` });
}

function zoomIn() {
  zoomSize += 0.1;
  $(".focus").css({ transform: `rotate(${rotAngle}deg) scale(${zoomSize})` });
}

function remove() {
  $(".focus").remove();
}

window.onload = init;
