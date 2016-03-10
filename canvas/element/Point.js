/**
 * Represents a single point on the canvas.
 * @constructor
 * @member {boolean} visible - if the point is visible or not
 * @member {Color} color - color of the point
 * @member {Coordinate2D} coordinates - coordinates of the point
 * @member {Animations} animations - animations for the point
 */
var Point = function (x, y) {
    this.visible = true;
    this.color = new Color();
    this.coordinates = new Coordinate2D(x, y);
    this.animations = new Animations();
};

/**
 * Graphically drawing the point on the canvas
 * @param {HTML5 Canvas object} canvas
 */
Point.prototype.draw = function (canvas) {
    this.animations.applyAnimations();

    if (this.visible) {
        this.color.draw(canvas);

        var ctx = canvas.getContext("2d");
        ctx.fillRect(this.coordinates.x, this.coordinates.y, 2, 2);
        ctx.stroke();
    }
};