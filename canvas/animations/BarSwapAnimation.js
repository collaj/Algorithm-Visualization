var BarSwapAnimation = function (start, duration, element, rect1, rect2) {
    Animation.call(this, start, duration, element);

    this.rect1 = rect1;
    this.rect2 = rect2;
};


extend(Animation, BarSwapAnimation);



BarSwapAnimation.prototype.draw = function () {

};


BarSwapAnimation.prototype.startAnimation = function () {
    Animation.prototype.startAnimation.call(this);

    Engine.algorithm.animations.addAnimation(new ColorAnimation(this.start, 0, this.rect1, new Color(250, 0, 0)));
    Engine.algorithm.animations.addAnimation(new ColorAnimation(this.start, 0, this.rect2, new Color(0, 0, 250)));

    var coor1 = new Coordinate2D(this.rect2.coordinates.x, this.rect1.coordinates.y);
    var coor2 = new Coordinate2D(this.rect1.coordinates.x, this.rect2.coordinates.y);
    Engine.algorithm.animations.addAnimation(new MoveAnimation(this.start + (this.duration * 2 / 5), this.duration / 5, this.rect1, coor1));
    Engine.algorithm.animations.addAnimation(new MoveAnimation(this.start + (this.duration * 2 / 5), this.duration / 5, this.rect2, coor2));

    Engine.algorithm.animations.addAnimation(new ColorAnimation(this.start + this.duration, 0, this.rect1, this.element.color.clone()));
    Engine.algorithm.animations.addAnimation(new ColorAnimation(this.start + this.duration, 0, this.rect2, this.element.color.clone()));
};


BarSwapAnimation.prototype.endAnimation = function () {

};