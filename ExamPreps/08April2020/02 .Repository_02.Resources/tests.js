let { Repository } = require("./solution.js");
let { assert, expext } = require("chai");

describe("Tests repo", function () {
    let repo = undefined;
    let entity;

    beforeEach(() => {
        let props = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        repo = new Repository(props);
    })

    it("test1 validate", function () {
        assert.throws(() => {
            repo._validate({})
        }, "Property name is missing from the entity!");


        entity = { age: 22, birthday: new Date(1998, 0, 7) };
        assert.throws(() => {
            repo._validate(entity)
        }, "Property name is missing from the entity!");

        entity = { name: 12, age: 22, birthday: new Date(1998, 0, 7) };
        assert.throws(() => {
            repo._validate(entity)
        }, "Property name is not of correct type!");

        entity = { name: "Pesho", birthday: new Date(1998, 0, 7) };
        assert.throws(() => {
            repo._validate(entity)
        }, "Property age is missing from the entity!");

        entity = { name: "pesho", age: "22", birthday: new Date(1998, 0, 7) };
        assert.throws(() => {
            repo._validate(entity)
        }, "Property age is not of correct type!");

        entity = { name: "Pesho", age: 22, };
        assert.throws(() => {
            repo._validate(entity)
        }, "Property birthday is missing from the entity!");

        entity = { name: "pesho", age: 22, birthday: "new Date(1998, 0, 7)" };
        assert.throws(() => {
            repo._validate(entity)
        }, "Property birthday is not of correct type!");

        entity = { name: 3, age: "22", birthday: "new Date(1998, 0, 7)" };
        assert.throws(() => {
            repo._validate(entity)
        }, "Property name is not of correct type!");

        entity = { name: "", age: 22, birthday: new Date(1998, 0, 7) };
        assert.deepEqual(repo.add(entity), 0)

    });
    it("test2  getID", function () {
        entity = { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) };

        assert.equal(repo.count, 0);
        assert.equal(repo.add(entity), 0);
        assert.equal(repo.data.has(0), true)
        assert.equal(repo.data.has(2), false)
        assert.deepEqual(repo.data.values().next().value, { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) })
        assert.equal(repo.add(entity), 1);
        assert.throws(() => {
            repo.getId(3)
        }, "Entity with id: 3 does not exist!");

        assert.deepEqual(repo.getId(0), { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) });
        assert.deepEqual(repo.getId(1), { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) });
        assert.equal(repo.count, 2);


    });

    it("test3 upd", function () {
        assert.throws(() => {
            repo.update(0, entity)
        }, Error);

        entity = { name: "pesho", age: 22, birthday: new Date(1998, 0, 7) };
        let entity2 = { name: "pesho2", age: 22, birthday: new Date(1998, 0, 7) };
        let entity3 = { name: "pesho3", age: 22, birthday: new Date(1998, 0, 7) };

        assert.throws(() => {
            repo.update(0, entity2)
        }, "Entity with id: 0 does not exist!");

        repo.add(entity);
        repo.add(entity2);
        repo.add(entity3);
        repo.update(0, entity2);

        assert.deepEqual(repo.getId(0), { name: "pesho2", age: 22, birthday: new Date(1998, 0, 7) });
        assert.deepEqual(repo.getId(1), { name: "pesho2", age: 22, birthday: new Date(1998, 0, 7) });

        assert.throws(() => {
            repo.update(4, entity2)
        }, "Entity with id: 4 does not exist!");

        assert.throws(() => {
            repo.update(0, entity4)
        }, Error);


        repo.update(0, entity3);
        assert.deepEqual(repo.getId(0), { name: "pesho3", age: 22, birthday: new Date(1998, 0, 7) });
        repo.update(0, entity);
        assert.deepEqual(repo.getId(0), { name: "pesho", age: 22, birthday: new Date(1998, 0, 7) });
        assert.equal(repo.count, 3)
    });



    it("test4 del", function () {
        entity = { name: "pesho", age: 22, birthday: new Date(1998, 0, 7) };
        entity2 = { name: "pesho2", age: 22, birthday: new Date(1998, 0, 7) };
        assert.throws(() => {
            repo.del(0)
        }, "Entity with id: 0 does not exist!");

        repo.add(entity);
        assert.throws(() => {
            repo.del(1)
        }, "Entity with id: 1 does not exist!");
        assert.equal(repo.count, 1)
        repo.add(entity2);
        assert.equal(repo.count, 2)
        repo.del(0)
        assert.equal(repo.count, 1)



    });

    it("test5 del", function () {
        entity = { name: "pesho", age: 22, birthday: new Date(1998, 0, 7) };
        entity2 = { name: "pesho2", age: 22, birthday: new Date(1998, 0, 7) } //to be del
        entity3 = { name: "pesho3", age: 22, birthday: new Date(1998, 0, 7) }

        repo.add(entity);
        repo.add(entity2);
        repo.add(entity3);

        assert.equal(repo.count, 3)
        repo.del(1)
        assert.equal(repo.count, 2)

        assert.deepEqual(repo.getId(0), { name: "pesho", age: 22, birthday: new Date(1998, 0, 7) });
        assert.deepEqual(repo.data.has(1), false);
        assert.deepEqual(repo.data.has(2), true);
        assert.deepEqual(repo.getId(2), { name: "pesho3", age: 22, birthday: new Date(1998, 0, 7) });
       
        assert.throws(() => {
            repo.del(1)
        }, "Entity with id: 1 does not exist!");
       
        repo.del(0)
        repo.del(2)
        assert.equal(repo.count, 0);

    });
});
