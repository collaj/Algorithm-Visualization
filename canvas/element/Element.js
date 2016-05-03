/**
 * This is an abstract class that represents a single drawable object,
 * or an group of drawable objects.
 * @constructor
 */
var Element = function (coordinates, color, visible) {
    this.visible = (visible !== undefined) ? visible : true;
    this.color = (color !== undefined) ? color : new Color();
    this.coordinates = coordinates;
};

/**
 * Sub classes should override this function and call it inside their
 * draw function.
 * 
 * @param {HTML5 Canvas object} canvas
 * @returns {HTML5 Canvas Context} - context of the element
 */
Element.prototype.draw = function (canvas) {
    if (!this.visible) {
        return undefined;
    }
    else {
        var context = canvas.getContext("2d");
        this.color.draw(context);
        return context;
    }
};

Element.prototype.isInBounds = function (coordinates) {
    this.coordinates.equals(coordinates);
};

Element.prototype.centerPoint = function () {
    throw new Error("Function centerPoint not implemented.");
};