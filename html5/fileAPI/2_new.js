function init() {
  document.getElementById("theFile").onchange = readFile;
}

function readFile() {
  const file = document.getElementById("theFile").files[0];
  console.log(file.name);
  let message = "";

  message += `File Name : ${file.name} \n`;
  message += `File Size : ${file.size} \n`;
  message += `File Type : ${file.type} \n`;
  message += `Last Modified : ${file.lastModifiedDate} \n`;

  document.getElementById("fileInfo").value = message;
}

window.onload = init;
