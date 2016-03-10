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
var Rectangle = function (coordinates, width, height, fill) {
    this.visible = true;
    this.color = new Color();
    this.coordinates = coordinates;
    this.width = width;
    this.height = height;
    this.fill = (fill !== undefined) ? fill : true;

    this.animations = new Animations();
};

/**
 * Draws the rectangle on the canvas
 * @param {HTML5 Canvas object} canvas
 */
Rectangle.prototype.draw = function (canvas) {
    this.prototype.draw();
    this.animations.applyAnimations();

    if (this.visible) {
        this.color.draw(canvas);
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        if (this.fill) {
            ctx.fillRect(this.coordinates.x, this.coordinates.y, this.width, this.height);
        }
        else {
            ctx.rect(this.coordinates.x, this.coordinates.y, this.width, this.height);
        }
        ctx.closePath();
        ctx.stroke();
    }
};