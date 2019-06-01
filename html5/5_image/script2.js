function init() {
  const canvas = document.querySelector("#canvas");
  canvas.width = "1000";
  canvas.height = "800";

  const context = canvas.getContext("2d");

  let dino = new Image();
  dino.src = "../../images/dino.gif";
  dino.addEventListener("load", () => {
    context.drawImage(dino, 0, 0, canvas.width, canvas.height);
  });
}

window.onload = init;
