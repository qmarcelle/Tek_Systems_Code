import React from 'react';

export default class ContactSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchVal: '500' };
    }

    render() {

        return (
            <form className="search-form">
                <span>Enter Contact ID: </span>
                <input type="text" placeholder="500"
                       value={this.state.searchVal} />
                <input type="submit" value="Find Contact" />
            </form>
        );
    }
}