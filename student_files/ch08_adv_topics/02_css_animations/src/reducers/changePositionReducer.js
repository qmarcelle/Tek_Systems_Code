const changePositionReducer = (state='position4', action) => {
    switch (action.type) {
        case 'CHANGE_POSITION':
            return action.pos;
        default:
            return state;
    }
};

export default changePositionReducer;