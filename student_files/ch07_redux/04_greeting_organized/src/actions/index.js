let names = ['Elizabeth', 'Jo', 'Amy', 'Margaret', 'Carrie', 'Laurie',
    'Daisy', 'Demi', 'Marmee'];

let salutations = ['Hello', 'Welcome', 'Salutations', 'Greetings', 'Good Day',
    'Hey', 'Yo', 'Howdy' ];


const changeNameActionCreator = ()=> {
    names = names.rotate();

    return {
        type: 'CHANGE_NAME',
        name: names[0]
    };
};

const greetingActionCreator = ()=> {
    salutations = salutations.rotate();

    return {
        type: 'CHANGE_GREETING',
        salutation: salutations[0]
    };
};

export { changeNameActionCreator, greetingActionCreator };