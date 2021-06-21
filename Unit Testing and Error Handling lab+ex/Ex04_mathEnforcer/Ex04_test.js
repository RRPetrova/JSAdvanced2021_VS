const { expect, assert } = require('chai');
const mathEnforcer = require("./Ex04_mathEnforcer");


describe("math enforcer", () => {
    it("valid add", () => {
        assert.equal(mathEnforcer.addFive(2.2), 7.2);
    });

    it("invalid add", () => {
        assert.equal(mathEnforcer.addFive("2"), undefined);
    });


    it("invalid add negative", () => {
        assert.equal(mathEnforcer.addFive(-5), 0);
    });

    it("invalid subtr negative", () => {
        assert.equal(mathEnforcer.subtractTen(-5.5), -15.5);
    });

    it("valid subtr", () => {
        assert.equal(mathEnforcer.subtractTen(2), -8);
    });

    it("valid subtr", () => {
        assert.equal(mathEnforcer.subtractTen(-2), -12);
    });

    it("invalid subtr", () => {
        assert.equal(mathEnforcer.subtractTen("2"), undefined);
    });

    it("valid sum params", () => {
        assert.equal(mathEnforcer.sum(1,2), 3);
    });

    it("invalid sum first param", () => {
        assert.equal(mathEnforcer.sum("1",2), undefined);
    });

    it("invalid sum sec param", () => {
        assert.equal(mathEnforcer.sum(10,"2"), undefined);
    });

    it("invalid sum both param", () => {
        assert.equal(mathEnforcer.sum("10","2"), undefined);
    });

    it("valid sum both param float", () => {
        assert.equal(mathEnforcer.sum(1.2, 2.3), 3.5);
    });

    it("valid sum param float_1", () => {
        assert.equal(mathEnforcer.sum(1, 2.3), 3.3);
    });

    it("valid sum param float_2", () => {
        assert.equal(mathEnforcer.sum(1.3, 2), 3.3);
    });

})
