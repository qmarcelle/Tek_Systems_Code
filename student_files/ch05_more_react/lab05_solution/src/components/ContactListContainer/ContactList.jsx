import React from 'react';

import Contact from './Contact.jsx';

export default class ContactList extends React.Component {
    render() {
        let {contacts, onSelectContact} = this.props;
        let list = contacts.map( (c)=> <Contact {...c}  key={c.contactid}
                                                onSelectContact={onSelectContact} />
        );

        return (
            <ul className="contacts">
                { list }
            </ul>
        );
    }
}

export { ContactList };