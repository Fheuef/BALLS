class BallsManager {
	constructor (canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.interval = 22;

		this._start();
		// this.updateTimer = setInterval(this._update, this.interval);
	}

	/**
	 * Called once when the object is created
	 */
	_start() {
		this.balls = [];
		this.mousePos = new Vector2();	//TODO Mouse stuff

		this.width = canvas.getBoundingClientRect().width;
		this.height = canvas.getBoundingClientRect().height;

		this.start();
	}

	/**
	 * Called once when the object is created (Placeholder for extensions)
	 */
	start() {

	}

	/**
	 * Called once per frame
	 */
	_update() {
		this.applyPhysics();

		this.update();

		for (let obj of this.objects) {
			obj._update();
		}
	}

	/**
	 * Called once per frame (Placeholder for extensions)
	 */
	 update() {

	}

	applyPhysics() {
		//TODO Movement and collisions

		for (let obj of this.objects) {
			nextPos = obj.position.add(obj.velocity);

			// collision stuff

			obj.position = nextPos;
		}
	}
}