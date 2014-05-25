function size (aTree) {
    return aTree.size;
}

function T(value, leftTree, rightTree) {
    this.value = value;
    this.leftTree = leftTree || new E();
    this.rightTree = rightTree || new E();
    this.size = 1 + size(this.leftTree) + size(this.rightTree);
}

function E () {
    this.size = 0;
}

E.prototype = new T();

function member (value, aTree, lessThen){
    var lt = lessThen || function (first, second) {
        return first < second;
    };
    if (aTree instanceof E) {
        return false;
    }

    if (lt(value, aTree.value)) {
        return member (value, aTree.leftTree);
    } else if (!lt(value, aTree.value) && !lt(aTree.value, value)) {
        return true;
    }

    return member(value, aTree.rightTree);
}

