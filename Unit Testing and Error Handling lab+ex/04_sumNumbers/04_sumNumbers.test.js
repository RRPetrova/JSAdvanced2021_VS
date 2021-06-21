const {expect, assert } = require('chai');
const sum = require("./04_sumNumbers");

describe("Sum num", () => {

    it("many nums", () => {
        //assert.equal(sum[1], 1);
       assert.equal(sum([1, 2]), 3);
    });


    it("one num", () => {
        assert.equal(sum([1]), 1);
    });
    

    it("empty arr", () => {
        assert.equal(sum([]), 0);
    })



})