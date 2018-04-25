import React from 'react';

import ContactListContainer from './components/ContactListContainer';
import ContactDetails from './components/ContactDetails';
import ContactSearchContainer from './components/ContactSearchContainer';
import MainHeader from './components/MainHeader';
import SubSubHeader from './components/MainHeader/SubSubHeader.jsx';

import { contacts } from './data/contactdata'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: { contactid: '', name: '', address: '', email: '', company: '', position: '',
                phones: [{number:'', type: ''}]
            }
        };
        this.handleContactChange = this.handleContactChange.bind(this);
    }

    handleContactChange(contact) {
        this.setState({contact});
    }

    render(){
        return (
            <div id="wrapper">
                <MainHeader title={this.props.title} />
                <SubSubHeader title="Select a contact or supply the contact's ID"/>
                <div className="cols">
                    <ContactListContainer contacts={contacts} handleContactChange={this.handleContactChange}/>
                    <div className="search">
                        <ContactSearchContainer contacts={contacts} contact={this.state.contact}
                                                handleContactChange={this.handleContactChange}/>
                        <ContactDetails contact={this.state.contact}/>
                    </div>
                </div>
            </div>
        );
    }
}
