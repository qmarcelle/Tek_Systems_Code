import React from 'react';

import Movie from './Movie.jsx';

export default class MovieList extends React.Component {
    render() {
        let list = this.props.movies.map(m => <Movie {...m} key={m.id}/> );
        console.log(list);
        return (
            <ul className="movies">
                { list }
            </ul>
        );
    }
}

