var storage = sessionStorage;
function doFirst() {
  var itemString = storage.getItem("addItemList");
  var items = itemString.substr(0, itemString.length - 2).split(", ");
  //   Make sure to get the item list
  console.log(items);

  newSection = document.createElement("section");
  newTable = document.createElement("table");

  //   每購買一個品項，就呼叫函數(createCartList)新增<tr>
  total = 0;
  for (var key in items) {
    var itemInfo = storage.getItem(items[key]);
    createItemList(items[key], itemInfo);

    var price = parseInt(itemInfo.split("|")[2]);
    total += price;
  }

  document.getElementById("total").innerText = total;

  document.getElementById("cartList").appendChild(newSection);
  newSection.appendChild(newTable);
}

function createItemList(itemId, itemValue) {
  var itemTitle = itemValue.split("|")[0];
  console.log(itemTitle);
  var itemImage = `imgs/${itemValue.split("|")[1]}`;
  console.log(itemImage);
  var itemPrice = parseInt(itemValue.split("|")[2]);
  console.log(itemPrice);

  //建立每個品項的清單區域--tr
  var trItemList = document.createElement("tr");
  trItemList.className = "item";
  newTable.appendChild(trItemList);

  //建立商品圖片--第一個td
  var tdImage = document.createElement("td");
  tdImage.width = "200px";

  var image = document.createElement("img");
  image.src = itemImage;
  image.style.width = "120px";

  trItemList.appendChild(tdImage);
  tdImage.appendChild(image);
  //建立商品名稱和刪除按鈕--第二個td
  var tdItemTitle = document.createElement("td");
  tdItemTitle.style.width = "280px";
  tdItemTitle.id = itemId;

  var pItemList = document.createElement("p");
  pItemList.innerText = itemTitle;

  var delButton = document.createElement("button");
  delButton.innerText = "Delete";
  delButton.addEventListener("click", deleteItem);

  trItemList.appendChild(tdItemTitle);
  tdItemTitle.appendChild(pItemList);
  tdItemTitle.appendChild(delButton);

  //建立商品價格--第三個td
  var tdItemPrice = document.createElement("td");
  tdItemPrice.style.width = "170px";
  tdItemPrice.innerText = itemPrice;

  trItemList.appendChild(tdItemPrice);

  //建立商品數量--第四個td
  var tdItemCount = document.createElement("td");
  tdItemCount.style.width = "60px";

  var itemCount = document.createElement("input");
  itemCount.type = "number";
  itemCount.value = 1;
  itemCount.min = 0;
  itemCount.addEventListener("input", changeItemCount);

  trItemList.appendChild(tdItemCount);
  tdItemCount.appendChild(itemCount);
}

function deleteItem() {
  var itemId = this.parentNode.getAttribute("id");
  // alert(itemId);
  // 清除該筆資料之前
  // 1.先扣除總金額(total)
  var itemValue = storage.getItem(itemId);
  total -= parseInt(itemValue.split("|")[2]);

  document.getElementById("total").innerText = total;

  // 2.清除storage
  storage.removeItem(itemId);
  storage["addItemList"] = storage["addItemList"].replace(itemId + ", ", "");

  // 3.再將該筆<tr>刪除
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function changeItemCount() {
  //   alert("aaaaa");
  console.log("aaaaa");
}

window.addEventListener("load", doFirst);
