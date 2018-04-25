import React from "react";

export default class ContactDetails extends React.Component {
    render() {
        let { contact } = this.props;
        if (contact.contactid)
            return (
                <div className="details">
                    <ul>
                        <li><span>Name:</span><span>{contact.name}</span></li>
                        <li><span>Address:</span><span>{contact.address}</span></li>
                        <li><span>Email:</span><span>{contact.email}</span></li>
                        <li><span>Company:</span><span>{contact.company}</span></li>
                        <li><span>Position:</span><span>{contact.position}</span></li>
                        <li><span>Primary Phone:</span><span>{contact.phones[0].number} ({contact.phones[0].type})</span></li>
                    </ul>
                </div>
            );
        else
            return <div className="details" />;
    }
}