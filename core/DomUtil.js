/**
 * Class that controls access to the Document Object Model (DOM)
 * @constructor
 * @member {HTML5 Canvas object} canvas - HTML5 Canvas object.
 */
var DomUtil = function () {
 
};

/**
 * 
 */
DomUtil.swapIn = function (targetParent, targetElement) {
    //deactivate whats currently in the targetParent
    $(targetParent).children().appendTo($("#inactive"));
    $(targetElement).appendTo($(targetParent));
};

DomUtil.clearDom = function () {
    
    $("header").children().appendTo($("#inactive"));
    $("section").children().appendTo($("#inactive"));
    $("footer").children().appendTo($("#inactive"));

    console.log("clear dom");
};


/**
 * Loads the algorithms panels and the canvas onto the HTML
 */
DomUtil.loadAlgorithm = function (algorithm) {
    //clear the dom
    DomUtil.clearDom();

    //$("header").attr("height", "200px");

    //load the top panel
    DomUtil.swapIn("header", "#" + algorithm.name + "_top");

    //load the bottom panel
    DomUtil.swapIn("footer", "#" + algorithm.name + "_bottom");

    //load the canvas 
    var canvas = document.getElementById("canvas");

    //get the remaining space on the DOM for our canvas
    var topPanelHeight = $("header div").height();
    var bottomPanelHeight = $("footer div").height();

    var bodyHeight = $(document).height();

    canvas.height = bodyHeight - (topPanelHeight + bottomPanelHeight);
    canvas.width = $(document).width();

    $(canvas).css("top", topPanelHeight);
    $(canvas).css("bottom", bottomPanelHeight);
    $(canvas).css("background-color", "#333");

    DomUtil.swapIn("section", "#canvas");


    //start the engine
    Engine.start(canvas, 0);

    //load the algorithm into the engine
    Engine.loadAlgorithm(algorithm);

};