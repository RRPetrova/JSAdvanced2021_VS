function solve() {
    let firstEl;
    let secEl;
    let resSel;
    let res = {
        init: (sel1, sel2, resultSelect) => {
            firstEl = document.querySelector(sel1);
            secEl = document.querySelector(sel2);
            resSel = document.querySelector(resultSelect); },
        add: () => {resSel.value = +firstEl.value + +secEl.value },
        subtract: () => { resSel.value = +firstEl.value - +secEl.value }
    };
    return res;
}
let obj = solve();
obj.init("#num1", "#num2", "#result")
let add = obj.add;
let sub = obj.subtract;
