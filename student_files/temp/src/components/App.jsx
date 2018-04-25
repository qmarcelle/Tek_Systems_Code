/*
    Use this project to try anything out.
    Pass a prop to any child component, such as show={this.showAlert},
     and you can then invoke this.show("some message") to cause a
     notification (an alert) to pop up.

     Don't forget to npm install first to build the node_modules folder!
 */

import React from 'react';
import AlertContainer from 'react-alert';


class App extends React.Component{
    constructor(props){
        super(props);
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert(msg){ this.toaster.show(msg); }

    render(){
        return (
            <div>
                <AlertContainer ref={ac => this.toaster = ac}  />
                {/* place any components you wish here */}
                Remove this and replace with your own items.
            </div>
        );
    }
}

export { App };
