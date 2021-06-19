function startBallManagers() {
	var cans = document.getElementsByClassName("ballsCanvas");
	
	for (var can of cans) {
		new BallsManager(can);
	}
}

function getScripts(scripts, callback) {
    var progress = 0;
	
    scripts.forEach(function(script) { 
        $.getScript(script, function () {
            if (++progress == scripts.length) callback();
        }); 
    });
}

function initBalls() {

	var scripts_arr = [
		"scripts/base/Ball.js",
		"scripts/base/BallsManager.js",
		"scripts/base/Vector2.js",
		"scripts/components/Component.js",
		"scripts/components/BasicRenderer.js",
		"scripts/test/TestCanvas.js",
	];

	getScripts(scripts_arr, startBallManagers);
	
}