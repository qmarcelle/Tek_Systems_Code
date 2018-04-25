import React from 'react';

import MovieList from './MovieList.jsx';
import PubSub from "pubsub-js";

export default class MovieListContainer extends React.Component {

    constructor (props) {
        super(props);
        this.state = { movies: [] };
        // Step 9
    }

    componentWillMount(){
        // Step 9
    }

    // Step 9


    render () {
        return (
            <MovieList movies={this.state.movies}/>
        );
    }
}
