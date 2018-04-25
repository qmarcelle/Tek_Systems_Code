import React from "react";

export default class ContactDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.contact.contactid)
            return (
                <div className="details">
                    <ul>
                        <li><span>Name:</span><span>{this.props.contact.name}</span></li>
                        <li><span>Address:</span><span>{this.props.contact.address}</span></li>
                        <li><span>Email:</span><span>{this.props.contact.email}</span></li>
                        <li><span>Company:</span><span>{this.props.contact.company}</span></li>
                        <li><span>Position:</span><span>{this.props.contact.position}</span></li>
                        <li><span>Primary Phone:</span><span>{this.props.contact.phones[0].number} ({this.props.contact.phones[0].type})</span></li>
                    </ul>
                </div>
            );
        else
            return <div className="details" />;
    }
}