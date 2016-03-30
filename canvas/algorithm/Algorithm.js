/**
 * Abstract class that represents an implementation of an algorithm animation page.
 * 
 * @member {Array} objects - the canvas objects the algorithm has
 */
var Algorithm = function () {
    this.objects = [];
};

/**
 * Draws the elements on the canvas. Should be overridden by subclass when adding functionality.
 * 
 * @param {HTML5 Canvas} canvas
 */
Algorithm.prototype.draw = function (canvas) {
    for (var i = 0; i < this.objects.length; i++) {
        var element = this.objects[i];
        element.draw(canvas);
    }
};

/**
 * Abstract function that must be overriden by subclass.
 */
Algorithm.prototype.load = function () {
    throw new Error("load function not implemented");
};

/**
 * Adds objects to the algorithm.
 * 
 * @param elements - any number of elements to be added to the algorithm
 */
Algorithm.prototype.addObjects = function (...elements) {
    for (var i = 0; i < elements.length; i++) {
        this.objects.push(elements[i]);
    }
};

/**
 * Removes objects to the algorithm.
 * 
 * @param elements - any number of elements to be removed from the algorithm
 */
Algorithm.prototype.removeObjects = function (...elements) {
    for (var i = 0; i < elements.length; i++) {
        var x = this.elements.indexOf(element);
        this.elements.splice(x, 1);
    }
};