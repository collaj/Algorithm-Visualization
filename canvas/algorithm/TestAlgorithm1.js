var TestAlgorithm1 = function () {
	this.name = "test1";
	this.objects = [];
};

extend(Algorithm, TestAlgorithm1);



TestAlgorithm1.prototype.draw = function (canvas) {
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

TestAlgorithm1.prototype.load = function () {

	for (var i = 0; i < 50; i++) {
	    var coor = new Coordinate2D(Math.random() * Engine.canvas.width, Math.random() * Engine.canvas.height);

	    var col = new Color();
	    col.becomeRandomColor();

	    var rect = new Rectangle(coor, Math.random() * 100, Math.random() * 100, col, true, true);

		this.addObject(rect);
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


TestAlgorithm1.prototype.addObject = function (element) {
	this.objects.push(element);
};

