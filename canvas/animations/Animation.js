/**
 * Animation base class.
 * 
 * @member {boolean} hasStarted - whether or not the animation has started yet
 * @member {int} start - when the animation is set to start (milliseconds)
 * @member {int} duration - the duration of the animation (milliseconds)
 * @member {Element} element - the element the animation is assigned to
 */
var Animation = function (start, duration, element) {
    this.hasStarted = false;
    this.start = start;
    this.duration = duration;
    this.element = element;
};

/**
 * Abstract method that all subclasses need to implement. Defines how the 
 * animation is applied to the object.
 */
Animation.prototype.draw = function () {
    throw new Error("Draw not implemented");
};

/**
 * General comparison method used to sort the animations.
 * 
 * @param {Animation} object - other animation to compare with
 */
Animation.prototype.compareTo = function (object) {
    return this.start - object.start;
};

/**
 * This is what all animations must do. Other animations may override this method,
 * but they must call this base method in the first line of their method.
 */
Animation.prototype.startAnimation = function () {
    this.hasStarted = true;
};

/**
 * Returns the percent complete of the animation.
 * 
 * @returns {int} progress - decimal from 0 to 1
 */
Animation.prototype.percentComplete = function () {
    var progress = (Engine.now - this.start) / this.duration;
    if (progress > 1) {
        return 1;
    }
    else if (progress < 0) {
        return 0;
    }
    else {
        return progress;
    }
};