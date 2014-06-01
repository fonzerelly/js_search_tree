function size (aTree) {
    if (!aTree) {
        return 0;
    }
    return aTree.size;
}

function T(value, size, left, right) {
    this.value = value;
    this.left = left || new E();
    this.right = right || new E();
    this.size = size;
}

function N (value, left, right) {
    T.call(this, value, undefined, left, right);
    this.size = 1 + size(left) + size(right);
}

N.prototype = new T();

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
        return member (value, aTree.left);
    } else if (!lt(value, aTree.value) && !lt(aTree.value, value)) {
        return true;
    }

    return member(value, aTree.right);
}

function ExtremeOnEmptyError () {
    this.message = "Applied min or max on an empty tree.";
}
ExtremeOnEmptyError.prototype = new Error();

function extreme (direction, aTree){
    if (aTree instanceof E) {
        throw new ExtremeOnEmptyError();
    }

    if (!(aTree[direction] instanceof E)) {
        return min(aTree[direction]);
    }
    return aTree.value;
}

function min (aTree) {
    return extreme("left", aTree);
}

function max (aTree) {
    return extreme("right", aTree);
}

function single_rotation_l(aTree){
    return new N(
            aTree.right.value,
            new N(
                aTree.value,
                aTree.left,
                aTree.right.left),
            aTree.right.right
        );
}

function single_rotation_r(aTree){
    return new N(
            aTree.left.value,
            aTree.left.left,
            new N(
                aTree.value,
                aTree.left.right,
                aTree.right
            )
        );
}

