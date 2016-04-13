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