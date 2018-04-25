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

// add the ContactList class here.



// don't forget to export it when finished