import React from 'react';
import PubSub from 'pubsub-js'

import MessageForm from './MessageForm.jsx'


export default class FormContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = { message: '', checkbox: true };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.subscriber);
    }

    toggleCheckbox(evt){
        this.setState({ checkbox: !this.state.checkbox });
    }

    handleInputChange(evt) {
        this.setState({ message: evt.target.value });
        if (this.state.checkbox)
            PubSub.publish('MESSAGE_CHANNEL', evt.target.value);
    }

    handleSubmit(evt){
        evt.preventDefault();
        let message = this.state.message;
        PubSub.publish('MESSAGE_CHANNEL', message);
        this.props.show('Form submitted: ' + message);
        this.setState({ message: '' })
    }

    render(){
        return (
            <MessageForm checkbox={this.state.checkbox} onToggle={this.toggleCheckbox}
                         message={this.state.message} onChange={this.handleInputChange}
                         onSubmit={this.handleSubmit} />
        );
    }
}
