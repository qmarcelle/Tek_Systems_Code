import React from 'react';
import ContactSearch from './contactsearch.jsx';
//import { ContactList } from './contact.jsx';

class MainHeader extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
}


class App extends React.Component{
    render(){
        return (
            <div>
                <MainHeader title={this.props.title} />
                {/*<ContactList contacts={this.props.contacts}/>*/}
                <ContactSearch />
            </div>
        );
    }
}

export { App };