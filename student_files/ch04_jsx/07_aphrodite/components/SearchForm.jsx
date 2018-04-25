import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { msg: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(msg) {
        this.setState(() => ({ msg }));
        this.props.onMessageChange(msg);
    }

    render() {
        return (
            <form className={css([styles.layout, styles.color])}>
                <span>Enter a message: </span>
                <input type="text" className={css(styles.input)}
                       placeholder="Type a message"
                       value={this.state.msg}
                       onChange={(evt)=> this.handleInputChange(evt.target.value)} />
            </form>
        );
    }
}


const styles = StyleSheet.create({
    layout: {
        width: '50%',
        flex: 1,
        fontSize: '1.2rem'
    },
    input: {
        fontSize: '1.2rem'
    },
    color: {
        color: 'red',
        backgroundColor: '#ccfcee'
    }
});
