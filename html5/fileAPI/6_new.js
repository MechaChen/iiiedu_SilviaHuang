function init() {
  document.getElementById("theFile").onchange = fileChange;
}

function fileChange() {
  const file = document.getElementById("theFile").files[0];
  console.log(file.name);
  let message = "";

  message += `File Name : ${file.name} \n`;
  message += `File Size : ${file.size} \n`;
  message += `File Type : ${file.type} \n`;
  message += `Last Modified : ${file.lastModifiedDate} \n`;
  document.getElementById("fileInfo").value = message;

  const readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener("load", function() {
    const img = document.getElementById("img");
    img.src = this.result;
    img.style.maxWidth = "500px";
    img.style.maxHeight = "400px";
  });
}

const character = {
  name: "Bear",
  sex: "man",
  age: 17
};

window.onload = init;
