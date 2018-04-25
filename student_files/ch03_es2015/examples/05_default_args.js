console.log('-----------------------------');
console.log('-----05_default_args.js------');

function myFunc(foo, bar=10, callback=function(){} ) {
    console.log(myFunc.name);
    callback(foo, bar);
}

myFunc(50, 20, function(a,b){console.log(a,b); });
myFunc(50);