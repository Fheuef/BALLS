function makeFullscreen() {
	try {
		var mainCan = document.getElementById("mainCanvas");

		mainCan.width = window.innerWidth;
		mainCan.height = window.innerHeight;
	}
	catch (e) {}
}

/**
 * Starts a BALLS instance in all canvas that have the 
 * "ballsCanvas class"
 */
function startBallManagers() {
	
	makeFullscreen();


	var cans = document.getElementsByClassName("ballsCanvas");
	
	for (var can of cans) {
		new BallsManager(can);
	}

}

/**
 * This is a really shitty way to fetch all the scripts and I hate it, 
 * but it's pretty much the only way to do it without server stuff 
 * (can't be fucked to host this somewhere other than github pages so 
 * no server side).
 * 
 * At least they're loaded in parallel so there's that I guess.
 * 
 * @param {*} scripts the array of scripts to load
 * @param {*} callback the callback function to call after all the scripts are loaded
 */
function getScripts(scripts, callback) {
    var progress = 0;
	
    scripts.forEach(function(script) { 
        $.getScript(script, function () {
            if (++progress == scripts.length) callback();
        }); 
    });
}

/**
 * Loads all the scripts and then starts the BALLS instances.
 * 
 * New scripts are to be added to the array in this function.
 */
function initBalls() {

	// Add new scripts here
	var scripts = [
		"scripts/components/Component.js",
		"scripts/components/BasicRenderer.js",
		"scripts/base/BallObject.js",
		"scripts/base/Ball.js",
		"scripts/base/BallsManager.js",
		"scripts/base/Vector2.js",
		"scripts/test/TestCanvas.js",
	];

	getScripts(scripts, startBallManagers);
	
}