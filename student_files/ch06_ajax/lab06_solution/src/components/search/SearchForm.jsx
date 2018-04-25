import React from 'react';

import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'

export default class SearchForm extends React.Component{
    render() {
        return (
            <Form horizontal onSubmit={this.props.onSubmit}>
                <FormGroup controlId="formHorizontalInput">
                    <Col componentClass={ControlLabel} sm={4}>
                        Movie Search Term
                    </Col>
                    <Col sm={8}>
                        <FormControl type="input" placeholder="Type your messeage here"
                                     value={this.props.searchTerm} onChange={this.props.onChange}/>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={3} sm={10}>
                        <Button type="submit">
                            Search
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

