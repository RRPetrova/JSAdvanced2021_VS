function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {

            let res = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                res += `\nComments:\n`;
                this.comments.forEach(c => res += ` * ${c}\n`);
            }
            return res.trim();
        }

    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;

        }
        toString() {
            let res = `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
            return res;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let ff = solve();
//let post = new ff.Post("Post", "Content");

//console.log(post.toString());

// Post: Post
// Content: Content

let scm = new ff.SocialMediaPost("TestTitle", "TestContent", 5, 10);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
let bl = new ff.BlogPost("adad", "sdfsfs", 10);
bl.view().view().view();
console.log(bl.toString());