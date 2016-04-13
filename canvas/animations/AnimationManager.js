/**
 * Holds and handles animations for an element
 * 
 * @constructor
 * @member {SortedList} animations - holds all of the animations in acending order
 */
var AnimationManager = function () {
    this.animations = new SortedList();
    
};

/**
 * Adds an animation to the object
 * 
 * @param {Animation} animation - the animation to add
 */
AnimationManager.prototype.addAnimation = function (animation) {
    this.animations.add(animation);
};

/**
 * Removes an animation from the object
 * 
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
            }
            animation.draw();

            if (Engine.now >= animation.start + animation.duration) {
                animation.endAnimation();
                this.removeAnimation(animation);
            }
        }

        if (!animation.hasStarted) {
            break;
        }
    }
};

AnimationManager.prototype.isEmpty = function () {
    return this.animations.isEmpty();
};

AnimationManager.prototype.get = function (index) {
    return this.animations.get(index);
};