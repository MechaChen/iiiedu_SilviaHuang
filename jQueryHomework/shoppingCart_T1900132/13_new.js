var storage = sessionStorage;

function doFirst() {
  var itemString = storage.getItem("addItemList");
  var items = itemString.substr(0, itemString.length - 2).split(", ");
  // console.log(items);		//["A1001", "A1005", "A1006", "A1002"]

  newSection = document.createElement("section");
  newTable = document.createElement("table");

  total = 0;
  //每購買一個品項，就呼叫函數(createCartList)新增<tr>
  for (var key in items) {
    //use items[key]
    var itemInfo = storage.getItem(items[key]);
    createCartList(items[key], itemInfo);

    var price = parseInt(itemInfo.split("|")[2]);
    total += price;
  }
  document.getElementById("total").innerText = total;

  newSection.appendChild(newTable);
  document.getElementById("cartList").appendChild(newSection);
}

function createCartList(itemKey, itemValue) {
  // alert(itemKey + ' : ' + itemValue);
  var itemTitle = itemValue.split("|")[0];
  var itemImage = "imgs/" + itemValue.split("|")[1];
  var itemPrice = parseInt(itemValue.split("|")[2]);

  //建立每個品項的清單區域--tr
  var trItemList = document.createElement("tr");
  trItemList.className = "item"; //trItemList.setAttribute('class','item');

  newTable.appendChild(trItemList);

  //建立商品圖片--第一個td
  var tdImage = document.createElement("td");
  tdImage.style.width = "200px";

  var image = document.createElement("img");
  image.src = itemImage;
  image.width = 70;

  tdImage.appendChild(image);
  trItemList.appendChild(tdImage);

  //建立商品名稱和刪除按鈕--第二個td
  var tdItemTitle = document.createElement("td");
  tdItemTitle.style.width = "280px";
  tdItemTitle.id = itemKey;

  var pItemTitle = document.createElement("p");
  pItemTitle.innerText = itemTitle;

  var delButton = document.createElement("button");
  delButton.innerText = "Delete";
  delButton.addEventListener("click", deleteItem);

  tdItemTitle.appendChild(pItemTitle);
  tdItemTitle.appendChild(delButton);

  trItemList.appendChild(tdItemTitle);

  //建立商品價格--第三個td
  var tdPrice = document.createElement("td");
  tdPrice.style.width = "170px";
  tdPrice.innerText = itemPrice;

  trItemList.appendChild(tdPrice);

  //建立商品小總和--第四個td
  var tdSubtotal = document.createElement("td");
  tdSubtotal.style.width = "170px";
  tdSubtotal.innerText = itemPrice * 1;

  trItemList.appendChild(tdSubtotal);

  //建立商品數量--第五個td
  var tdItemCount = document.createElement("td");
  tdItemCount.style.width = "60px";

  var itemCount = document.createElement("input");
  itemCount.type = "number";
  itemCount.value = 1;
  itemCount.min = 0;
  itemCount.addEventListener("input", changeItemCount);

  tdItemCount.appendChild(itemCount);
  trItemList.appendChild(tdItemCount);
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

function changeItemCount(e) {
  //作業的一部分
  // 取得數量
  const { value: count } = e.target;
  // 取得小總和
  let { innerText: subTotal } = e.target.parentNode.previousSibling;
  // 取得單價
  let {
    innerText: price
  } = e.target.parentNode.previousSibling.previousSibling;
  subTotal = count * price;
  e.target.parentNode.previousSibling.innerText = subTotal;

  // 重新計算總價
  // 取得每個小總和
  const sub = document.querySelectorAll(".item td:nth-child(4)");
  let newTotal = 0;
  for (let i = 0; i < sub.length; i++) {
    console.log(sub[i].innerText);
    newTotal += parseInt(sub[i].innerText);
  }
  document.getElementById("total").innerText = newTotal;
}
window.addEventListener("load", doFirst);
