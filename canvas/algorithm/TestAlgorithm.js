var TestAlgorithm = function () {
	this.name = "test";
	this.objects = [];
};

extend(Algorithm, TestAlgorithm);



TestAlgorithm.prototype.draw = function (canvas) {
	var thisLoop = new Date;
	var fps = 1000 / (thisLoop - this.lastLoop);
	this.lastLoop = thisLoop;
	var x = document.getElementById("fps");
	x.innerHTML = "FPS: " + Math.ceil(fps);


	for (var i = 0; i < this.objects.length; i++) {
		var element = this.objects[i];
		element.draw(canvas);
	}

};

TestAlgorithm.prototype.load = function () {

	for (var i = 0; i < 10; i++) {
		var coor = new Coordinate2D(Math.random() * Engine.canvas.width, Math.random() * Engine.canvas.height);
		var circle = new Circle(coor, (Math.random() * 10) + 5);

		this.addObject(circle);
	}

	for (var j = 0; j < this.objects.length; j++) {

	    var startTime = 0;

		var animationLength = 10000;

		//var hit = false;

		for (var i = 0; i < 100; i++) {
			
			var col = new Color();
			col.becomeRandomColor();

			var colorAnimation = new ColorAnimation(startTime, animationLength, this.objects[j], col);
			this.objects[j].animations.addAnimation(colorAnimation);


			var coor = new Coordinate2D((Math.random() * Engine.canvas.width) - 50, (Math.random() * Engine.canvas.height) - 50);


			var moveAnimation = new MoveAnimation(startTime, animationLength, this.objects[j], coor);
			this.objects[j].animations.addAnimation(moveAnimation);


			startTime = startTime + animationLength;

			/*coor = new Coordinate2D(Math.random() * Engine.canvas.width +100, Math.random() * Engine.canvas.height  +100);
				
			var newAnimationLength = (Math.random() * 100) + 400;
			moveAnimation = new MoveAnimation(startTime, newAnimationLength, this.objects[j], coor);
			this.objects[j].animations.addAnimation(moveAnimation);


			startTime = startTime + newAnimationLength;
			*/
			
		}

	}




};


TestAlgorithm.prototype.addObject = function (element) {
	this.objects.push(element);
};

