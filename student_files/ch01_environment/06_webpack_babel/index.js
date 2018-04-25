import {contacts, title} from './contacts';

document.querySelector('title').innerHTML = title;
document.querySelector('#root h1').innerHTML = title;
let root = document.querySelector('#root');

contacts.forEach(function (contact) {
    let newNode = document.createElement('h4');
    newNode.innerHTML = contact.name;
    root.appendChild(newNode);
});

