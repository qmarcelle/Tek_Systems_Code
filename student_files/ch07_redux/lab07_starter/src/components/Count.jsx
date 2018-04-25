import React from 'react';
import {FormGroup, Radio, Button} from 'react-bootstrap'


export default class Count extends React.Component {
    render() {
        const { count, onIncrement, onDecrement,
                selectedRadio, onRadioChecked } = this.props;
        return (
            <div>
                <div className="amount-system">
                    {/* step 1 -  you may remove this*/}
                </div>
                <div className="count-system">
                    {/* step 1 -  you may remove this*/}
                </div>
            </div>
        );
    }
}