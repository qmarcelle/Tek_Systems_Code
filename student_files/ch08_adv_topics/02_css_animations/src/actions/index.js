const changePositionActionCreator = (position)=> {

    return {
        type: 'CHANGE_POSITION',
        pos: position
    };
};


export { changePositionActionCreator };
