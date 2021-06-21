const { expect, assert } = require('chai');
const SubscriptionCard = require("./02Scard");

describe("subscription test", () => {
    let sc = undefined;
    beforeEach(() => {
        sc = new SubscriptionCard("pesho", "peshev", 123456789);
    })

    it("01test add", () => {
        sc.addSubscription("120", new Date('2018-04-22'), new Date('2018-05-21'));
        assert.equal(sc._subscriptions.length, 1);
        sc.addSubscription("55", new Date('2018-05-22'), new Date('2018-06-21'));
        assert.equal(sc._subscriptions.length, 2);
    });

    it("02test valid", () => {
        sc.addSubscription("120", new Date('2018-04-22'), new Date('2018-05-21'));
        assert.equal(sc.isValid("120", new Date('2018-04-22')), 1);
    });

    it("03test unvalid", () => {
        sc.addSubscription("120", new Date('2018-04-22'), new Date('2018-05-21'));
        assert.equal(sc.isValid("120", new Date('2018-06-22')), 0);
    });


    it("03.1test unvalid", () => {
        sc.addSubscription("120", new Date('2018-04-22'), new Date('2018-05-21'));
        sc.addSubscription("120", new Date('2018-02-22'), new Date('2018-04-21'));
        assert.equal(sc.isValid("120", new Date('2018-06-22')), false);
    });

    it("03.2test valDate", () => {
        sc.addSubscription("120", new Date('2017-04-22'), new Date('2018-05-21'));
        sc.addSubscription("55", new Date('2019-04-22'), new Date('2018-05-21'));
        assert.equal(sc.isValid("120", new Date('2017-04-22')), 1);
    });

    it("03.2test valDate2", () => {
        sc.addSubscription("120", new Date('2017-04-22'), new Date('2018-05-21'));
        sc.addSubscription("55", new Date('2019-04-22'), new Date('2019-05-21'));
        assert.equal(sc.isValid("55", new Date('2019-05-21')), 1);
    });

    it("03.2test valDate2", () => {
        sc.addSubscription("120", new Date('2017-04-22'), new Date('2018-05-21'));
        sc.addSubscription("55", new Date('2019-04-22'), new Date('2019-05-21'));
        sc.block();
        assert.equal(sc.isValid("55", new Date('2019-05-21')), false);
    });


    it("03.2test valDate2", () => {
        sc.addSubscription("120", new Date('2017-04-22'), new Date('2018-05-21'));
        sc.addSubscription("55", new Date('2019-04-22'), new Date('2019-05-21'));
        sc.block();
        assert.equal(sc.isValid("63", new Date('2019-05-21')), 0);
    });

    it("04test blocked", () => {
        sc.isBlocked = true;
        sc.addSubscription("120", new Date('2018-04-22'), new Date('2018-05-21'));
        assert.equal(sc.isValid("120", new Date('2018-06-22')), false);
    });

    it("05test block", () => {
        sc.block();
        assert.equal(sc._blocked, true)
    });

    it("06test unblock", () => {
        sc.unblock();
        assert.equal(sc._blocked, false)
    });

    it("07test ssn", () => {
        assert.equal(sc._SSN, 123456789)
        sc.SSN = "asd"
        assert.equal(sc._SSN, 123456789)
    });

    it("08test fname", () => {
        assert.equal(sc.firstName, "pesho")
        sc.firstName = "b";
        assert.equal(sc.firstName, "pesho")
    });

    it("09test lname", () => {
        assert.equal(sc.lastName, "peshev")
        sc.lastName = "a"
        assert.equal(sc.lastName, "peshev")
    });

    it("10test isBlocked", () => {
        assert.equal(sc.isBlocked, false)
        sc.block();
        assert.equal(sc.isBlocked, true)
    });

    it("11test isBlocked", () => {
        sc = new SubscriptionCard("a", "b", "c");
        assert.equal(sc.SSN, "c")
        assert.equal(sc.firstName, "a")
        assert.equal(sc.lastName, "b")
        sc.addSubscription("d", new Date('2017-04-22'), new Date('2018-05-21'));
        sc.addSubscription("3", new Date('2017-04-23'), new Date('2019-05-21'));
        sc.addSubscription("f", new Date('2021-04-24'), new Date('2020-05-21'));
        sc.block();
        assert.equal(sc.isValid("f", new Date('2017-04-22')), false)
        sc.unblock();
        sc.addSubscription("b", new Date('2017-04-22'), new Date('2020-05-21'));
        sc.addSubscription("*", new Date('2017-04-22'), new Date('2021-05-21'));
        sc.addSubscription("egg", new Date('2017-04-22'), new Date('2022-05-21'));
        assert.equal(sc.isValid("*", new Date('2017-04-22')), true)
    });
});

