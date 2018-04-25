import React from 'react';
import PubSub from 'pubsub-js'

import Results from './results.jsx'

export default class ResultsContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = { message: '' };
        this.getResults = this.getResults.bind(this);
    }

    componentWillMount(){
        this.subscriber = PubSub.subscribe('MESSAGE_CHANNEL', this.getResults);
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.subscriber);
    }

    getResults(channel, message) {
        this.setState({ message });
    }

    render(){
        return (
            <Results message={this.state.message} />
        );
    }
}

