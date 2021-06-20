class BallObject {
	constructor(manager, posx = 0, posy = 0) {
		this.manager = manager;
		this.position = new Vector2(posx, posy);
		this.angle = 0.0;
		this.velocity = new Vector2();
		this.angVelocity = new Vector2();
		this.mass = 1;
		this.fixed = false;

		this.components = [];

		this._start();
	}

	/**
	 * Called once when the object is created
	 */
	 _start() {

		for (let comp of this.components) {
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


		for (let comp of this.components) {
			comp._update();
		}

		this.update();
	}

	/**
	 * Called once per frame (Placeholder for extensions)
	 */
	 update() {

	}

	addComponent(component) {
		this.components.push(component);
	}
}