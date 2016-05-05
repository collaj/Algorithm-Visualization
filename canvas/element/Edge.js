var Edge = function (object1, object2, color, visible) {
    Element.call(this, undefined, color, undefined, visible);

    this.object1 = object1;
    this.object2 = object2;
};

// inheritance
extend(Element, Edge);


Edge.prototype.draw = function (canvas) {
    var context = Element.prototype.draw.call(this, canvas);
    if (context !== undefined) {
        context.beginPath();
        var coor1 = this.object1.centerPoint();
        var coor2 = this.object2.centerPoint();
        context.moveTo(coor1.x, coor1.y);
        context.lineTo(coor2.x, coor2.y);
        context.closePath();
        context.stroke();
    }
};


Edge.prototype.isInBounds = function (coordinates) {
    return false;  // don't let mouse move edges
};