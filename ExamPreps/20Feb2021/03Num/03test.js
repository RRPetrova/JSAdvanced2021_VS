const { expect, assert } = require('chai');
const numberOperations = require("./numberOperations");


describe("test numbers", () => {
    // beforeEach(() => {
    //     let numOp = {};
    // })

    it("test 01 pow ", () => {
        assert.equal(numberOperations.powNumber(2), 4);
    });

    it("test 02 Nan ", () => {
        assert.throws(() => {
            numberOperations.numberChecker("asd")
        }, "The input is not a number!");
    })

    it("test 03 <100 ", () => {
        assert.equal(numberOperations.numberChecker("2"),
            "The number is lower than 100!")
    })

    it("test 04 > 100 ", () => {
        assert.equal(numberOperations.numberChecker("2000"),
            "The number is greater or equal to 100!")
    })

    it("test 05 = 100 ", () => {
        assert.equal(numberOperations.numberChecker("100"),
            "The number is greater or equal to 100!")
    })

    it("test 06 > 100 num", () => {
        assert.equal(numberOperations.numberChecker(200.2),
            "The number is greater or equal to 100!")
    })

    it("test 07 sumArr equal", () => {
        assert.deepEqual(numberOperations.sumArrays([1, 2], [3, 4]), [4, 6])
    })

    it("test 07 sumArr", () => {
        assert.deepEqual(numberOperations.sumArrays([1], [3, 4]), [4, 4])
    })

    it("test 07 sumArr", () => {
        assert.deepEqual(numberOperations.sumArrays([1.2], [3, 4]), [4.2, 4])
    })

});