var MoveAnimation = function (start, duration, element, destination) {
    this.start = start;
    this.duration = duration;

    this.element = element;
    this.destination = destination;

    this.hasStarted = false;

    this.x = this.element.coordinates.x;
    this.y = this.element.coordinates.y;
    

    this.deltaX = destination.x - this.x;
    this.deltaY = destination.y - this.y;
    
};


MoveAnimation.prototype.draw = function () {

    console.log(this.x);
    console.log(this.y);

    var progress = (Engine.now - this.start) / this.duration;
    if (progress > 1) {
        progress = 1;
    }

    this.element.coordinates.x = this.x + Math.floor(this.deltaX * progress);
    this.element.coordinates.y = this.y + Math.floor(this.deltaY * progress);

};

MoveAnimation.prototype.startAnimation = function () {
    this.x = this.element.coordinates.x;
    this.y = this.element.coordinates.y;


    this.deltaX = this.destination.x - this.x;
    this.deltaY = this.destination.y - this.y;
}