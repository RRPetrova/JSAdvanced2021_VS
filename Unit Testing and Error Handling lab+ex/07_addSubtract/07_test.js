const { expect, assert } = require('chai');
const createCalculator = require("./07_addSubtract");


describe("calc", () => {
  

    it("add num", () => {
        let calc = createCalculator();
        calc.add(1);
        assert.equal(calc.get(), 1);
    });

    it("add 0", () => {
        let calc = createCalculator();
        calc.add(0);
        assert.equal(calc.get(), 0);
    });

    it("add more nums", () => {
        let calc = createCalculator();
        calc.add(50.6);
        calc.add(10);
        assert.equal(calc.get(), 60.6);
    });

    it("operations with nums", () => {
        let calc = createCalculator();
        calc.add(50.6);
        calc.add(20.6);
        calc.subtract(10);
        assert.equal(calc.get(), 61.2);
    });

    it("subtr 0", () => {
        let calc = createCalculator();
        calc.subtract(0);
        assert.equal(calc.get(), 0);
    });

    it("subtr neg res", () => {
        let calc = createCalculator();
        calc.subtract(104.6);
        assert.equal(calc.get(), -104.6);
    });


    it("subtr string parsed", () => {
        let calc = createCalculator();
        calc.subtract("1");
        assert.equal(calc.get(), -1);
    });

    
    it("addd string parsed", () => {
        let calc = createCalculator();
        calc.add("1");
        assert.equal(calc.get(), 1);
    });

    
    it("oper string parsed", () => {
        let calc = createCalculator();
        calc.subtract("-10");
        calc.add("8"); //0 - (-10)
        assert.equal(calc.get(), 18);
    });

});

