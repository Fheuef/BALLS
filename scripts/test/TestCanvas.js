function testOval(canvas, width, height) {
	ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.arc(width/2, height/2, this.height, 0, 2*Math.PI);
	ctx.fillStyle = "#0077ff";
	ctx.fill();
}