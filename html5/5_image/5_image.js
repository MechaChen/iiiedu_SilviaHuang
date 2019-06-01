function init() {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  // let dino = new Image();
  // dino.src = "../images/dino.gif";
  // dino.addEventListener("load", function() {
  //   context.drawImage(dino, 0, 0, canvas.width, canvas.height);
  // });

  let capoo = new Image();
  capoo.src = "../images/capoo.jpeg";
  capoo.addEventListener("load", function() {
    context.drawImage(capoo, 0, 0, canvas.width, canvas.height);
  });

  // let witch = new Image();
  // witch.src = "../images/witch.gif";
  // witch.addEventListener("load", function() {
  //   context.drawImage(witch, 500, 500);
  // });
}

window.addEventListener("load", init);
