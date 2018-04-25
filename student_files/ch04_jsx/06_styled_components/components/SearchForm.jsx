import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 2rem;
`;

const Input = styled.input`
    color: #23de34;
    font-size: 2rem;
`;

export default class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { msg: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(msg) {                // msg is a string        'hello'
        this.setState(() => ({ msg }));     // state is an object:    { msg: 'hello' }
        this.props.onMessageChange(msg);    // passing a string only: 'hello'
    }

    render() {
        return (
            <Wrapper>
                <form>
                    <span>Enter a message: </span>
                    <Input type="text"
                           placeholder="Type a message"
                           value={this.state.msg}
                           onChange={(evt)=> this.handleInputChange(evt.target.value)} />
                </form>
            </Wrapper>
        );
    }
}