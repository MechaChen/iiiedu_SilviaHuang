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
  readFile.readAsText(file);
  readFile.addEventListener("load", function() {
    document.getElementById("fileContent").value = this.result;
  });
}

const character = {
  name: "Bear",
  sex: "man",
  age: 17
};

window.onload = init;
