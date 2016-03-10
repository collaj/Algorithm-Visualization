/**
 * Holds and handles animations for an element
 * @constructor
 * @member {Array} animations - holds all of the animations
 */
var Animations = function () {
    this.animations = [];
    
};

/**
 * Adds an animation to the object
 * @param {Animation} animation - the animation to add
 */
Animations.prototype.addAnimation = function (animation) {
    this.animations.push(animation);
};

/**
 * Removes an animation from the object
 * @param {Animation} animation - the animation to remove
 */
Animations.prototype.removeAnimation = function (animation) {
    var index = this.animations.indexOf(animation);
    this.animations.splice(index, 1);
};

/**
 * Applies the aniamtions to the element
 */
Animations.prototype.applyAnimations = function () {
    for (var i = 0; i < this.animations.length; i++) {
        var animation = this.animations[i];

        if (Engine.now >= animation.start) {
            if (!animation.hasStarted) {

                animation.startAnimation();
                animation.hasStarted = true; 
            }

            animation.draw();
        }

        if (Engine.now >= animation.start + animation.duration) {
            this.removeAnimation(animation);
        }
    }
};