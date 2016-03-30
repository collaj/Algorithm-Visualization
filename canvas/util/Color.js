/**
 * Encapsulates the different elements of colors into one object
 * @constructor
 * @member {int} red - red color value
 * @member {int} green - green color value
 * @member {int} blue - blue color value
 * @member {float} opacity - opacity value for the color
 */
var Color = function (red, green, blue, opacity) {
    this.red = (red !== undefined) ? red : 0;
    this.green = (green !== undefined) ? green : 0;
    this.blue = (blue !== undefined) ? blue : 0;
    this.opacity = (opacity !== undefined) ? opacity : 1;
};

/**
 * Applies the color of an object to the canvas
 * @param {HTML5 Canvas object} canvas
 */
Color.prototype.draw = function (ctx) {
    ctx.strokeStyle = "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.opacity + ")";
    ctx.fillStyle = "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.opacity + ")";
};

/**
 * Sets the color values for a new color
 * @param {int} red - the integer value for the red color value
 * @param {int} green - the integer value for the green color value
 * @param {int} blue - the integer value for the blue color value
 * @param {float} opacity - new opacity for the color
 */
Color.prototype.setColor = function (red, green, blue, opacity) {
    this.red = (red !== undefined) ? red : this.red;
    this.green = (green !== undefined) ? green : this.green;
    this.blue = (blue !== undefined) ? blue : this.blue;
    this.opacity = (opacity !== undefined) ? opacity : this.opacity;
};

/**
 * Used to change color to a pre-determined color
 * All pre-defined colors are found here:
 * http://www.w3schools.com/colors/colors_names.asp
 * @param {String} colorName - the name of the color that the element
 * will become
 */
Color.prototype.changeColor = function (colorName) {
    if (COLOR.hasOwnProperty(colorName)) {
        var hex = COLOR[colorName];
        this.red = parseInt(hex.substring(1, 3), 16);
        this.green = parseInt(hex.substring(3, 5), 16);
        this.blue = parseInt(hex.substring(5, 7), 16);
        this.opacity = 1;
    }
    else {
        throw new Error(colorName + " is not a valid color.");
    }
};

/**
 * Changes the color to a random pre-defined color
 */
Color.prototype.becomeRandomColor = function () {
    var attributes = Object.keys(COLOR);
    var colorName;
    do {
        var random = Math.floor(Math.random() * attributes.length) + 1;
        colorName = attributes[random];
    } while(!COLOR.hasOwnProperty(colorName)); // sometimes colorName is not a color, this fixes it
    this.changeColor(colorName);
};

/**
 * Deep copy function
 * @return {Color} - Deep copy of this color
 */
Color.prototype.clone = function () {
    return new Color(this.red, this.green, this.blue, this.opacity);
};

/**
 * Returns a truly random color
 * @return {Color} - a random color
 */
Color.random = function () {
    var red = Math.floor(Math.random() * 255) + 1;
    var green = Math.floor(Math.random() * 255) + 1;
    var blue = Math.floor(Math.random() * 255) + 1;
    return new Color(red, green, blue);
};

/**
 * Object used to hold all of the pre-defined colors found here:
 * http://www.w3schools.com/colors/colors_names.asp
 * 
 * Note: Do NOT modify this object, unless W3 Schools changes this list of pre-defined colors
 */
var COLOR = {
    aliceblue: "#F0F8FF",
    antiquewhite: "#FAEBD7",
    aqua: "#00FFFF",
    aquamarine: "#7FFFD4",
    azure: "#F0FFFF",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    black: "#000000",
    blanchedalmond: "#FFEBCD",
    blue: "#0000FF",
    blueviolet: "#8A2BE2",
    brown: "#A52A2A",
    burlywood: "#DEB887",
    cadetblue: "#5F9EA0",
    chartreuse: "#7FFF00",
    chocolate: "#D2691E",
    coral: "#FF7F50",
    cornflowerblue: "#6495ED",
    cornsilk: "#FFF8DC",
    crimson: "#DC143C",
    cyan: "#00FFFF",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    darkgoldenrod: "#B8860B",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    darkgreen: "#006400",
    darkkhaki: "#BDB76B",
    darkmagenta: "#8B008B",
    darkolivegreen: "#556B2F",
    darkorange: "#FF8C00",
    darkorchid: "#9932CC",
    darkred: "#8B0000",
    darksalmon: "#E9967A",
    darkseagreen: "#8FBC8F",
    darkslateblue: "#483D8B",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    darkturquoise: "#00CED1",
    darkviolet: "#9400D3",
    deeppink: "#FF1493",
    deepskyblue: "#00BFFF",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1E90FF",
    firebrick: "#B22222",
    floralwhite: "#FFFAF0",
    forestgreen: "#228B22",
    fuchsia: "#FF00FF",
    gainsboro: "#DCDCDC",
    ghostwhite: "#F8F8FF",
    gold: "#FFD700",
    goldenrod: "#DAA520",
    gray: "#808080",
    grey: "#808080",
    green: "#008000",
    greenyellow: "#ADFF2F",
    honeydew: "#F0FFF0",
    hotpink: "#FF69B4",
    indianred: "#CD5C5C",
    indigo: "#4B0082",
    ivory: "#FFFFF0",
    khaki: "#F0E68C",
    lavender: "#E6E6FA",
    lavenderblush: "#FFF0F5",
    lawngreen: "#7CFC00",
    lemonchiffon: "#FFFACD",
    lightblue: "#ADD8E6",
    lightcoral: "#F08080",
    lightcyan: "#E0FFFF",
    lightgoldenrodyellow: "#FAFAD2",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    lightgreen: "#90EE90",
    lightpink: "#FFB6C1",
    lightsalmon: "#FFA07A",
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#B0C4DE",
    lightyellow: "#FFFFE0",
    lime: "#00FF00",
    limegreen: "#32CD32",
    linen: "#FAF0E6",
    magenta: "#FF00FF",
    maroon: "#800000",
    mediumaquamarine: "#66CDAA",
    mediumblue: "#0000CD",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    mediumseagreen: "#3CB371",
    mediumslateblue: "#7B68EE",
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: "#C71585",
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: "#FFE4B5",
    navajowhite: "#FFDEAD",
    navy: "#000080",
    oldlace: "#FDF5E6",
    olive: "#808000",
    olivedrab: "#6B8E23",
    orange: "#FFA500",
    orangered: "#FF4500",
    orchid: "#DA70D6",
    palegoldenrod: "#EEE8AA",
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: "#FFEFD5",
    peachpuff: "#FFDAB9",
    peru: "#CD853F",
    pink: "#FFC0CB",
    plum: "#DDA0DD",
    powderblue: "#B0E0E6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#FF0000",
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    salmon: "#FA8072",
    sandybrown: "#F4A460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    sienna: "#A0522D",
    silver: "#C0C0C0",
    skyblue: "#87CEEB",
    slateblue: "#6A5ACD",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#FFFAFA",
    springgreen: "#00FF7F",
    steelblue: "#4682B4",
    tan: "#D2B48C",
    teal: "#008080",
    thistle: "#D8BFD8",
    tomato: "#FF6347",
    turquoise: "#40E0D0",
    violet: "#EE82EE",
    wheat: "#F5DEB3",
    white: "#FFFFFF",
    whitesmoke: "#F5F5F5",
    yellow: "#FFFF00",
    yellowgreen: "#9ACD32"
};