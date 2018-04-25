import React from 'react';
import ContactSearch from './contactsearch.jsx';
import { ContactList } from './contact.jsx';

class MainHeader extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

class SubHeader extends React.Component {
    render() {
        return <h2>{this.props.title}</h2>;
    }
}

class SubSubHeader extends React.Component {
    render() {
        return <h3>{this.props.title}</h3>;
    }
}

class App extends React.Component{
    constructor(props) {
        super(props);

        // add handleChangeContact bind() here

        this.state = {
            contact: { contactid: '', name: '', address: '', email: '', company: '', position: '',
                phones: [{number:'', type: ''}]
            }
        };
    }


    render(){
        return (
            <div id="wrapper">
                <MainHeader title={this.props.title} />
                <SubSubHeader title="Select a contact or supply the contact's ID"/>
                <div className="cols">
                    <ContactList contacts={this.props.contacts} onSelectContact={this.handleChangeContact}/>
                    <div className="search">
                        <ContactSearch onSearchForContact={this.handleChangeContact}/>

                        {/* add ContactDetails here*/}

                    </div>
                </div>
            </div>
        );
    }
}

export { App };