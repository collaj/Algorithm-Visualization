/**
 * Animation that changes the color of an element
 * 
 * @constructor - inherits from  Animation
 * @member inherit from Animation
 * @member {Color} endColor - color that the element will be after the animation
 * @member {Color} startColor - color that the element was at the start of the animation
 * @member {int} deltaRed - amount of change for the red value
 * @member {int} deltaGreen - amount of change for the green value
 * @member {int} deltaBlue - amount of change for the blue value
 * @member {int} deltaOpacity - amount of change for the opacity value
 * 
 * @param {int} start - milliseconds of when the animation is suppose to start
 * @param {int} duration - milliseconds of how long the animation should last
 * @param {Element} element - element that is being animated
 */
var ColorAnimation = function (start, duration, element, endColor) {
    // calling superconstructor
    Animation.call(this, start, duration, element);

    this.endColor = endColor;
    this.startColor;

    this.deltaRed;
    this.deltaGreen;
    this.deltaBlue;
    this.deltaOpacity;
};

// inheritance //
extend(Animation, ColorAnimation);


/**
 * Applies the animation to the element
 */
ColorAnimation.prototype.draw = function () {
    var progress = this.percentComplete();

    this.element.color.red = this.startColor.red + Math.floor(this.deltaRed * progress);
    this.element.color.green = this.startColor.green + Math.floor(this.deltaGreen * progress);
    this.element.color.blue = this.startColor.blue + Math.floor(this.deltaBlue * progress);
    this.element.color.opacity = this.startColor.opacity + Math.floor(this.deltaOpacity * progress);
};

/**
 * Called right before the first draw cycle, a.k.a setup function
 */
ColorAnimation.prototype.startAnimation = function () {
    // Call super method first
    Animation.prototype.startAnimation.call(this);

    this.startColor = this.element.color.clone();

    this.deltaRed = this.endColor.red - this.startColor.red;
    this.deltaGreen = this.endColor.green - this.startColor.green;
    this.deltaBlue = this.endColor.blue - this.startColor.blue;
    this.deltaOpacity = this.endColor.opacity - this.startColor.opacity;
};