import React from 'react';

import $ from 'jquery'
import axios from 'axios'
import superagent from 'superagent'
// import superagent from 'superagent'

import { MovieList } from './movie.jsx';


export default class MovieListContainer extends React.Component {

    constructor (props) {
        super(props);
        this.state = { movies: [] };
    }

    //
    // Using Fetch:
    // componentDidMount() {
    //     let key    = '23cf8b21d9a3bfd615076491d6bae442',
    //         search = 'avengers',
    //         url    = `http://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}`;
    //
    //     fetch(url).then(response => response.json())
    //         .then(results => {
    //             if(results.results)
    //                 this.setState({ movies: results.results });
    //             else throw 'No results returned.';
    //         })
    //         .catch(errors => this.props.show('Error detected: ' + errors));
    // }


    //
    // Using jQuery:
    // componentDidMount() {
    //     let key    = '23cf8b21d9a3bfd615076491d6bae442',
    //         search = 'avengers',
    //         url    = `http://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}`;
    //
    //     $.ajax(url).then(
    //         results => {
    //             if(results.results)
    //                 this.setState({ movies: results.results })
    //         },
    //         (xhr, status, errMsg) => this.props.show('Error detected: ' + errMsg)
    //     );
    // }


    //
    // Using Axios:
    componentDidMount() {
        let key    = '23cf8b21d9a3bfd615076491d6bae442',
            search = 'avengers',
            url    = `http://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}`;

        axios.get(url)
            .then(results => {
                if(results.data.results)
                    this.setState({ movies: results.data.results });
                else throw 'No results returned.';
            })
            .catch(errors => this.props.show('Error detected: ' + errors));
    }


    //
    // Using SuperAgent:
    // componentDidMount() {
    //     let key    = '23cf8b21d9a3bfd615076491d6bae442',
    //         search = 'avengers',
    //         url    = `http://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}`;
    //
    //     superagent.get(url)
    //         .then(results => {
    //             if(results.body.results)
    //                 this.setState({ movies: results.body.results });
    //             else throw 'No results returned.';
    //         })
    //         .catch(errors => this.props.show('Error detected: ' + errors));
    // }

    render () {
        return (
            <MovieList movies={this.state.movies}/>
        );
    }
}
