/**
 * This is an abstract class that represents a single drawable object,
 * or an group of drawable objects.
 * @constructor
 */
var Element = function () {
    //To be overridden when extended by concrete element implementations.
    throw new Error("Cannot instantiate this abstract class.");
};

/**
 * Abstract function draws the object on the canvas
 * @abstract
 * @param {HTML5 Canvas object} canvas
 */
Element.prototype.draw = function (canvas) {
    throw new Error('must be implemented by subclass!');
};