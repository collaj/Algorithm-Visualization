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
var Engine = function () {
    Engine.canvas = null;
    Engine.algorithm = null;
    Engine.intervalID = null;
    Engine.drawDelay = null;
    Engine.tick = 0;
    Engine.startTimeStamp = null;
    Engine.last = 0;
    Engine.now = 0;
};

/**
 * Function to be called each "tick" of the engine.
 * Takes care of time, clearing the canvas, and telling
 * the loaded algorithm to draw
 */
Engine.drawFrame = function () {
    // keeping track of time
    Engine.tick++;
    Engine.last = Engine.now;
    Engine.now = Date.now() - Engine.startTimeStamp;
    console.log("The current time is " + Engine.now);

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
Engine.start = function (canvas, delay) {
    Engine.canvas = canvas;
    Engine.drawDelay = delay;
    Engine.startTimeStamp = Date.now();
    Engine.intervalID = setInterval(Engine.drawFrame, Engine.drawDelay);
};

/**
 * Stops the engine
 */
Engine.stop = function () {
    clearInterval(Engine.intervalID);
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