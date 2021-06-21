class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.id = 1;
        this.rpl = 1;
    }

    set likes(like) {
        this._likes.push(like);
    }

    set comments(comm) {
        this._comments.push(comm);
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }


    like(username) {
        if (this._likes.find(x => x.username == username)) {
            throw new Error("You can't like the same story twice!")
        }
        if (username == this.creator) {
            throw new Error("You can't like your own story!")
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        }
       
        this._likes.splice(this._likes.indexOf(username), 1);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        if (id === undefined || !this._comments.find(x => x.id == id)) {
            let obj = {
                "id": this.id++,
                "username": username,
                "content": content,
                "replies": []
            }
            this._comments.push(obj);
            return `${username} commented on ${this.title}`
        }

        if (this._comments.find(x => x.id == id)) {
            let currCom = this._comments.find(x => x.id == id)
            let currRpl = {
                "id": `${id}.${this.rpl++}`,
                "username": username,
                "content": content
            }
            currCom.replies.push(currRpl);

            return `You replied successfully`
        }
    }

    toString(sortingType) {
        let res = `Title: ${this.title}\nCreator: ${this.creator}\n`;
        res += `Likes: ${this._likes.length}\nComments:\n`

        if (sortingType == "asc") {
            this._comments.sort((a, b) => a.id - (b.id))
            this._comments
                .forEach(e =>
                    e.replies.sort((a, b) => a.id.localeCompare(b.id)))
        } else if (sortingType == "desc") {
            this._comments.sort((a, b) => b.id - a.id)
            this._comments
                .forEach(e =>
                    e.replies.sort((a, b) => b.id.localeCompare(a.id)))
        } else {
            this._comments.sort((a, b) => a.username.localeCompare(b.username))
            this._comments
                .forEach(e =>
                    e.replies.sort((a, b) => a.username.localeCompare(b.username)))
        }
        this._comments.forEach(e => {
            res += `-- ${e.id}. ${e.username}: ${e.content}\n`
            if (e.replies.length > 0) {
                e.replies.forEach(r => res += `--- ${r.id}. ${r.username}: ${r.content}\n`)
            }
        }
        )
        return res.trim();
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
