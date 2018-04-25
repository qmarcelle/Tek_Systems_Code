import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <li>
                <span>{this.props.name}</span>
                <span>{this.props.address}</span>
            </li>
        );
    }
}

class ContactList extends React.Component {
    render() {

        let list = this.props.contacts.map(c => <Contact {...c} key={c.contactid}/> );

        return (
            <ul className="contacts">
                { list }
            </ul>
        );
    }
}

export { ContactList };