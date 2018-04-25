console.log('----------------------------');
console.log('---------06_let.js----------');

function someFunction() {
    if(true) {
        let foo = 'afternoon';
        console.log(foo);
    }

    // console.log(foo);			// foo is not defined here
}
someFunction();

function otherFunc() {
    for(let i=0,len=10;i<len;i++) {
        console.log(i);
    }
    // console.log(i);				// i is not defined here
}
otherFunc();