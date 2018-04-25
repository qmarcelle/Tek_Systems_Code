import { person, getPerson } from './module1.js'
import { person as p1 } from './module1.js'
import * as personMod from './module1.js'
import defaultPerson from './module1.js'

console.log(person.name);
console.log(getPerson());
console.log(p1.name);
console.log(personMod.morePeople[0]);
console.log(defaultPerson.name);

person.name = 'William Sizemore';