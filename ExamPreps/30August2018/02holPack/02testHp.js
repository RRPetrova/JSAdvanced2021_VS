const { assert, expect } = require("chai");
const HolidayPackage = require("./02holPack");

describe("hp tests", () => {
    let hp = undefined;
    beforeEach(() => {
        hp = new HolidayPackage("paris", "winter");
    })

    it("test1 show /add", () => {
        assert.equal(hp.showVacationers(), "No vacationers are added yet");

        assert.throws(() => {
            hp.addVacationer('a')
        }, "Name must consist of first name and last name");

        assert.throws(() => {
            hp.addVacationer(12)
        }, "Vacationer name must be a non-empty string");

        assert.throws(() => {
            hp.addVacationer(" ")
        }, "Vacationer name must be a non-empty string");

        assert.throws(() => {
            hp.addVacationer("a b c")
        }, "Name must consist of first name and last name");

        assert.throws(() => {
            hp.addVacationer("a b c d")
        }, "Name must consist of first name and last name");


        hp.addVacationer("ac dc");
        assert.equal(hp.showVacationers(), "Vacationers:\nac dc");
        hp.addVacationer("joe cocker");
        assert.equal(hp.showVacationers(), "Vacationers:\nac dc\njoe cocker");
    });

    it("test2 set insurance", () => {
        assert.equal(hp._insuranceIncluded, false);
        hp.insuranceIncluded = true;
        assert.equal(hp._insuranceIncluded, true);
        // hp.insuranceIncluded = 0;
        assert.throws(() => {
            hp.insuranceIncluded = 0
        }, "Insurance status must be a boolean");

        assert.throws(() => {
            hp.insuranceIncluded = "true"
        }, "Insurance status must be a boolean");

    });


    it("test3 generate", () => {
        assert.throws(() => {
            hp.generateHolidayPackage()
        }, "There must be at least 1 vacationer added");
      
        hp.addVacationer("ac dc");
        hp.addVacationer("a v");

        let testRes = "Holiday Package Generated\n" +
            "Destination: paris" + "\n" +
            "Vacationers:\nac dc\na v" + "\n" +
            "Price: 800";
        assert.equal(hp.generateHolidayPackage(), testRes);

    });

    it("test4 generate2", () => {
        hp = new HolidayPackage("paris", "Winter");
        hp.insuranceIncluded = true;
        hp.addVacationer("ac dc");
        hp.addVacationer("a v");

        let testRes = "Holiday Package Generated\n" +
            "Destination: paris" + "\n" +
            "Vacationers:\nac dc\na v" + "\n" +
            "Price: 1100";
        assert.equal(hp.generateHolidayPackage(), testRes);
    });

    it("test5 generate3", () => {
        hp = new HolidayPackage("paris", "Summer");
        hp.insuranceIncluded = true;
        hp.addVacationer("ac dc");
        hp.addVacationer("a v");

        let testRes = "Holiday Package Generated\n" +
            "Destination: paris" + "\n" +
            "Vacationers:\nac dc\na v" + "\n" +
            "Price: 1100";
        assert.equal(hp.generateHolidayPackage(), testRes);
    });

    it("test6 generate4", () => {
        hp = new HolidayPackage("paris", "adasd");
        hp.insuranceIncluded = true;
        hp.addVacationer("ac dc");
        hp.addVacationer("a v");

        let testRes = "Holiday Package Generated\n" +
            "Destination: paris" + "\n" +
            "Vacationers:\nac dc\na v" + "\n" +
            "Price: 900";
        assert.equal(hp.generateHolidayPackage(), testRes);
    });

    it("test6 generate4", () => {
        hp = new HolidayPackage("paris", "adasd");
        hp.addVacationer("ac dc");

        let testRes = "Holiday Package Generated\n" +
            "Destination: paris" + "\n" +
            "Vacationers:\nac dc" + "\n" +
            "Price: 400";
        assert.equal(hp.generateHolidayPackage(), testRes);
    });

});
