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
});
