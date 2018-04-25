import {connect} from 'react-redux';

import { createCountAction, selectRadioAction } from '../actions';
import Count from '../components/Count.jsx'

const mapStateToProps = (state) => {
    return {
        count: state.count,
        selectedRadio: state.selectedRadio
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(createCountAction()),
        onDecrement: () => dispatch(createCountAction('down')),
        onRadioChecked: (evt) => dispatch(selectRadioAction(evt))
    };
};

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count);
export default CountContainer;
