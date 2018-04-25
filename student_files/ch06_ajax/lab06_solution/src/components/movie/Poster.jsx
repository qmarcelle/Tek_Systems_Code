import React from 'react';


export default class Poster extends React.Component {

    baseImageURL = 'http://image.tmdb.org/t/p/w185';

    render(){
        let poster = <span />;

        if (this.props.path)
            poster = <img src={this.baseImageURL + this.props.path} />;

        return poster;
    }
}
