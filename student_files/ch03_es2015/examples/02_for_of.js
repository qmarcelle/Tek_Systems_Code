console.log('------------------------');
console.log('------02_for_of.js------');


let gear = [
    { name: 'snorkel', cost: 14.99, use: 'breathing'},
    { name: 'boots', cost: 49.99, use: 'walking' },
    { name: 'bicycle', cost: 249.99, use: 'recreation'}
];

for(let i= 0,len=gear.length; i<len; i++) {
    let item = gear[i];
    for (let prop in item)
        console.log('Property: ' + prop + ', Value:' + item[prop]);
}

gear.forEach(function(item, idx, array){
    console.log(item.name);
});

for(let item of gear)
    console.log(item.name + ' ' + item.cost);