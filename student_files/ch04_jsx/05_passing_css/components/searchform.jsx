import React from 'react';

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
        let style = {
            fontSize: '1.5rem',
            color: this.props.inputColor
        };

        return (
            <form style={{fontSize:style.fontSize}}>
                <span>Enter a message: </span>
                <input type="text" style={style}
                       placeholder="Type a message"
                       value={this.state.msg}
                       onChange={(evt)=> this.handleInputChange(evt.target.value)} />
            </form>
        );
    }
}