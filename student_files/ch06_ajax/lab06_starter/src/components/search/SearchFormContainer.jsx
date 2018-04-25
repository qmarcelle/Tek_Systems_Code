import React from 'react';
import PubSub from 'pubsub-js'

import SearchForm from './SearchForm.jsx'



export default class SearchFormContainer extends React.Component{
    constructor(props){
        super(props);
        // Step 6
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    // Step 6

    handleSubmit(evt){
        evt.preventDefault();

        let key    = '23cf8b21d9a3bfd615076491d6bae442',
            searchTerm = this.state.searchTerm,
            url    = `http://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchTerm}`;

        // Steps 8 and 9. Ajax call + PubSub call here
    }

    render(){
        return (
            <SearchForm  searchTerm={this.state.searchTerm}
                         {/* Step 6, remove this. */}
                         onSubmit={this.handleSubmit} />
        );
    }
}
