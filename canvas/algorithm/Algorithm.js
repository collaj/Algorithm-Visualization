/**
 * Abstract class that represents an implementation of an algorithm animation page.
 * 
 * @member {Array} objects - the canvas objects the algorithm has
 */
var Algorithm = function () {
    this.objects = [];
    this.edges = [];
    this.animations = new AnimationManager();
};

/**
 * Draws the elements on the canvas. Can be overridden by subclass to add functionality.
 * 
 * @param {HTML5 Canvas} canvas
 */
Algorithm.prototype.draw = function (canvas) {
    this.animations.applyAnimations();

    for (var i = 0; i < this.edges.length; i++) {
        var edge = this.edges[i];
        edge.draw(canvas);
    }

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



Algorithm.prototype.activateMouse = function () {
    Mouse.activeAlgorithm = this;
};


Algorithm.prototype.addEdges = function (...edges) {
    for (var i = 0; i < edges.length; i++) {
        this.edges.push(edges[i]);
    }
};