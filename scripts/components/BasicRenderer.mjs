class BasicRenderer extends Component {
	constructor(parent) {
		this.parent = parent;
		this.manager = parent.manager;
		this._start();
	}

	_start() {
		this.color = "#000000";
		this.opacity = 1.0;

		// TODO ?
	}

	_update() {
		// TODO maybe

		this.draw();
	}

	draw() {
		// TODO draw shit on that canvas bitch
	}
}