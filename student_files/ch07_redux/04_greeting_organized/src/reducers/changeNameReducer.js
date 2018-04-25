const changeNameReducer = (state='Click to change', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

export default changeNameReducer;