import React from 'react';
import SearchForm from './searchform.jsx';
import { Results } from './results.jsx';


class App extends React.Component {

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
                <SearchForm onMessageChange={this.handleMessage} inputColor={inputColor}/>
                <Results msg={this.state.msg} msgColor={msgColor}/>
            </div>
        );
    }
}

export { App };