import React from 'react';

import ContactList from './ContactList.jsx';

export default class ContactListContainer extends React.Component {
    constructor(props){
        super(props);
        this.handleSelectContact = this.handleSelectContact.bind(this);
    }

    handleSelectContact(contactid){
        let contact = this.props.contacts.find((c)=> contactid == c.contactid);
        if (contact)
            this.props.handleContactChange(contact);
    }

    render() {
        return <ContactList contacts={this.props.contacts}
                            onSelectContact={this.handleSelectContact}/>;
    }
}
