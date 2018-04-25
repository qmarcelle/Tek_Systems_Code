import React from 'react';
import {FormGroup, Radio, Button} from 'react-bootstrap'


export default class Count extends React.Component {
    render() {
        const { count, onIncrement, onDecrement,
                selectedRadio, onRadioChecked } = this.props;
        return (
            <div>
                <div className="amount-system">
                    <FormGroup>
                        <Radio name="amountGroup" inline
                               checked={selectedRadio === "1"} value="1"
                               onChange={onRadioChecked}>
                            1
                        </Radio>
                        {' '}
                        <Radio name="amountGroup" inline
                               checked={selectedRadio === "10"} value="10"
                               onChange={onRadioChecked}>
                            10
                        </Radio>
                        {' '}
                        <Radio name="amountGroup" inline
                               checked={selectedRadio === "100"} value="100"
                               onChange={onRadioChecked}>
                            100
                        </Radio>
                    </FormGroup>
                </div>
                <div className="count-system">
                    <Button bsSize="large" block active bsStyle="primary"
                            onClick={onIncrement}>
                        Increment
                    </Button>
                    <span>{ count }</span>
                    <Button bsSize="large" block active bsStyle="success"
                            onClick={onDecrement}>
                        Decrement
                    </Button>
                </div>
            </div>
        );
    }
}