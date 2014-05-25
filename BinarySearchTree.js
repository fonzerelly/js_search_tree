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

