var TestAlgorithm = function () {
    Algorithm.call(this);

    this.name = "test";
};

extend(Algorithm, TestAlgorithm);



TestAlgorithm.prototype.draw = function (canvas) {
    Algorithm.prototype.draw.call(this, canvas);

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

    this.activateMouse();

    //var coor = new Coordinate2D(Math.random() * Engine.canvas.width, Math.random() * Engine.canvas.height);
    //var circle = new Circle(coor, (Math.random() * 50) + 50, Color.random());
    //this.addObjects(circle);

    //coor = new Coordinate2D(Math.random() * Engine.canvas.width, Math.random() * Engine.canvas.height);
    //circle = new Circle(coor, (Math.random() * 50) + 50, Color.random());
    //this.addObjects(circle);


    //var edge = new Edge(this.objects[0], this.objects[1], new Color(250, 250, 250));
    //this.addEdges(edge);




    for (var i = 0; i < 50; i++) {
    	var coor = new Coordinate2D(Math.random() * Engine.canvas.width, Math.random() * Engine.canvas.height);
    	var circle = new Circle(coor, (Math.random() * 10) + 5);

    	this.addObjects(circle);
    }

    for (var j = 0; j < this.objects.length; j++) {

    	var startTime = 0;

    	var animationLength = 1000;

    	//var hit = false;

    	for (var i = 0; i < 50; i++) {
            
    		var col = new Color();
    		col.becomeRandomColor();

    		var colorAnimation = new ColorAnimation(startTime, animationLength, this.objects[j], col);
    		this.animations.addAnimation(colorAnimation);


    		var coor = new Coordinate2D((Math.random() * Engine.canvas.width) - 50, (Math.random() * Engine.canvas.height) - 50);


    		var moveAnimation = new MoveAnimation(startTime, animationLength, this.objects[j], coor);
    		this.animations.addAnimation(moveAnimation);


    		startTime = startTime + animationLength;

    		/*
    		coor = new Coordinate2D(Math.random() * Engine.canvas.width +100, Math.random() * Engine.canvas.height  +100);
                
    		var newAnimationLength = (Math.random() * 100) + 400;
    		moveAnimation = new MoveAnimation(startTime, newAnimationLength, this.objects[j], coor);
    		this.animations.addAnimation(moveAnimation);

    		startTime = startTime + newAnimationLength;
    		*/
            
            
    	}

    }

    Engine.start();


};

