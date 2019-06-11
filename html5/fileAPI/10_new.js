function init() {
  document.getElementById("theFile").onchange = fileChange;
}

function fileChange() {
  const files = document.getElementById("theFile").files;
  let message = "";

  for (let i = 0; i < files.length; i++) {
    message += `File Name : ${files[i].name} \n`;
    message += `File Size : ${files[i].size} \n`;
    message += `File Type : ${files[i].type} \n`;
    message += `Last Modified : ${files[i].lastModifiedDate} \n`;
    message += `============\n`;

    document.getElementById("fileInfo").value = message;
  }
}

const character = {
  name: "Bear",
  sex: "man",
  age: 17
};

window.onload = init;
