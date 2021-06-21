const { expect, assert } = require('chai');
const SortedList = require("./02sortedList");

describe("sortList add", () => {
    let sl = undefined;
    beforeEach(() => {
        sl = new SortedList();

    })
    it("01test add", () => {
        assert.equal(sl.size, 0)
        sl.add(1)
        assert.equal(sl.size, 1)
        sl.add(2)
        sl.add(3)
        assert.equal(sl.size, 3)
    })

    it("02test get", () => {
        sl.add(1)
        assert.equal(sl.get(0),1)
    })

    it("03test get", () => {
        sl.add(2);
        sl.remove(0);
        assert.equal(sl.size, 0)
       
    })

    it("04test get", () => {
        sl.add(2);
        assert.equal(sl.size, 1)
        assert.equal(sl.get(0), 2)
        sl.remove(0)
        assert.throws(() => {
            sl.get(0)
        }, "Collection is empty.");
    })

    it("05test get", () => {
        sl.add(1)
        sl.add(2)
        sl.add(3)
        assert.throws(() => {
            sl.get(4)
        }, "Index was outside the bounds of the collection.");
    })

    it("06test get", () => {
        sl.add(2)
        assert.throws(() => {
            sl.get(-20)
        }, "Index was outside the bounds of the collection.");
    })

    it("07test remove", () => {
        sl.add(55)
        sl.add(33)
        sl.add(10)
        sl.add(1);
        assert.equal(sl.list.length, 4)


        assert.equal(sl.list.length, 4)
        sl.remove(1);
        assert.equal(sl.list.length, 3)
        sl.remove(0);
        assert.equal(sl.list.length, 2)
    })


    it("08test remove", () => {
        sl.add(0);
        assert.throws(() => {
            sl.remove(20)
        }, "Index was outside the bounds of the collection.");
    })

    it("09test remove", () => {
        sl.add(3)
        assert.throws(() => {
            sl.remove(-20)
        }, "Index was outside the bounds of the collection.");
    })

    it("10test sort", () => {
        sl.add(12)
        sl.add(18)
        sl.add(54)
        sl.add(1);

        sl.sort();
        assert.equal(sl.get(0), 1);
        assert.equal(sl.get(1), 12);
        assert.equal(sl.get(2), 18);
    })

  
})
