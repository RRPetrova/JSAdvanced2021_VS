function solution(cmd) {

    let cmd2 = {
        'upvote': () => { this.upvotes++ },
        'downvote': () => { this.downvotes++ },
        'score': () => {
            let down = this.downvotes;
            let up = this.upvotes;

            let res = [];
            let rate = "";

            let total = up + down; //100
            let bal = up - down; //100
            if (up > total * 0.66 && total >= 10) {
                rate = "hot";
            } else if (bal >= 0 && (up > 100 || down > 100) ) {
                rate = "controversial";
            } else if (bal < 0 && total >= 10) {
                rate = "unpopular";
            } else {
                rate = "new";
            }
            if (total > 50) {
                let bigger = Math.max(Math.abs(down), Math.abs(up));
                down += Math.ceil(0.25 * bigger);
                up += Math.ceil(0.25 * bigger);
            }
            res.push(up)
            res.push(down)
            res.push(up - down);
            res.push(rate);

           
            return res;
        }
    }
    return cmd2[cmd]();
}
let post = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};
// (solution.call(post, 'downvote'));
// (solution.call(post, 'upvote'));
// (solution.call(post, 'upvote'));
// for (let i = 0; i < 38; i++) {
//     solution.call(post, 'upvote');
// }
// (solution.call(post, 'downvote'));
let sc = solution.call(post, "score");
console.log(sc)



