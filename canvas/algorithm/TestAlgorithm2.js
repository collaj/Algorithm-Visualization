var TestAlgorithm2 = function () {
	this.name = "test2";
	this.objects = [];
};

extend(Algorithm, TestAlgorithm2);



TestAlgorithm2.prototype.draw = function (canvas) {
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

TestAlgorithm2.prototype.load = function () {

	for (var i = 0; i < 100; i++) {
	    var coor1 = new Coordinate2D(Math.random() * Engine.canvas.width, Math.random() * Engine.canvas.height);
	    var coor2 = new Coordinate2D(Math.random() * Engine.canvas.width, Math.random() * Engine.canvas.height);

	    var col = new Color();
	    col.becomeRandomColor();

	    var line = new Line(coor1, coor2, col, true);

	    this.addObject(line);
	}

	for (var j = 0; j < this.objects.length; j++) {

		var startTime = 0;
		var animationLength = 500;

		//var hit = false;

		for (var i = 0; i < 100; i++) {
			console.log(startTime);
			
		
			var col = new Color();
			col.becomeRandomColor();

			var colorAnimation = new ColorAnimation(startTime, animationLength, this.objects[j], col);
			this.objects[j].animations.addAnimation(colorAnimation);


			var coor = new Coordinate2D(Math.random() * Engine.canvas.width, Math.random() * Engine.canvas.height);


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


TestAlgorithm2.prototype.addObject = function (element) {
	this.objects.push(element);
};

