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
    
    this.delta1x = Math.abs(point1.x - coor.x);
    this.delta1y = Math.abs(point1.y - coor.y);
    this.delta2x = Math.abs(point2.x - coor.x);
    this.delta2y = Math.abs(point2.y - coor.y);
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
        context.moveTo(this.coordinates.x + this.delta1x, this.coordinates.y + this.delta1y);
        context.lineTo(this.coordinates.x + this.delta2x, this.coordinates.y + this.delta2y);
        context.closePath();
        context.stroke();
    }
};


Line.prototype.isInBounds = function (coordinates) {
    if (coordinates === undefined) {
        return false;
    }
    else {
        var dist1 = Math.sqrt(Math.pow((this.coordinates.x + this.delta1x) - coordinates.x, 2) + Math.pow((this.coordinates.y + this.delta1y) - coordinates.y, 2));
        var dist2 = Math.sqrt(Math.pow((this.coordinates.x + this.delta2x) - coordinates.x, 2) + Math.pow((this.coordinates.y + this.delta2y) - coordinates.y, 2));
        var dist3 = Math.sqrt(Math.pow((this.coordinates.x + this.delta2x) - (this.coordinates.x + this.delta1x), 2) + Math.pow((this.coordinates.y + this.delta2y) - (this.coordinates.y + this.delta1y), 2));

        return Math.floor(dist1 + dist2) == Math.floor(dist3);
    }
};