function doFirst(){
	//先跟HTML畫面產生關聯，並且建立事件聆聽功能
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

// 繪製格線
	context.lineWidth = 1;
	for(var i=0; i<20; i++){
		var pos = i * 50;

		context.moveTo(0,pos);
		context.lineTo(canvas.width,pos);
		context.fillText(pos,0,pos);

		context.moveTo(pos,0);
		context.lineTo(pos,canvas.height);
		context.fillText(pos,pos,8);

	}
	context.strokeStyle= 'rgba(0,0,0,0.3)';
	context.stroke();
//=========
	
	// var gradient = context.createRadialGradient(350,250,70,300,250,150);
	// gradient.addColorStop(0,'red');
	// gradient.addColorStop(1,'blue');
	// // gradient.addColorStop(0.5,'yellow');

	// context.fillStyle = gradient;
	// context.fillRect(100,100,500,300);

	context.beginPath();

	var gradient = context.createRadialGradient(400,300,195,400,300,205);
	gradient.addColorStop(0,'#333');
	gradient.addColorStop(0.5,'#fff');
	gradient.addColorStop(1,'#333');

	context.lineWidth = 10;
	context.strokeStyle = gradient;
	context.arc(400,300,200,0,2*Math.PI);
	context.stroke();
}
window.addEventListener('load',doFirst);