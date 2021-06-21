const { expect, assert } = require('chai');
const dealership = require("./dealership");


describe("test dealership", () => {
    
    it("01 test newCar", () => {
        assert.equal(dealership.newCarCost("Audi A4 B8", 20000), 5000)
        assert.equal(dealership.newCarCost("Audi A5 B8", 20000), 20000)
    })

    it("02 test Equipment", () => {
        let extras = ["a", "b", "c", "d"];
        let choosen = [0, 2, 3];
        assert.deepEqual(dealership.carEquipment(extras, choosen), ["a", "c", "d"]);
    })

    it("03 test Equipment", () => {
        let extras = ["a", "b", "c", "d"];
        let choosen = [];
        assert.deepEqual(dealership.carEquipment(extras, choosen), []);
    })

    it("04 test category", () => {
        assert.equal(dealership.euroCategory(2), "Your euro category is low, so there is no discount from the final price!");
        assert.equal(dealership.euroCategory(5), "We have added 5% discount to the final price: 14250.")
    })

    it("05 test category", () => {
        
        assert.equal(dealership.euroCategory(4), "We have added 5% discount to the final price: 14250.")
    })
})
