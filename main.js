function initBalls() {
	var cans = document.getElementsByClassName("ballsCanvas");
	
	for (var can of cans) {
		new BallsManager(can);
	}
}