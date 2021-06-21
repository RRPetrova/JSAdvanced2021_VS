const { expect, assert } = require('chai');
const pizzUni = require("./03pizza");


describe("pizza tests", function () {
    beforeEach(() => {
        let pizzaaObj = {
            orderedPizza: "fungi",
            orderedDrink: "water"
        }
    })
    it("01test  order", function () {
        assert.throws(() => {
            pizzUni.makeAnOrder({})
        }, "You must order at least 1 Pizza to finish the order.");

        pizzaaObj = {
            orderedPizza: "fungi",
            orderedDrink: "water"
        }
        assert.equal(pizzUni.makeAnOrder(pizzaaObj), `You just ordered fungi and water.`)
        pizzaaObj.orderedDrink = "";
        assert.equal(pizzUni.makeAnOrder(pizzaaObj), `You just ordered fungi`)
    });

    it("02test  getRamain", function () {
        let st1 = [{ pizzaName: "fungi", status: "ready" },
        { pizzaName: "fungi", status: "ready" }];

        assert.equal(pizzUni.getRemainingWork(st1), `All orders are complete!`)
        st1.push({ pizzaName: "diavolo", status: "preparing" });
        assert.equal(pizzUni.getRemainingWork(st1), `The following pizzas are still preparing: diavolo.`)

        st1.push({ pizzaName: "veggie", status: "preparing" });
        assert.equal(pizzUni.getRemainingWork(st1), `The following pizzas are still preparing: diavolo, veggie.`)
    });

    it("03test  order", function () {
        assert.equal(pizzUni.orderType(20, "Delivery"), 20)
        assert.equal(pizzUni.orderType(20, "Carry Out"), 18)

    });


});

