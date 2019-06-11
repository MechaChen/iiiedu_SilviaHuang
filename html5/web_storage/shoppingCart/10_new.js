var storage = sessionStorage;
function doFirst() {
  if (!storage["addItemList"]) {
    storage["addItemList"] = "";
  }

  let list = document.querySelectorAll(".addButton");
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
      const teddyInfo = document.querySelector(`#${this.id} input`).value;
      addItem(this.id, teddyInfo);
    });
  }
}

function addItem(id, info) {
  //   info.split('|') = ['Formosa', 'formosa.jpg', '5000'];
  let image = document.createElement("img");
  image.src = `imgs/${info.split("|")[1]}`;
  let title = document.createElement("span");
  title.innerText = info.split("|")[0];
  let price = document.createElement("span");
  price.innerText = info.split("|")[2];

  const newItem = document.getElementById("newItem");
  // newItem.innerHTML = "";
  while (newItem.childNodes.length >= 1) {
    newItem.removeChild(newItem.firstChild);
  }
  newItem.appendChild(image);
  newItem.appendChild(title);
  newItem.appendChild(price);
}

window.addEventListener("load", doFirst);
