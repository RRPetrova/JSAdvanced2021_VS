// function solve(area, vol, array) {
//     let parsed = JSON.parse(array);

//     const res = [];
//     for (let current of parsed) {
//         let currArea = Math.abs(area.call(current));
//         let currVol = Math.abs(vol.call(current));

//         let output = {
//             area: currArea,
//             volume: currVol
//         };
//         res.push(output);
//     }

//     return (res);
// }

function solve(area, vol, obj) {
    let parsed = JSON.parse(obj);

   function res(obj) {
       let areaObj = (area.call(obj));
       let volumeObj = (vol.call(obj));
       return {area: areaObj, volume: volumeObj};
   }
   return parsed.map(res);
}







function area() {
    return (this.x * this.y);
}

function vol() {
    return (this.x * this.y * this.z);
}

console.log(solve(
    area, vol, `[
        { "x": "1", "y": "2", "z": "10" },
        { "x": "7", "y": "7", "z": "10" },
       { "x": "5", "y": "2", "z": "10" }
    ]`
))

