/*global describe, it, expect, beforeEach,  _, load, java, nextGeneration*/

describe ("BinarySearchTree", function () {

    describe ("#Constructors", function () {

        describe ("#Tree", function () {
            it ("should be a tree", function () {
                var result = new T();
                expect(result instanceof T).toEqual(true);
            });
        });

        describe ("#EmtpyTree", function () {
            it ("should be an empty tree", function () {
                var result = new E();
                expect(result instanceof E).toEqual(true);
                expect(result instanceof T).toEqual(true);

            });
        });

    });

    describe ("operating functions", function () {
        var simpleTree;

        beforeEach(function (){
            simpleTree = new T(
                0,
                new T(-1),
                new T(1)
                );
        });


        describe ("#size", function () {

            it ("should return zero for empty tree", function () {
                expect(size(new E())).toEqual(0);
            });

            it ("should return one for a tree without subtrees", function () {
                expect(size(new T())).toEqual(1);
            });

            it ("should return the size of the tree, including its subtree sizes", function () {
                expect(size(simpleTree)).toEqual(3);
            });
        });

        describe ("#member", function () {
            it ("should return false tree is empty", function () {
                expect(member(1, new E())).toEqual(false);
            });
            it ("should return true for containing values", function (){
                expect(member(1, simpleTree)).toEqual(true);
                expect(member(-1, simpleTree)).toEqual(true);
                expect(member(0, simpleTree)).toEqual(true);
            });
            it ("should return false for non containing values", function (){
                expect(member(42, simpleTree)).toEqual(false);
            });
        });
    });

});
