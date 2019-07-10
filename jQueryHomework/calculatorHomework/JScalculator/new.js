function doFirst(){
	//先跟HTML畫面產生關聯，再建事件聆聽功能
	document.getElementById('theForm').onsubmit = calculate;
}
function calculate(){
	var quantity = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;
	var tax = document.getElementById('tax').value;
	var discount = document.getElementById('discount').value;

	var total = quantity * price;
	tax = tax / 100;
	tax++;
	total = total * tax;
	total = total - discount;

	total = total.toFixed(2);
	// total = parseInt(total);

	document.getElementById('total').value = total;
	return false;
}
window.addEventListener('load',doFirst);