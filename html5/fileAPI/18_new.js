function init() {
  document.getElementById("dropZone").ondragover = dragOver;
  document.getElementById("dropZone").ondrop = dropped;
}

function dragOver(e) {
  e.preventDefault();
}
function dropped(e) {
  e.preventDefault();
  let files = e.dataTransfer.files;

  for (let i = 0; i < files.length; i++) {
    const readFile = new FileReader();
    readFile.readAsDataURL(files[i]);
    readFile.addEventListener("load", function() {
      let image = document.createElement("img");
      image.src = this.result;

      let dropZone = document.getElementById("dropZone");
      dropZone.insertBefore(image, dropZone.firstChild);
      // dropZone.appendChild(image);
    });
  }
}

window.onload = init;
