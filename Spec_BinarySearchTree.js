/*global describe, it, expect, beforeEach,  _, load, java, nextGeneration*/

describe ("BinarySearchTree", function () {

    describe ("#Constructors", function () {

        describe ("#Tree", function () {
            it ("should be a tree", function () {
                var result = new T();
                expect(result instanceof T).toBe(true);
            });
        });

        describe ("#EmtpyTree", function () {
            it ("should be an empty tree", function () {
                var result = new E();
                expect(result instanceof E).toBe(true);
                expect(result instanceof T).toBe(true);

            });
        });

    });

    describe ("#size", function () {

        it ("should return zero for empty tree", function () {
            expect(size(new E())).toBe(0);
        });

        it ("should return one for a tree without subtrees", function () {
            expect(size(new T())).toBe(1);
        });

        it ("should return the size of the tree, including its subtree sizes", function () {
            tree = new T(
                0,
                new T(-1),
                new T(1)
            );
            expect(size(tree)).toBe(3);
        });
    });
});
