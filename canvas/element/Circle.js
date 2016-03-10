/**
 * Represents a circle on the canvas.
 * @constructor
 * @member {boolean} visible - if the point is visible or not
 * @member {Color} color - Color object representing the color of the point
 * @member {Coordinate2D} coordinates - coordinates of the top left corner of the circle
 * @member {int} radius - radius of the circle
 * @member {boolean} fill - is element filled
 * @member {Animations} animations - animations for the Circle
 */
var Circle = function (origin, radius) {
    this.visible = true;
    this.color = new Color();
    this.coordinates = new Coordinate2D(origin.x, origin.y);
    this.radius = radius;
    this.fill = true;
    this.animations = new Animations();
};

/**
 * Draws the circle on the canvas
 * @param {HTML5 Canvas object} canvas
 */
Circle.prototype.draw = function (canvas) {
    this.animations.applyAnimations();

    if (this.visible) {
        this.color.draw(canvas);
        var ctx = canvas.getContext("2d");
        ctx.beginPath();

        var center = this.getCenterPoint();
        ctx.arc(center.x, center.y, this.radius, 0, Math.PI*2);
        if (this.fill) {
            ctx.fill();
        }
        ctx.closePath();
        ctx.stroke();
    }
};

/**
 * Gets the coordinates of the center point of the circle
 * @return {Coordinate2D} - coordinates of the center point
 */
Circle.prototype.getCenterPoint = function () {
    return new Coordinate2D(this.coordinates.x + this.radius, this.coordinates.y + this.radius);
};