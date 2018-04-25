import React from 'react';


class Poster extends React.Component {

    baseImageURL = 'http://image.tmdb.org/t/p/w185';

    render(){
        let poster = <span />;

        if (this.props.path)
            poster = <img src={this.baseImageURL + this.props.path} />;

        return poster;
    }
}


class Movie extends React.Component {

    render() {
        let overview = this.props.overview;
        if (overview && overview.length > 100)
            overview = overview.slice(0,48) + '...' + overview.slice(-48);

        return (
            <li>
                <Poster path={ this.props.poster_path } />
                <span>{this.props.title}</span>
                <span>Release date: {this.props.release_date}</span>
                <span>{overview}</span>
            </li>
        );
    }
}


class MovieList extends React.Component {
    render() {

        let list = this.props.movies.map(m => <Movie {...m} key={m.id}/> );

        return (
            <ul className="movies">
                { list }
            </ul>
        );
    }
}

export { MovieList };