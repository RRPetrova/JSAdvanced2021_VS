const { expect, assert } = require("chai");
const isOddOrEven = require("./Ex02_evenOrOdd");

describe("is odd or even", () => {
    it("valid params", () => {
        assert.equal(isOddOrEven("1"), "odd");
    });

    it("valid params", () => {
        assert.equal(isOddOrEven("12"), "even");
    });

    it("valid params", () => {
        assert.equal(isOddOrEven(11), undefined);
    });
})