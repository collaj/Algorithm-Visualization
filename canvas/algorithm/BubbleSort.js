var BubbleSort = function () {
    Algorithm.call(this);

    this.name = "bubbleSort";
};

extend(Algorithm, BubbleSort);

BubbleSort.prototype.load = function () {

};

//function bubbleSort(list) {
//    var swapped;
//    do {
//        swapped = false;
//        for (var i = 0; i < list.length - 1; i++) {
//            if (a[i] > a[i + 1]) {
//                var temp = list[i];
//                list[i] = list[i + 1];
//                list[i + 1] = temp;
//                swapped = true;
//            }
//        }
//    } while (swapped);
//}
