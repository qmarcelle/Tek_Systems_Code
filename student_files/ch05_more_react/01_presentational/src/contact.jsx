import React from 'react';
import axios from 'axios'


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


class ContactListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [] }
    }

    componentDidMount() {
         axios.get('/contact').then((response) => {
             this.setState({ contacts: response.data.contactdata });
         });
    }

    render(){
        return (
          <ContactList contacts={this.state.contacts} />
        );
    }
}

export { ContactListContainer };