﻿/**
 * Represents a circle on the canvas.
 * @constructor
 * @member {boolean} visible - if the point is visible or not
 * @member {Color} color - Color object representing the color of the point
 * @member {Coordinate2D} coordinates - coordinates of the top left corner of the circle
 * @member {int} radius - radius of the circle
 * @member {boolean} fill - is element filled
 * @member {Animations} animations - animations for the Circle
 */
var Circle = function (coordinates, radius, color, text, fill, visible) {
    Element.call(this, coordinates, color, text, visible);

    this.radius = radius;
    this.fill = (fill !== undefined) ? fill : true;
};


// inheritance
extend(Element, Circle);

/**
 * Draws the circle on the canvas
 * @param {HTML5 Canvas object} canvas
 */
Circle.prototype.draw = function (canvas) {
    var context = Element.prototype.draw.call(this, canvas);
    if (context !== undefined) {
        context.beginPath();

        var center = this.centerPoint();
        context.arc(center.x, center.y, this.radius, 0, Math.PI * 2);
        if (this.fill) {
            context.fill();
        }
        context.closePath();
        context.stroke();
        if (this.text !== undefined) {
            this.text.draw(context, this.centerPoint());
        }
    }
};

/**
 * Gets the coordinates of the center point of the circle
 * @return {Coordinate2D} - coordinates of the center point
 */
Circle.prototype.centerPoint = function () {
    return new Coordinate2D(this.coordinates.x + this.radius, this.coordinates.y + this.radius);
};


Circle.prototype.isInBounds = function (coordinates) {
    var center = this.centerPoint();
    var dist = Math.sqrt(Math.pow(coordinates.x - center.x, 2) + Math.pow(coordinates.y - center.y, 2));
    return dist <= this.radius;
};