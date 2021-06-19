/**
 * A BALLS instance, basically contains all that happens inside a canvas.
 */
class BallsManager {
	constructor (canvas) {
		this.canvas = canvas;
		this.interval = 22;

		this._start();
		this.updateTimer = setInterval(this._update.bind(this), this.interval);
	}

	/**
	 * Adds an object to the object list of the instance
	 * @param {*} obj 
	 */
	addObject(obj) {
		this.objects.push(obj);
	}

	/**
	 * If you've got tests to run before the start function, 
	 * dump them in here
	 */
	tests() {
		// testOval(this.canvas, this.width, this.height);
		this.addObject(new rainBowTest1(this.canvas, this.width, this.height));
	}

	/**
	 * Called once when the object is created
	 */
	_start() {
		this.objects = [];
		this.mousePos = new Vector2();	//TODO Mouse stuff

		// Apparently it's just 2 pixels bigger for some reason
		this.width = this.canvas.getBoundingClientRect().width - 2;
		this.height = this.canvas.getBoundingClientRect().height - 2;

		this.tests();

		this.start();
	}

	/**
	 * Called once when the object is created (Placeholder for extensions)
	 */
	start() {

	}

	/**
	 * Applies all the physics calculcations, such as moving objects 
	 * and collisions.
	 * 
	 * I could probably have a separate physics "thread" computed here...
	 */
	applyPhysics() {
		//TODO Movement and collisions

		for (let obj of this.objects) {
			try {
				nextPos = obj.position.add(obj.velocity);

				// TODO collision stuff

				obj.position = nextPos;
			}
			catch (e) {}
		}
	}

	/**
	 * Called once per frame
	 */
	_update() {
		this.applyPhysics();

		this.update();

		for (let obj of this.objects) {
			try {
				obj._update();
			}
			catch(e){}
		}
	}

	/**
	 * Called once per frame (Placeholder for extensions)
	 */
	 update() {

	}

}