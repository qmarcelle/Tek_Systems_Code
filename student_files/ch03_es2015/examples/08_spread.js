console.log('----------------------------');
console.log('--------08_spread.js--------');


function add(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(add(5, 7, ...[3, 2, 1]));


console.log('----------------------------');
console.log('--------08_spread.js - spread object--------');

let defaultStyle = {
    fontSize: '16px',
    color: 'black',
    backgroundColor: '#fff9df'
};

let objStyle = {
    fontSize: '20px',
    ...defaultStyle,
    backgroundColor: '#d3ff35'
};

console.log(objStyle);   //{ backgroundColor: "#d3ff35", color: "black", fontSize: "16px" }