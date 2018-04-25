import React from 'react';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.handleSelectContact = this.handleSelectContact.bind(this);
    }

    handleSelectContact(evt){
        this.props.onSelectContact(this.props.contactid);
    }

    render() {
        return (
            <li onClick={this.handleSelectContact}>
                <span>{this.props.name}</span>
            </li>
        );
    }
}


class ContactList extends React.Component {

    constructor(props){
        super(props);
        this.handleSelectContact = this.handleSelectContact.bind(this);
    }

    handleSelectContact(contactid){
        let contact = this.props.contacts.find((c)=> contactid == c.contactid);
        this.props.onSelectContact(contact);
    }

    render() {
        let list = this.props.contacts.map(
            (c)=> <Contact {...c} key={c.contactid} onSelectContact={this.handleSelectContact}/>
        );

        return (
            <ul className="contacts">
                { list }
            </ul>
        );
    }
}

export { ContactList };