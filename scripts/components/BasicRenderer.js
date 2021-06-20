/**
 * A ball with this component will be rendered as a basic colored circle.
 * 
 * This is the most basic renderer
 */
class BasicRenderer extends Component {
	constructor(parent) {
		super(parent);
		
		this.manager = parent.manager;
		this.ctx = parent.manager.canvas.getContext("2d");
		this._start();
	}

	draw() {
		// TODO opacity


		//TODO check if parent is Ball
		this.ctx.beginPath();
		this.ctx.ellipse(
				this.parent.position.x, 
				this.parent.position.y, 
				this.parent.radius, 
				this.parent.radius, 
				0, 
				0, 
				2*Math.PI
		);

		this.ctx.fillStyle = this.color;
		this.ctx.fill();
	}

	_start() {
		this.color = "hsl(" + Math.round(Math.random() * 360) + ", 100%, 50%)";
		this.opacity = 1.0;
	}

	_update() {
		this.draw();
	}
	
}