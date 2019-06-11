function init() {
  document.getElementById("dropZone").ondragover = dragOver;
  document.getElementById("dropZone").ondrop = dropped;
}

function dragOver(e) {
  e.preventDefault();
}
function dropped(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  document.getElementById("fileName").innerText = file.name;

  const readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener("load", function() {
    const video = document.getElementById("video");
    video.src = this.result;
    video.controls = true;
    video.style.maxWidth = "560px";
  });
}

const character = {
  name: "Bear",
  sex: "man",
  age: 17
};

window.onload = init;
