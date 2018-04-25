function checkName(name){
    return name.length > 0 ? '' : 'Name is required.'
}

function checkAddress(address){
    return address.length > 0 ? '' : 'Address is required.'
}

export { checkName, checkAddress };