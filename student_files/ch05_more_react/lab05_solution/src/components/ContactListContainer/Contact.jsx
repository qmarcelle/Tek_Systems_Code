import React from 'react';

export default class Contact extends React.Component {
    render() {
        let {name, onSelectContact, contactid} = this.props;

        return (
            <li onClick={() => { onSelectContact(contactid); }}>
                <span>{name}</span>
            </li>
        );
    }
}
