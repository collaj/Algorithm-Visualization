/**
 * Coordinate object for elements in a 2D canvas context
 * @constructor
 * @member {int} x - x coordinate of the coordinate
 * @member {int} y - y coordinate of the coordinate
 */
var Coordinate2D = function (x, y) {
    this.x = x;
    this.y = y;
};

Coordinate2D.prototype.clone = function () {
    return new Coordinate2D(this.x, this.y);
};