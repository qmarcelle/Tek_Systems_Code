/*
    To run this code, follow the instructions in the student manual for setting
    up React Native and Expo.  Then copy all of this code into (and replace) the
    code in App.js.
*/
import React, { Component } from 'react';

import MovieSearch from './movie/moviecontainer'

export default class MovieRetriever extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MovieSearch />
        );
    }
}
