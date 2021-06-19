/**
 * A stupid test to see if the canvas dimensions are mostly right, 
 * and also if you can draw on it.
 * @param {*} canvas 
 * @param {*} width 
 * @param {*} height 
 */
function testOval(canvas, width, height) {
	ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.ellipse(width/2, height/2, width/2, height/2, 0, 0, 2 *Math.PI);
	ctx.fillStyle = "rgb(0, 120, 255)";
	ctx.fill();
}

/**
 * A pretty (?) test to check if the update loop works well, even with 
 * random objects that don't have any suitable properties and stuff
 */
class rainBowTest1 {
	constructor(canvas, width, height) {
		this.ctx = canvas.getContext("2d");
		this.width = width;
		this.height = height;
		this.hue = 0;
		
		this.setColorHue(this.hue);
		this.draw();
	}

	setColorHue(hue) {
		this.ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.ellipse(this.width/2, this.height/2, this.width/2, this.height/2, 0, 0, 2 *Math.PI);
		this.ctx.fill();
	}

	_update() {
		this.setColorHue(++this.hue);
		this.draw();
	}
}