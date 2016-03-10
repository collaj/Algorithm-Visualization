/**
 * Animation that changes the color of an element
 * @constructor
 * @member {boolean} hasStarted - whether or not the animation has started yet
 * @member {int} start - milliseconds of when the animation is suppose to start
 * @member {int} duration - milliseconds of how long the animation should last
 * @member {Element} element - element that is being animated
 * @member {Color} endColor - color that the element will be after the animation
 * @member {Color} startColor - color that the element was at the start of the animation
 * @member {int} deltaRed - amount of change for the red value
 * @member {int} deltaGreen - amount of change for the green value
 * @member {int} deltaBlue - amount of change for the blue value
 * @member {int} deltaOpacity - amount of change for the opacity value
 */
var ColorAnimation = function (start, duration, element, endColor) {
    this.hasStarted = false;

    this.start = start;
    this.duration = duration;

    this.element = element;

    this.endColor = endColor;
    this.startColor;

    this.deltaRed;
    this.deltaGreen;
    this.deltaBlue;
    this.deltaOpacity;
};

/**
 * Applies the animation to the element
 */
ColorAnimation.prototype.draw = function () {
    if (this.startColor !== undefined) {
        var progress = (Engine.now - this.start) / this.duration;
        if (progress > 1) {
            progress = 1;
        }

        this.element.color.red = this.startColor.red + Math.floor(this.deltaRed * progress);
        this.element.color.green = this.startColor.green + Math.floor(this.deltaGreen * progress);
        this.element.color.blue = this.startColor.blue + Math.floor(this.deltaBlue * progress);
        this.element.color.opacity = this.startColor.opacity + Math.floor(this.deltaOpacity * progress);
    }
};

/**
 * Called right before the first draw cycle
 */
ColorAnimation.prototype.startAnimation = function () {
    this.startColor = this.element.color.clone();

    this.deltaRed = this.endColor.red - this.startColor.red;
    this.deltaGreen = this.endColor.green - this.startColor.green;
    this.deltaBlue = this.endColor.blue - this.startColor.blue;
    this.deltaOpacity = this.endColor.opacity - this.startColor.opacity;

};


ColorAnimation.prototype.compareTo = function (object) {
    return this.start - object.start;
}