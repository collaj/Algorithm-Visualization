/**
 * The control for the main screen (algorithm selection)
 * This class contains the algorithm selection event handlers.
 */

$("#test").click(function () {
    

    var testAlgorithm = new TestAlgorithm();

    DomUtil.loadAlgorithm(testAlgorithm);

    

});


$("#test1").click(function () {


    var testAlgorithm = new TestAlgorithm1();

    DomUtil.loadAlgorithm(testAlgorithm);

    

});

$("#test2").click(function () {


    var testAlgorithm = new TestAlgorithm2();

    DomUtil.loadAlgorithm(testAlgorithm);

   

});


$("#bubbleSort").click(function () {
    var bubble = new BubbleSort();
    DomUtil.loadAlgorithm(bubble);
});


$("#mouse").click(function () {
    var mouse = new MouseTest();
    DomUtil.loadAlgorithm(mouse);
});


/**
*   Common algorithm panel controls
*/
$(".home").click(function () {
    console.log("home");

    // reset Mouse
    Mouse.reset();

    Engine.stop();
    DomUtil.clearDom();
    DomUtil.swapIn("section", "#algorithm_selector");
});


$(".speed").on("change", function () {
    //Engine.animationSpeedModifier = this.value / 50;
    var modifiers = [0.3, 0.5, 0.75, 1, 1.5, 2, 3, 5, 10, 15];
    var speed = modifiers[this.value];
    Engine.animationSpeedModifier = speed;
    $("#sliderValue").html(speed);
});



/**
 * On document ready
 */
$(document).ready(function () {
    // set defaults for speed sliders
    $(".speed").attr("min", 0);
    $(".speed").attr("max", 9);
    $(".speed").attr("step", 1);
    $(".speed").attr("value", 3);
    $("#sliderValue").html("1");
});