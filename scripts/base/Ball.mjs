class Ball {
	constructor(manager, radius = 0, posx = 0, posy = 0) {
		this.manager = manager;
		this.position = new Vector2(posx, posy);
		this.radius = radius;
		this.velocity = new Vector2();

		this.components = [];

		this._start();
	}

	/**
	 * Called once when the object is created
	 */
	 _start() {

		for (let comp of components) {
			comp._start();
		}

		this.start();
	}

	/**
	 * Called once when the object is created (Placeholder for extensions)
	 */
	start() {

	}

	/**
	 * Called by the manager once per frame
	 */
	_update() {


		for (let comp of components) {
			comp._update();
		}

		this.update();
	}

	/**
	 * Called once per frame (Placeholder for extensions)
	 */
	 update() {

	}
}