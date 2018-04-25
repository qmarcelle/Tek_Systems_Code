console.log('-------------------------------');
console.log('------10_arrow_funcs.js--------');

let add = (a, b) => a + b;
console.log(add(5, 10));



let noop = () => {};
noop();


let multline = msg => {
    msg = 'Msg: ' + msg;
    return msg;
};
console.log(multline('hello'));


let createLiteral = (arg1, arg2) => ( { a: arg1, b: arg2 } );
console.log(createLiteral(10, 20));


let multiArgs = (a=10, b=20, ...more) => { console.log(a, b, ...more); };
multiArgs(100, 200, 300, 400);

let sampleArrow = (a, b=20) => {
    console.log(this);          // this is undefined
};
sampleArrow(10);

// arrow functions called via call() or apply() ignore the first argument
let getValue = a => {
    console.log(this);                  // this is undefined
    return a;
};
console.log(getValue.call({}, 20));     // displays 20

let myObj = {
    value: 10,
    someFunc: function () {
        console.log('someFunc: ' + this.value);                         // 10
        let someArrow = () => console.log('inArrow: ' + this.value);    // 10
        someArrow();
    },
};

myObj.someFunc();