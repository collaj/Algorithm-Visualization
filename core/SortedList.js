var SortedList = function (...elements) {
    this.elements = elements;

};


SortedList.prototype.add = function (...elements) {
    for (var i = 0; i < elements.length; ++i) {
        var added = false;

        for (var j = 0; j < this.elements.length; ++j) {
            if (elements[i].compareTo(this.elements[j]) < 0) {
                this.elements.splice(j, 0, elements[i]);
                added = true;
                break;
            }
        }

        if (!added) {
            this.elements.push(elements[i]);
        }
    }
};

SortedList.prototype.remove = function (element) {
    var i = this.elements.indexOf(element);
    this.elements.splice(i, 1);
};


SortedList.prototype.get = function (index) {
    return this.elements[index];
};

SortedList.prototype.length = function () {
    return this.elements.length;
};