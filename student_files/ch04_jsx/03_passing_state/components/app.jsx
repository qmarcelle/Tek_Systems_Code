import React from 'react';
import SearchForm from './searchform.jsx';
import { Results } from './results.jsx';


class App extends React.Component{

    constructor(props) {
        super(props);
        this.handleMessage = this.handleMessage.bind(this);
        this.state = { msg: '' };
    }

    handleMessage(msg) {
        this.setState({msg})
    }

    render(){
        return (
            <div>
                <SearchForm onMessageChange={this.handleMessage}/>
                <Results msg={this.state.msg}/>
            </div>
        );
    }
}

export { App };