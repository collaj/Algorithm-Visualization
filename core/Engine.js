/**
 * Main class that drives the animation
 * It is responsible for clearing the screen, and then telling
 * the current animation to draw a frame.
 * @constructor
 * @member {HTML5 Canvas object} canvas - HTML5 Canvas object.
 * @member {Algorithm} algorithm - Current algorithm to draw.
 * @member {int} intervalID - Unique ID of the current setInterval thread.
 * @member {int} drawDelay - The number of milliseconds to wait between drawing frames.
 * @member {int} tick - the current tick or loop of the engine
 * @member {int} startTimeStamp - Unix Timestamp of when engine starts
 * @member {int} last - milliseconds from engine start to last loop
 * @member {int} now - milliseconds from engine start to current loop
 */
var Engine = {
    canvas: document.getElementById("canvas"),
    algorithm: null,
    intervalID: null,
    drawDelay: null,
    tick: 0,
    startTimeStamp: null,
    last: 0,
    now: 0,
    time: null,
    lastTime: null,
    animationSpeedModifier: 1
};

/**
 * Function to be called each "tick" of the engine.
 * Takes care of time, clearing the canvas, and telling
 * the loaded algorithm to draw
 */
Engine.drawFrame = function () {
    Engine.intervalID = requestAnimationFrame(Engine.drawFrame);

    // keeping track of time
    Engine.tick++;

    Engine.lastTime = Engine.time;
    Engine.time = Date.now();

    Engine.last = Engine.now;
    //Engine.now = Date.now() - Engine.startTimeStamp;
    Engine.now += (Engine.time - Engine.lastTime) * Engine.animationSpeedModifier;
    //console.log("The current time is " + Engine.now);

    // clear the canvas
    var ctx = Engine.canvas.getContext("2d");
    ctx.clearRect(0, 0, Engine.canvas.width, Engine.canvas.height);


    // draw the algorithm
    if (Engine.algorithm !== null) {
        Engine.algorithm.draw(Engine.canvas);
    }
};

/**
 * Starts the engine.
 * @param {HTML5 Canvas object} canvas - HTML5 Canvas object.
 * @param {int} delay - The number of milliseconds to wait between drawing frames.
 */
Engine.start = function (delay) {
    Engine.drawDelay = delay;
    Engine.tick = 0;
    Engine.last = 0;
    Engine.now = 0;
    Engine.startTimeStamp = Date.now();
    Engine.time = Engine.startTimeStamp;

    Engine.intervalID = requestAnimationFrame(Engine.drawFrame);
};

/**
 * Stops the engine
 */
Engine.stop = function () {
    cancelAnimationFrame(Engine.intervalID);
    Engine.intervalID = null;
};

/**
 * Pauses the animation.
 */
Engine.pause = function () {

};

/**
 * Sets the animation draw delay
 * @param {int} delay - The number of milliseconds to wait between drawing frames.
 */
Engine.setDrawDelay = function (delay) {
    Engine.drawDelay = delay;
};

/**
 * Loads a new Algorithm to the DOM.
 * @param {Algorithm} newAlgorithm - The new Algorithm object that will be loaded onto the DOM.
 */
Engine.loadAlgorithm = function (newAlgorithm) {
    Engine.algorithm = newAlgorithm;
    Engine.algorithm.load();
};


Engine.isRunning = function () {
    return Engine.intervalID !== null;
};

/**
 * Function to handle inheritance
 */
function extend(parent, child) {
    var parentPrototype = child.prototype;
    child.prototype = Object.create(parent.prototype);
    for (var key in parentPrototype) {
        child.prototype[key] = parentPrototype[key];
    }
    
    child.prototype.constructor = child;
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                                   || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////