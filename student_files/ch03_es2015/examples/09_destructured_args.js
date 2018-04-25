console.log('-------------------------------');
console.log('------09_destructured.js-------');


function add(a, b, {c, d, e}) {
    return a + b + c + d + e;
}

let obj = {c: 3, d: 2, e: 1};
let result = add(5, 7, obj);
console.log(result);