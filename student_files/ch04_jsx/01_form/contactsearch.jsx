import React from 'react';

import {contacts} from './contactdata'
import { changeResults } from './statechanges'


export default class ContactSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchVal: '', results: {} };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let results = contacts.find((c)=> this.state.searchVal == c.contactid);     // don't use === here
        if (results)
            this.setState(changeResults(results));
    }

    handleInputChange(searchVal) {
        this.setState(() => ({ searchVal }));
    }

    render() {
        return (
            <div>
                 <form className="search-form" onSubmit={this.handleSubmit}>
                    <span>Enter Contact ID: </span>
                    <input type="text" value={this.state.searchVal}
                           onChange={(evt)=> this.handleInputChange(evt.target.value)} />
                    <input type="submit" value="Find Contact" />
                </form>
                <div id="resultsDiv">{this.state.results.name}</div>
            </div>
        );
    }
}