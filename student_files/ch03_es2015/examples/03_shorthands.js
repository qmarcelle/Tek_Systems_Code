console.log('----------------------------');
console.log('------03_shorthands.js------');

    function createCustomer(name, address) {
        return {
            name,
            address,
            getName() {
                return this.name;
            }
        };
    }

    let cust = createCustomer('Bob', '123 Main St.');
    console.log(cust.address);