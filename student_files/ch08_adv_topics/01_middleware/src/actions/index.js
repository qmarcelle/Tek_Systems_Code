const createCountAction = (direction='up')=> {

    let action = {
        type: 'INCREMENT',
    };

    if (direction === 'down'){
        action = {
            type: 'DECREMENT',
        };
    }
    return action;
};

const selectRadioAction = (evt) => {
    return {
        type: 'AMOUNT_CHANGE',
        selectedRadio: evt.target.value
    };
};

export { createCountAction, selectRadioAction };