/**
 * Represents a line on the canvas.
 * @constructor
 * @member {boolean} visible - if the line is visible or not
 * @member {Color} color - color of the line
 * @member {Coordinate2D} origin - coordinates of the upper left corner of the enclosing rectangle
 * @member {Coordinate2D} point1 - one endpoint of the line
 * @member {Coordinate2D} point2 - one endpoint of the line
 * @member {Animations} animations - animations for the line
 */
var Line = function (point1, point2, color, visible) {
    var coor = new Coordinate2D(Math.min(point1.x, point2.x),
                                Math.min(point1.y, point2.y));
    Element.call(this, coor, color, visible);
    
    this.point1 = point1;
    this.point2 = point2;
};

// inheritance
extend(Element, Line);


/**
 * Graphically drawing the line on the canvas
 * @param {HTML5 Canvas object} canvas
 */
Line.prototype.draw = function (canvas) {
    var context = Element.prototype.draw.call(this, canvas);
    if (context !== undefined) {
        context.beginPath();
        context.moveTo(this.point1.x, this.point1.y);
        context.lineTo(this.point2.x, this.point2.y);
        context.closePath();
        context.stroke();
    }
};