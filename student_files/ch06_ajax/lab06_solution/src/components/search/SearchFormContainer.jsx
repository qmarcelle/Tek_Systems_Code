import React from 'react';
import PubSub from 'pubsub-js'

import SearchForm from './SearchForm.jsx'
import axios from 'axios';


export default class SearchFormContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = { searchTerm: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){ PubSub.unsubscribe(this.subscriber); }

    handleInputChange(evt) {
        this.setState({ searchTerm: evt.target.value });
    }

    handleSubmit(evt){
        evt.preventDefault();

        let key    = '23cf8b21d9a3bfd615076491d6bae442',
            searchTerm = this.state.searchTerm,
            url    = `http://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchTerm}`;

        axios.get(url)
            .then(results => {
                if(results.data.results)
                    PubSub.publish('MOVIE_DATA', results.data.results);
                else throw 'No results returned.';
            })
            .catch(errors => this.props.show('Error detected: ' + errors));
    }

    render(){
        return (
            <SearchForm  searchTerm={this.state.searchTerm}
                         onChange={this.handleInputChange}
                         onSubmit={this.handleSubmit} />
        );
    }
}
