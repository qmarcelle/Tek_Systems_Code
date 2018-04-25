import {contacts, title} from './contacts';

document.querySelector('title').innerHTML = title;
document.querySelector('#root h1').innerHTML = title;

let root = document.querySelector('#root');
let ulNode = document.createElement('ul');

contacts.forEach(function (contact) {
    let newNode = document.createElement('li');
    newNode.innerHTML = `<span>${contact.name} </span> <span>${contact.address}</span>`;
    ulNode.appendChild(newNode);
});

root.appendChild(ulNode);