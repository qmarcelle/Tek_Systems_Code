const greetingReducer = (state='Click to change', action) => {
    switch (action.type) {
        case 'CHANGE_GREETING':
            return action.salutation;
        default:
            return state;
    }
};

export default greetingReducer;