/**
 * Animation that moves an element
 * 
 * @constructor - inherits from Animation
 * @member - inherit from Animation
 * @member {Coordinate2D} destination - the coordinates of the destination
 * @member {int} startX - x coordinate of where the element started
 * @member {int} startY - y coordinate of where the element started
 * @member {int} deltaX - x coordinate delta change
 * @member {int} deltaY - y coordinate delta change
 * 
 * @param {int} start - start time of the animation
 * @param {int} duration - the length of the animation
 * @param {Element} element - the element that the animation is for
 */
var MoveAnimation = function (start, duration, element, destination) {
    // superconstructor call
    Animation.call(this, start, duration, element);

    this.destination = destination;

    this.startX = this.element.coordinates.x;
    this.startY = this.element.coordinates.y;
    
    this.deltaX = destination.x - this.startX;
    this.deltaY = destination.y - this.startY;
};

// inheritance
extend(Animation, MoveAnimation);

/**
 * Implements Animation draw method
 */
MoveAnimation.prototype.draw = function () {
    var progress = this.percentComplete();

    this.element.coordinates.x = this.startX + (this.deltaX * progress);
    this.element.coordinates.y = this.startY + (this.deltaY * progress);
};

/**
 * Overrides Animations start. Calls Base class start method.
 */
MoveAnimation.prototype.startAnimation = function () {
    // super method call
    Animation.prototype.startAnimation.call(this);

    this.startX = this.element.coordinates.x;
    this.startY = this.element.coordinates.y;

    this.deltaX = this.destination.x - this.startX;
    this.deltaY = this.destination.y - this.startY;
};

MoveAnimation.prototype.endAnimation = function () {
    this.element.coordinates = this.destination.clone();
};