var MouseTest = function () {
    Algorithm.call(this);

    this.name = "mouse";
    MouseTest.isDown = false;
    MouseTest.lastPosition;
    MouseTest.movingElement = null;
};

extend(Algorithm, MouseTest);


MouseTest.prototype.load = function () {
    var circle = new Circle(new Coordinate2D(100, 100), 100, new Color(250, 250, 250));
    var point = new Point(new Coordinate2D(350, 100), new Color(0, 250, 0));
    var line = new Line(new Coordinate2D(400, 100), new Coordinate2D(400, 200), new Color(250, 0, 250));
    var rect = new Rectangle(new Coordinate2D(450, 100), 100, 100, new Color(178, 178, 178));

    this.addObjects(circle, point, line, rect);

    Engine.start();
};

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return new Coordinate2D(evt.clientX - rect.left, evt.clientY - rect.top);
}

//$("#canvas").mousemove(function (evt) {
//    var mouse = getMousePos(Engine.canvas, evt);
//    $("#mouseCoor").text("Mouse Coordinates: ( " + mouse.x + ", " + mouse.y + " )");
//    var cir = Engine.algorithm.objects[0].isInBounds(mouse);
//    var point = Engine.algorithm.objects[1].isInBounds(mouse);
//    var line = Engine.algorithm.objects[2].isInBounds(mouse);
//    var rect = Engine.algorithm.objects[3].isInBounds(mouse);

//    $("#mouseCirBound").text("Is in Circle Bound: " + cir);
//    $("#mousePointBound").text("Point Bound: " + point);
//    $("#mouseLineBound").text("Line Bound:" + line);
//    $("#mouseRectBound").text("Rectangle Bound: " + rect);

//    if (MouseTest.isDown && MouseTest.movingElement === null) {
//        for (var i = 0; i < Engine.algorithm.objects.length; i++) {
//            var element = Engine.algorithm.objects[i];
//            if (element.isInBounds(mouse)) {
//                MouseTest.movingElement = element;
//                break;
//            }
//        }
//    }

//    if (MouseTest.movingElement !== null) {
//        var deltaX = mouse.x - MouseTest.lastPosition.x;
//        var deltaY = mouse.y - MouseTest.lastPosition.y;

//        MouseTest.movingElement.coordinates.x += deltaX;
//        MouseTest.movingElement.coordinates.y += deltaY;
//        MouseTest.lastPosition = mouse;
//    }
//});

//$("#canvas").mousedown(function (evt) {
//    console.log("mousedown");
//    MouseTest.isDown = true;
//    MouseTest.lastPosition = getMousePos(Engine.canvas, evt);
//});


//$("#canvas").mouseup(function () {
//    console.log("mouseup");
//    MouseTest.isDown = false;
//    MouseTest.movingElement = null;
//});