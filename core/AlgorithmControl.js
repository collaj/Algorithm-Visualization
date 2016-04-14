/**
 * The control for the main screen (algorithm selection)
 * This class contains the algorithm selection event handlers.
 */

var AlgorithmControl = function () {
   
};







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


/**
*   Common algorithm panel controls
*/
$(".home").click(function () {
    console.log("home");
    Engine.stop();
    DomUtil.clearDom();
    DomUtil.swapIn("section", "#algorithm_selector");
});


$("#bubbleSort").click(function () {
    var bubble = new BubbleSort();
    DomUtil.loadAlgorithm(bubble);
});

$("#bubbleSort_random").click(function () {
    var numOfElements = 30;
    var list = [];

    for (var i = 0; i < numOfElements; i++) {
        list.push(Math.floor(Math.random() * 80) + 20);
    }

    Engine.algorithm.objects = [];
    Engine.algorithm.animations = new AnimationManager();

    var bar = new BarArray(list, new Coordinate2D(0, 0), Engine.canvas.width, Engine.canvas.height);
    Engine.algorithm.addObjects(bar);

    Engine.drawFrame(Engine.canvas);
});

$("#bubbleSort_start").click(function () {
    var barArray = Engine.algorithm.objects[0];

    var timeDelta = 250;
    var timePadding = 10;
    var time = 0;

    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < barArray.bars.length - 1; i++) {
            if (barArray.bars[i].height > barArray.bars[i + 1].height) {

                Engine.algorithm.animations.addAnimation(new BarSwapAnimation(time, timeDelta * 5, barArray, barArray.bars[i], barArray.bars[i + 1]));

                var temp = barArray.bars[i];
                barArray.bars[i] = barArray.bars[i + 1];
                barArray.bars[i + 1] = temp;

                swapped = true;
                time += (timeDelta * 5) + timePadding;
            }
            else {
                Engine.algorithm.animations.addAnimation(new ColorAnimation(time, 0, barArray.bars[i], new Color(250, 0, 0)));
                Engine.algorithm.animations.addAnimation(new ColorAnimation(time, 0, barArray.bars[i + 1], new Color(0, 0, 250)));

                Engine.algorithm.animations.addAnimation(new ColorAnimation(time + timeDelta, 0, barArray.bars[i], barArray.color.clone()));
                Engine.algorithm.animations.addAnimation(new ColorAnimation(time + timeDelta, 0, barArray.bars[i + 1], barArray.color.clone()));

                time += timeDelta + timePadding;
            }
        }
    } while (swapped);


    Engine.start(2);
});

$("#bubbleSort_stop").click(function () {
    Engine.stop();
});


$(".speed").on("change", function () {
    //Engine.animationSpeedModifier = this.value / 50;
});