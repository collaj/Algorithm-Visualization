var BarArray = function (list, coordinates, width, height, color, fill, visible) {
    Element.call(this, coordinates, color, undefined, visible);

    this.width = width;
    this.height = height;
    this.fill = (fill !== undefined) ? fill : true;

    this.bars = (function () {

        var bars = [];

        for (var i = 0; i < list.length; i++) {
            var rect = new Rectangle(new Coordinate2D(0,0));
            rect.coordinates.x = i * this.width / list.length;
            rect.coordinates.y = this.coordinates.y + ((1 - (list[i] / 100)) * this.height);
            rect.width = (this.width / list.length) - 2;
            rect.height = this.height * list[i] / 100;
            rect.color = this.color.clone();
            rect.fill = this.fill;
            rect.visible = this.visible;
            bars.push(rect);
        }

        return bars;
    }).call(this);


};

// inheritance
extend(Element, BarArray);


BarArray.prototype.draw = function (canvas) {
    var context = Element.prototype.draw.call(this, canvas);
    if (context !== undefined) {
        for (var i = 0; i < this.bars.length; i++) {
            var rect = this.bars[i];
            rect.draw(canvas);
        }
    }
};


BarArray.prototype.clone = function () {
    var list = [];
    for (var i = 0; i < this.bars.length; i++) {
        list.push(this.bars[i].height * 100 / this.height);
    }

    return new BarArray(list, this.coordinates.clone(), this.width, this.height, this.color.clone(), this.fill, this.visible);
};