var TestAlgorithm = function () {
    this.objects = [];
};


TestAlgorithm.prototype.draw = function (canvas) {
    console.log(this.objects);
    for (var i = 0; i < this.objects.length; i++) {
        var element = this.objects[i];
        element.draw(canvas);
    }
};


TestAlgorithm.prototype.load = function () {

    for (var i = 0; i < 15; i++) {
        var coor = new Coordinate2D(Math.random() * Engine.canvas.width, Math.random() * Engine.canvas.height);
        var circle = new Circle(coor, Math.random() * 50);

        this.addObject(circle);
    }

    for (var j = 0; j < this.objects.length; j++) {

        var startTime = 1000;
        var animationLength = 1000;

        for (var i = 0; i < 10; i++) {
            var col = new Color();
            col.becomeRandomColor();

            var colorAnimation = new ColorAnimation(startTime, animationLength, this.objects[j], col);
            this.objects[j].animations.addAnimation(colorAnimation);

            startTime = startTime + animationLength;
        }

    }



    
};


TestAlgorithm.prototype.addObject = function (element) {
    this.objects.push(element);
};


function button() {
    console.log("button");
};