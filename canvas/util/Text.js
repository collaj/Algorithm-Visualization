var Text = function (string, size, font, color) {
    this.string = string;
    this.size = (size !== undefined) ? size : 25;
    this.font = (font !== undefined) ? font : "Calibri";
    this.color = (color !== undefined) ? color : new Color();
};


Text.prototype.draw = function (ctx, coordinates) {
    this.color.draw(ctx);
    ctx.font = this.size + "px " + this.font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.string, coordinates.x, coordinates.y);
};