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
        context.fillRect(this.coordinates.x, this.coordinates.y, 2, 2);
        context.stroke();
    }
};