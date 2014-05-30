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

        describe ("#SizedTree", function() {
            it ("should be a tree, which calculates its sizese automatically", function (){
                var auto_sized_tree = new N(
                    0,
                    new N(-1),
                    new N(1)
                );
                expect(size(auto_sized_tree)).toEqual(3);
            });
        });

    });

    describe ("operating functions", function () {
        var simpleTree;

        beforeEach(function (){
            simpleTree = new T(
                0,
                3,
                new T(-1, 1),
                new T(1, 1)
            );
            misshapedTree = new T(
                0,
                3,
                new T(1, 1),
                new T(-1, 1)
            );
        });


        describe ("#size", function () {

            it ("should return zero for empty tree", function () {
                expect(size(new E())).toEqual(0);
            });

            it ("should return one for a tree without subtrees", function () {
                expect(size(new T("v",1))).toEqual(1);
            });

            // it ("should return the size of the tree, including its subtree sizes", function () {
            //     expect(size(simpleTree)).toEqual(3);
            // });
        });

        describe ("#member", function () {
            it ("should return false tree is empty", function () {
                expect(member(1, new E())).toEqual(false);
            });
            it ("should return true for containing values", function () {
                expect(member(1, simpleTree)).toEqual(true);
                expect(member(-1, simpleTree)).toEqual(true);
                expect(member(0, simpleTree)).toEqual(true);
            });
            it ("should return false for non containing values", function () {
                expect(member(42, simpleTree)).toEqual(false);
            });
            it ("should not find a member in a misshaped tree", function () {
                expect(member(-1, misshapedTree)).toEqual(false);
            });
        });

        describe("#min", function () {
            it ("should return the lowest value in the tree.", function () {
                expect(min(simpleTree)).toEqual(-1);
            });
            it ("should raise an error when used on an empty tree.", function (){
                expect(function () {
                    min(new E());
                }).toThrow(new ExtremeOnEmptyError().message);
            });
        });

        describe("#max", function () {
            it ("should return the highest value in the tree.", function () {
                expect(max(simpleTree)).toEqual(1);
            });
            it ("should raise an error when used on an empty tree.", function (){
                expect(function () {
                    max(new E());
                }).toThrow(new ExtremeOnEmptyError().message);
            });
        });

        describe("single_rotations", function (){
            describe("#single_rotation_l", function() {
                it ("should return a tree, where root and left tree get exchanged", function () {
                    aTree = new N(
                        "a",
                        new N("x"),
                        new N("b",
                            new N("y"),
                            new N("z")
                        )
                    );
                    resultTree = single_rotation_l(aTree);
                    expect(resultTree.value).toBe("b");
                    expect(resultTree.right.value).toBe("z");
                    resultLeft = resultTree.left;
                    expect(resultLeft.value).toBe("a");
                    expect(resultLeft.left.value).toBe("x");
                    expect(resultLeft.right.value).toBe("y");
                });
            });
        });
    });

});
