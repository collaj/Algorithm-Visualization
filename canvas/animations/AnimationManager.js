/**
 * Holds and handles animations for an element
 * @constructor
 * @member {Array} animations - holds all of the animations
 */
var AnimationManager = function () {
    this.animations = new SortedList();
    
};

/**
 * Adds an animation to the object
 * @param {Animation} animation - the animation to add
 */
AnimationManager.prototype.addAnimation = function (animation) {
    this.animations.add(animation);
};

/**
 * Removes an animation from the object
 * @param {Animation} animation - the animation to remove
 */
AnimationManager.prototype.removeAnimation = function (animation) {
    this.animations.remove(animation);
};

/**
 * Applies the aniamtions to the element
 */
AnimationManager.prototype.applyAnimations = function () {
    for (var i = 0; i < this.animations.length(); i++) {
        var animation = this.animations.get(i);

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

        if (!animation.hasStarted) {
            break;
        }
    }
};