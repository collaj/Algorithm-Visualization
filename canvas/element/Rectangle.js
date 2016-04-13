/**
 * Represents a rectangle on the canvas.
 * @constructor
 * @member {boolean} visible - if the point is visible or not
 * @member {Color} color - Color object representing the color of the point
 * @member {Coordinate2D} coordinates - coordinates of the top left corner of rectangle
 * @member {int} width - width of the rectangle
 * @member {int} height - height of the rectangle
 * @member {boolean} fill - is element filled
 * @member {Animations} animations - animations for the Rectangle
 */
var Rectangle = function (coordinates, width, height, color, fill, visible) {
    Element.call(this, coordinates, color, visible);

    this.width = (width !== undefined) ? width : 0;
    this.height = (height !== undefined) ? height : 0;
    this.fill = (fill !== undefined) ? fill : true;
};


// inheritance
extend(Element, Rectangle);

/**
 * Draws the rectangle on the canvas
 * @param {HTML5 Canvas object} canvas
 */
Rectangle.prototype.draw = function (canvas) {
    var context = Element.prototype.draw.call(this, canvas);
    if (context !== undefined) {
        context.beginPath();
        context.rect(this.coordinates.x, this.coordinates.y, this.width, this.height);
        context.closePath();
        if (this.fill) {
            context.fill();
        }
        context.stroke();
    }
};