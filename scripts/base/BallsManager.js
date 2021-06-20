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
	 * If you've got tests to run, dump them in here
	 */
	tests() {
		// testOval(this.canvas, this.width, this.height);
		// this.addObject(new rainBowTest1(this.canvas, this.width, this.height));

		for (let i = 0; i < 1000; i++) {
			let x = Math.random() * this.width;
			let y = Math.random() * this.height;
			let r = Math.random() * 60 + 10;

			var ball = new Ball(this, x, y, r);
			ball.addComponent(new BasicRenderer(ball));

			x = Math.random() * 50 - 25;
			y = Math.random() * 50 - 25;
			ball.velocity = new Vector2(x, y);

			
			this.addObject(ball);
		}
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

		// setTimeout(this.tests.bind(this), 500);
		this.tests();

		this.start();
	}

	/**
	 * Called once when the object is created (Placeholder for extensions)
	 */
	start() {

	}

	collideWithWall(obj, pos) {
		// TODO check if ball

		// TODO THIS IS FUCKIN BASIC AND SHITTY PLEASE REWRITE ASAP

		if (pos.x - obj.radius < 0) {
			let vel = obj.velocity;

			obj.velocity = new Vector2(Math.abs(vel.x), vel.y);
		}
		else if (pos.x + obj.radius > this.width) {
			let vel = obj.velocity;

			obj.velocity = new Vector2(-Math.abs(vel.x), vel.y);
		}

		if (pos.y - obj.radius < 0) {
			let vel = obj.velocity;

			obj.velocity = new Vector2(vel.x, Math.abs(vel.y));
		}
		else if (pos.y + obj.radius > this.height) {
			let vel = obj.velocity;

			obj.velocity = new Vector2(vel.x, -Math.abs(vel.y));
		}

		return pos;
	}

	/**
	 * Applies all the physics calculcations, such as moving objects 
	 * and collisions.
	 * 
	 * I could probably have a separate physics "thread" computed here...
	 */
	applyPhysics() {
		//TODO Movement and collisions

		console.log("physics !");

		for (let obj of this.objects) {
			try {
				var nextPos = obj.position.add(obj.velocity);

				// TODO collision stuff
				nextPos = this.collideWithWall(obj, nextPos);

				obj.position = nextPos;
			}
			catch (e) {}
		}
	}

	clearCanvas() {
		let ctx = this.canvas.getContext("2d");

		ctx.clearRect(0, 0, this.width, this.height);
	}

	/**
	 * Called once per frame
	 */
	_update() {
		this.clearCanvas();

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