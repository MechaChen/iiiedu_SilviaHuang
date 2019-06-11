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
    const image = document.getElementById("image");
    image.src = this.result;
    image.style.maxWidth = "500px";
    image.style.maxHeight = "400px";
  });
}

const character = {
  name: "Bear",
  sex: "man",
  age: 17
};

window.onload = init;
