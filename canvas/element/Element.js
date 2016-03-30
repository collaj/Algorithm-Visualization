/**
 * This is an abstract class that represents a single drawable object,
 * or an group of drawable objects.
 * @constructor
 */
var Element = function (coordinates, color, visible) {
    this.visible = (visible !== undefined) ? visible : true;
    this.color = (color !== undefined) ? color : new Color();
    this.coordinates = coordinates;
    this.animations = new AnimationManager();
};

/**
 * Abstract function draws the object on the canvas
 * @abstract
 * @param {HTML5 Canvas object} canvas
 */
Element.prototype.draw = function (canvas) {
    this.animations.applyAnimations();

    if (!this.visible) {
        return undefined;
    }
    else {
        var context = canvas.getContext("2d");
        this.color.draw(context);
        return context;
    }
};