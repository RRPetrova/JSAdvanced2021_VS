const { assert, expect } = require('chai');
const ChristmasMovies = require("./02. Christmas Movies_Resources");


describe("Test movies", () => {
    let mov = undefined;
    beforeEach(() => {
        mov = new ChristmasMovies();
    })

    it("test1 constr", () => {
        assert.deepEqual(mov.movieCollection, []);
        assert.deepEqual(mov.watched, {});
        assert.deepEqual(mov.actors, []);

    })

    it("test2 buyMovie ", () => {
        assert.equal(mov.buyMovie("other", ['Emilia Clarke', 'Henry Golding']),
            `You just got other to your collection in which Emilia Clarke, Henry Golding are taking part!`);

        mov.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Madison Ingoldsby'])

        assert.throws(() => {
            mov.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Madison Ingoldsby'])
        }, Error);


        mov.buyMovie('', ['Madison Ingoldsby', 'Madison Ingoldsby'])
        assert.throws(() => {
            mov.buyMovie('', ['Madison Ingoldsby', 'Madison Ingoldsby'])
        }, Error);



        assert.equal(mov.buyMovie("1", ['Madison Ingoldsby', 'Madison Ingoldsby']),
            `You just got 1 to your collection in which Madison Ingoldsby are taking part!`);


    })

    it("test3 discardMovie", () => {
        assert.throws(() => {
            mov.discardMovie('a')
        }, "a is not at your collection!");

        mov.buyMovie("1", ["a", "b"]);
        mov.buyMovie("2", ["c", "d"]);
        mov.buyMovie("3", ["ee", "ff"]);
        mov.watchMovie("1");

        assert.throws(() => {
            mov.discardMovie('2')
        }, "2 is not watched!");

        assert.deepEqual(mov.movieCollection, [{ "actors": ["a", "b"], "name": "1" }, { "actors": ["ee", "ff"], "name": "3" }]);

        mov.watchMovie("1");
        assert.deepEqual(mov.watched, { "1": 2 });
        assert.equal(mov.discardMovie("1"), `You just threw away 1!`);

        assert.deepEqual(mov.watched, { });
        assert.deepEqual(mov.movieCollection, [{ "actors": ["ee", "ff"], "name": "3" }]);





    });

    it("test4 watch", () => {
        assert.throws(() => {
            mov.watchMovie('Home Alone')
        }, 'No such movie in your collection!');

        assert.throws(() => {
            mov.watchMovie('Home Alone')
        }, 'No such movie in your collection!');

        mov.movieCollection = ['Home Alone', 'Home Alone2', 'Home Alone33'];
        mov.watched = { "Home Alone": 3, "Home Alone2": 4, "Home Alone33": 33 };

        assert.throws(() => {
            mov.watchMovie('nqma takyv')
        }, Error);

        assert.equal(mov.watched["Home Alone"], 3);
        assert.notEqual(mov.watched["Home Alone33"], 43);
        mov.buyMovie("1", ["act1"]);
        mov.watchMovie("1");
        assert.equal(mov.watched["1"], 1);
        mov.watchMovie("1");
        assert.equal(mov.watched["1"], 2);
        mov.watchMovie("1");
        assert.equal(mov.watched["1"], 3);



    });

    it("test5 most starred", () => {
        assert.throws(() => {
            mov.mostStarredActor()
        }, Error);

        mov.buyMovie("1", ["a", "a", "a"]);
        mov.buyMovie("2", ["b", "d", "e"]);
        mov.buyMovie("3", ["b", "y", "z"]);

        assert.equal(mov.mostStarredActor(), `The most starred actor is b and starred in 2 movies!`);

    })


    it("test6 fav", () => {
        assert.throws(() => {
            mov.favouriteMovie()
        }, Error);

        mov.watched = { "Home Alone": 3, "Home Alone2": 4, "Home Alone33": 33 };
        assert.equal(mov.favouriteMovie(), 'Your favourite movie is Home Alone33 and you have watched it 33 times!');

    })
})