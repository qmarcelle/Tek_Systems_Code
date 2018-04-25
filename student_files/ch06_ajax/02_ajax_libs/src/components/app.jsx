import React from 'react';
import AlertContainer from 'react-alert';

import MainHeader from './header.jsx'
import MovieListContainer from './movie/moviecontainer.jsx'


class App extends React.Component{
    constructor(props){
        super(props);
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert(msg){ this.toaster.show(msg); }

    render(){
        return (
            <div>
                <AlertContainer ref={ac => this.toaster = ac }  />
                <MainHeader title={this.props.title} />
                <MovieListContainer show={this.showAlert} />
            </div>
        );
    }
}

export { App };