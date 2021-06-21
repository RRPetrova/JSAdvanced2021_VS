class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        if (room == "livingRoom" || room == "bedRoom" ||
            room == "closet") {
            this.room = room;
            this.shelfGenre = shelfGenre;
            this.shelf = [];
            this.shelfCapacity = shelfCapacity;
        } else {
            throw `Cannot have book shelf in ${room}`
        }
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelfCapacity == this.shelf.length) {
            this.shelf.shift();
        }
        let obj = {};
        obj["bookName"] = bookName;
        obj["bookAuthor"] = bookAuthor;
        if (genre != undefined) {
            obj["genre"] = genre;
        }
        //  console.log(obj)
        this.shelf.push(obj);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }


    throwAwayBook(bookName) {
        let currBook = this.shelf.find(x => x.bookName == bookName);
        //console.log(this.shelf.indexOf(currBook))
        this.shelf.splice(this.shelf.indexOf(currBook), 1)
        
    }

    showBooks(genre) {
        let res = `Results for search "${genre}":\n`
        this.shelf.forEach(book => {
            if (book.genre == genre) {
                res += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`
            }
        });
        return res.trim();
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    toString() {
        let res = "";
        if (this.shelf.length === 0) {
            res = "It's an empty shelf";
        } else {
            res = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`

            this.shelf.forEach(obj =>

                res += `\uD83D\uDCD6 "${obj.bookName}" - ${obj.bookAuthor}\n`
            )
        }
        return res.trim();
    }
}



let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log(bedRoom.toString());
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log(bedRoom.toString());
bedRoom.throwAwayBook("John Adams")
console.log(bedRoom.toString());


