var Mouse = {
    activeAlgorithm: null,

    isDown: false,
    movingElement: null,
    lastPosition: null
};

Mouse.reset = function () {
    Mouse.activeAlgorithm = null;
    Mouse.isDown = false;
    Mouse.movingElement = null;
    Mouse.lastPosition = null;
};


// Note to self: can probably improve this by finding the element in mousedown()
$("#canvas").mousemove(function (evt) {
    if (Mouse.activeAlgorithm !== null) {
        var mouse = getMousePos(Engine.canvas, evt);

        if (Mouse.movingElement !== null) {
            var deltaX = mouse.x - Mouse.lastPosition.x;
            var deltaY = mouse.y - Mouse.lastPosition.y;

            Mouse.movingElement.coordinates.x += deltaX;
            Mouse.movingElement.coordinates.y += deltaY;
            Mouse.lastPosition = mouse;
        }
    }
});

$("#canvas").mousedown(function (evt) {
    if (Mouse.activeAlgorithm !== null) {
        Mouse.isDown = true;
        Mouse.lastPosition = getMousePos(Engine.canvas, evt);

        var mouse = getMousePos(Engine.canvas, evt);
        if (Mouse.movingElement === null) {
            for (var i = 0; i < Mouse.activeAlgorithm.objects.length; i++) {
                var element = Mouse.activeAlgorithm.objects[i];
                if (element.isInBounds(mouse)) {
                    Mouse.movingElement = element;
                    break;
                }
            }
        }

    }
});


$("#canvas").mouseup(function () {
    if (Mouse.activeAlgorithm !== null) {
        Mouse.isDown = false;
        Mouse.movingElement = null;
    }
});



function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return new Coordinate2D(evt.clientX - rect.left, evt.clientY - rect.top);
}