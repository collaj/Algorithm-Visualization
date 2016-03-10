/**
 * This is an abstract class that represents an implementation of an algorithm animation page. 
 * This is the only class that is attached to the HTML.
 * @constructor
 */
var Algorithm = function () {
    
    //To be overridden when extended by concrete algorithm implementations.
    throw new Error("Cannot instantiate this abstract class.");
};

/**
 * Abstract function to be overridden by concrete algorithm implementations.
 * @abstract
 * @param {HTML Canvas object}
 */
Algorithm.prototype.draw = function (canvas) {
    throw new Error('must be implemented by subclass!');
};

/**
 * Abstract function to be overridden by concreate algorithm implementations.
 * loads HTML onto the DOM
 * @abstract
 */
Algorithm.prototype.load = function () {
    throw new Error('must be implemented by subclass!');
};