/**
 * Represents a single point on the canvas.
 * @constructor
 * @member {boolean} visible - if the point is visible or not
 * @member {Color} color - color of the point
 * @member {Coordinate2D} coordinates - coordinates of the point
 * @member {Animations} animations - animations for the point
 */
var Point = function (coordinates, color, visible) {
    Element.call(this, coordinates, color, visible);

    this.width = 2;
};

// inheritance
extend(Element, Point);

/**
 * Graphically drawing the point on the canvas
 * @param {HTML5 Canvas object} canvas
 */
Point.prototype.draw = function (canvas) {
    var context = Element.prototype.draw.call(this, canvas);
    if (context !== undefined) {
        context.beginPath();
        context.fillRect(this.coordinates.x, this.coordinates.y, this.width, this.width);
        context.closePath();
        context.stroke();
    }
};


Point.prototype.isInBounds = function (coordinates) {
    if (coordinates === undefined) {
        return false;
    }

    return coordinates.x >= this.coordinates.x &&
           coordinates.x <= this.coordinates.x + this.width &&
           coordinates.y >= this.coordinates.y &&
           coordinates.y <= this.coordinates.y + this.width;
};


Point.prototype.centerPoint = function () {
    return new Coordinate2D(this.coordinates.x + (this.width / 2), this.coordinates.y + (this.width / 2));
};