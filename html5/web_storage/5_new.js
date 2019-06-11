let storage = sessionStorage;
function accessControl(accessPoint) {
  const key = document.getElementById("keyText").value;
  const value = document.getElementById("valueText").value;

  switch (accessPoint) {
    case 1:
      storage.setItem(key, value);
      break;
    case 2:
      const item = storage.getItem(key);
      alert(item);
      break;
    case 3:
      storage.removeItem(key);
      break;
    case 4:
      storage.clear();
      break;
    default:
      break;
  }
}
