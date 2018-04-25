import React from 'react';

import MovieList from './MovieList.jsx';
import PubSub from "pubsub-js";

export default class MovieListContainer extends React.Component {

    constructor (props) {
        super(props);
        this.state = { movies: [] };
        this.getResults = this.getResults.bind(this);
    }

    componentWillMount(){
        this.subscriber = PubSub.subscribe('MOVIE_DATA', this.getResults);
    }

    componentWillUnmount(){ PubSub.unsubscribe(this.subscriber); }

    getResults(channel, movies) {
        this.setState({ movies });
    }

    render () {
        return (
            <MovieList movies={this.state.movies}/>
        );
    }
}
