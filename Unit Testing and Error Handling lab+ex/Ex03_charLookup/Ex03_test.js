const { expect, assert } = require('chai');
const lookupChar = require("./Ex03_charLookup");

describe("lookup char", () => {
    it("valid string and ind", () => {
        assert.equal(lookupChar("abcdef", 3), "d");
    });

    it("valid string invalid ind_1", () => {
        assert.equal(lookupChar("abcdef", -3), "Incorrect index");
    });

    it("valid string invalid ind_2", () => {
        assert.equal(lookupChar("abcdef", 50), "Incorrect index");
    });

    it("valid string and  inv ind", () => {
        assert.equal(lookupChar(123, "3"), undefined);
    });

    it("valid string and  inv ind", () => {
        assert.equal(lookupChar(123, 3), undefined);
    });

    it("valid string and  inv ind", () => {
        assert.equal(lookupChar("123", "3"), undefined);
    });

    it("valid string valid index", () => {
        assert.equal(lookupChar("123", 2), "3");
    });

    it("valid string valid index", () => {
        assert.equal(lookupChar("123", 0), "1");
    });

    it("valid string valid index", () => {
        assert.equal(lookupChar("", 0), "Incorrect index");
    });

    it("valid string valid index", () => {
        assert.equal(lookupChar("", 0.5), undefined);
    });

    it("valid string valid index", () => {
        assert.equal(lookupChar("1", 0), "1");
    });
})


