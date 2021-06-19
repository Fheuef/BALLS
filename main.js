function startBallManagers() {
	var cans = document.getElementsByClassName("ballsCanvas");
	
	for (var can of cans) {
		new BallsManager(can);
	}
}

function initBalls() {

	var scripts_arr = [
		"base/Ball.js",
		"base/BallManager.js",
		"base/Vector2.js",
		"components/Component.js",
		"components/BasicRenderer.js",
		"test/TestCanvas.js",
	];

	// Loads several scripts
	$.getMultiScripts = function(arr, path) {
		var _arr = $.map(arr, function(scr) {
			return $.getScript( (path||"") + scr );
		});
			
		_arr.push($.Deferred(function( deferred ){
			$( deferred.resolve );
		}));
			
		return $.when.apply($, _arr);
	}


	$.getMultiScripts(scripts_arr, '/scripts/').done(startBallManagers);
	
}