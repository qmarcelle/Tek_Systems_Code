import React from 'react';
import ContactSearch from './ContactSearch'


export default class ContactSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchVal: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let contact = this.props.contacts.find((c)=> this.state.searchVal == c.contactid);
        if (contact)
            this.props.handleContactChange(contact);
    }


    render() {
        return <ContactSearch searchVal={this.state.searchVal}
                              onSubmit={this.handleSubmit}
                              onInputChange={(searchVal)=>this.setState( {searchVal} )}/>;
    }
}