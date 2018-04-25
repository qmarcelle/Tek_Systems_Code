const logTool = (store) => (next) => (action) => {
    // this gives us access to the store and the dispatched action
    // this is where we do our work
    console.log('LogTool: ' + JSON.stringify(action));
    next(action);
};

export {logTool};
