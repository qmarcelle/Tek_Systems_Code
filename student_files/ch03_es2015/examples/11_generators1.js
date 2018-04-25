console.log('-------------------------------');
console.log('------11_generators1.js--------');

function* count() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let countIter = count();

for (let i of countIter) {
    console.log(i);
}

let countIter2 = count();
console.log(countIter2.next().value);	// 1
console.log(countIter2.next().value);   // 2
console.log(countIter2.next().value);   // 3
console.log(countIter2.next().value);   // 4
console.log(countIter2.next().value);   // undefined