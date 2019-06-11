let storage = localStorage;
function init() {
  // Clear all storage after clicking
  storage.clear();

  // Giving some data to the storage
  for (let i = 0; i < 10; i++) {
    storage.setItem("Key" + i, "Value" + i);
  }

  // Adding EventListener to the button
  const getButton = document.getElementById("getButton");
  getButton.addEventListener("click", getIndex);
}

function getIndex() {
  const index = document.getElementById("indexText").value;
  const key = storage.key(index);
  const item = storage.getItem(key);
  alert(`Index ${index} : ${key} / ${item}`);
}

window.onload = init;
