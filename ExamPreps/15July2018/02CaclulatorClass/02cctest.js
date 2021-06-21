const { expect, assert } = require('chai');
const Calculator = require("./02CalcClass");

describe("test calc", () => {
    let calc = undefined;
    beforeEach(() => {
        calc = new Calculator();
    })

    it("01test add", () => {
        calc.add(50);
        assert.equal(calc.expenses.length, 1)
    })

    it("02test divide0", () => {
        calc.add(1);
        calc.add(0);
        assert.equal(calc.divideNums(), "Cannot divide by zero");
    })

    it("03test divide ", () => {
        calc.add(100);
        calc.add(2); // 100, 2 , 5
        calc.add(5); //100    100/2 = 50  50/5 = 10
        assert.equal(calc.divideNums(), 10);
    })

    it("04test divide strings ", () => {
        calc.add("a")
        calc.add("b")
        calc.add("c")
        assert.throws(() => {
            calc.divideNums()
        }, 'There are no numbers in the array!')
    })

    it("05test divide mix ", () => {
        calc.add("a")
        calc.add(5)  //5
        calc.add("5")  //5
        calc.add(10) //5 / 10 = 0.5
        calc.add(1) //0.5 / 1 = 0.5
        assert.equal(calc.divideNums(), 0.5);
    })

    it("06test string", () => {
        assert.equal(calc.toString(), "empty array");
        calc.add("b");
        calc.add(1);
        calc.add("a");
        assert.deepEqual(calc.toString(), "b -> 1 -> a");
    })


    it("07test order empty", () => {
        assert.equal(calc.orderBy(), "empty");
    })

    it("08test order", () => {
       calc.add(50)
       calc.add(250)
       calc.add(0.20)
       calc.add(1000)
       assert.equal(calc.orderBy(), "0.2, 50, 250, 1000");
    })

    it("08test order", () => {
        calc.add("a")
        calc.add("t")
        calc.add("f")
        calc.add("asda")
        assert.equal(calc.orderBy(), "a, asda, f, t");
     })

     it("08test order mix", () => {
        calc.add("a")
        calc.add(1)
        calc.add("s")
        calc.add("asda")
        assert.equal(calc.orderBy(), "1, a, asda, s");
     })

})
