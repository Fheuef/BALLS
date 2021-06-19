/**
 * The basic component "interface".
 * 
 * Components can be added to balls and other objects to add features, 
 * such as a renderer, physics, collisions, or a trail for example.
 * 
 * All components have start and update functions, called respectively 
 * when the object is created and during the udpdate loop.
 * 
 * New components are supposed to extend this class, but I guess JS 
 * doesn't care that much about interfaces and abstract classes anyway.
 */
class Component {

	constructor(parent) {
		this.parent = parent;
		this._start();
	}

	_start() {
		this.start();
	};

	start() {}

	_update() {
		this.update();
	};

	update() {}
}