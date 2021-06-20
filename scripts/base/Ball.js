class Ball extends BallObject {
	constructor(manager, posx = 0, posy = 0, radius = 0) {
		super(manager, posx, posy);

		this.radius = radius;
	}
}