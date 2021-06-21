const { expect, assert } = require("chai");
const isSymmetric = require("./05_checkSymmetry");

describe("check Symmetry", () => {
    it("is symmetric strings", () => {
        assert.equal(isSymmetric(["a", "a"]), true);
    });

    it("is symetric nums", () => {
        assert.equal(isSymmetric([1, 1]), true);
    });

    it("is not symetric nums", () => {
        assert.equal(isSymmetric([1, 2]), false);
    });


    it("is not symetric nums", () => {
        assert.equal(isSymmetric(["b", "a"]), false);
    });

    it("is symetric bigger array of strings ", () => {
        assert.equal(isSymmetric(["b", "a", "b"]), true);
    });

    it("is not symetric bigger array of strings ", () => {
        assert.equal(isSymmetric(["b", "a", "b", "c"]), false);
    });

    it("is not symetric bigger array of strings ", () => {
        assert.equal(isSymmetric([1, 2 , 3, 4]), false);
    });

    it("is not symetric bigger array of nums", () => {
        assert.equal(isSymmetric([1, 2 ,3 ]), false);
    });

    it("is symetric empty array", () => {
        assert.equal(isSymmetric([]), true);
    });

    it("is not symetric num, string", () => {
        assert.equal(isSymmetric([1, "1"]), false);
    });

    it("is not symetric num, string", () => {
        assert.equal(isSymmetric([1, "1", "1", 1]), true);
    });


    it("is not symetric num, string", () => {
        assert.equal(isSymmetric(1,1), false);
    });
}) 