import React from 'react';

import { Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'

export default class MessageForm extends React.Component{
    render() {
        return (
            <Form horizontal onSubmit={this.props.onSubmit}>
                <FormGroup controlId="formHorizontalInput">
                    <Col componentClass={ControlLabel} sm={4}>
                        Message
                    </Col>
                    <Col sm={8}>
                        <FormControl type="input" placeholder="Type your messeage here"
                                     value={this.props.message} onChange={this.props.onChange}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={3} sm={10}>
                        <Checkbox checked={this.props.checkbox} onChange={this.props.onToggle}>
                            Echo each keypress
                        </Checkbox>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={3} sm={10}>
                        <Button type="submit">
                            Submit Message
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

