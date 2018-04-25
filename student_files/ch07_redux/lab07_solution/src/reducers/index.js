const rootReducer = (state={count: 0, selectedRadio: '1'}, action) => {

    switch(action.type) {
        case 'DECREMENT':
            return {
                count: state.count - parseInt(state.selectedRadio),
                selectedRadio: state.selectedRadio
            };
        case 'INCREMENT':
            return {
                count: state.count + parseInt(state.selectedRadio),
                selectedRadio: state.selectedRadio
            };
        case 'AMOUNT_CHANGE':
            return {
                count: state.count,
                selectedRadio: action.selectedRadio
            };
        default:
            return state;
    }
};

export default rootReducer;





//=============================================================================
//  Another way, with broken up reducers...
//  Here, each reducer focuses only on its portion of the state.
//  (uncomment the items below and comment out the items above to make it work)
// const countReducer = (state=0, selectedRadio='1', action) => {
//     let amount = parseInt(selectedRadio);
//     switch(action.type) {
//         case 'DECREMENT':
//             return state - amount;
//         case 'INCREMENT':
//             return state + amount;
//         default:
//             return state;
//     }
// };
//
//
// const selectedRadioReducer = (state='1', action) => {
//     switch (action.type) {
//         case 'AMOUNT_CHANGE':
//             return action.selectedRadio;
//         default:
//             return state;
//     }
// };
//
// const rootReducer = (state={}, action) => {
//     console.log(action);
//     console.log(state);
//     let obj = {
//         count: countReducer(state.count, state.selectedRadio, action),
//         selectedRadio: selectedRadioReducer(state.selectedRadio, action)
//     };
//     console.log(obj);
//     return obj;
// };
//
// export default rootReducer;



//-------------
//  Note: because the count part of the state REQUIRES knowledge of the
//        selectedRadio, combineReducers CAN'T be used.  combineReducers
//        doesn't have that capability to modify arguments to the sub-reducers.
//-------------




