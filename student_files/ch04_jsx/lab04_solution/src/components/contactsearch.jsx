import React from 'react';
import {contacts} from '../data/contactdata'


export default class ContactSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchVal: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let contact = contacts.find((c)=> this.state.searchVal == c.contactid);
        if (contact)
            this.props.onSearchForContact(contact);
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
            </div>
        );
    }
}