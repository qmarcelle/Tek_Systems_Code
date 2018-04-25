import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import SearchForm from './components/SearchForm.jsx';
import Results from './components/Results.jsx';


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
        return (
            <div className={css(styles.layout)}>
                <SearchForm onMessageChange={this.handleMessage}/>
                <Results msg={this.state.msg}/>
            </div>
        );
    }
}


const styles = StyleSheet.create({
    layout: {
        display: 'flex',
        width: '80%',
        margin: '0 auto',
        flexDirection: 'row'
    }
});