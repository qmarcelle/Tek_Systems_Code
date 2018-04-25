console.log('----------------------------');
console.log('------07_rest_args.js-------');

function add(a, b, ...more) {
    let total = 0, moreTotal = 0;

    for(let num of more)
        moreTotal += num;

    total = a + b + moreTotal;

    return total;
}

console.log(add(5, 7, 3, 2, 1));