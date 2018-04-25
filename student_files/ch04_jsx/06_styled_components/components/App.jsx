import React from 'react';

import SearchForm from './SearchForm.jsx';
import Results from './Results.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleMessage = this.handleMessage.bind(this);
        this.state = { msg: '' };
    }

    handleMessage(msg) {
        this.setState({msg});
    }

    render(){
        let {msgColor, inputColor} = this.props;
        return (
            <div>
                <SearchForm onMessageChange={this.handleMessage}/>
                <Results msg={this.state.msg}/>
            </div>
        );
    }
}

export { App };