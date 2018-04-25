import React from 'react';

import { ContactListContainer } from './contact.jsx';
import MainHeader from './MainHeader.jsx'



class App extends React.Component{
    render(){
        return (
            <div>
                <MainHeader title={this.props.title} />
                <ContactListContainer />
            </div>
        );
    }
}

export { App };