import React from 'react';
import AlertContainer from 'react-alert';
// Step 3. Import.

import MovieListContainer from './movie/MovieListContainer.jsx'
import SearchFormContainer from './search/SearchFormContainer.jsx'


class App extends React.Component{
    constructor(props){
        super(props);
        this.showAlert = this.showAlert.bind(this);
    }

    showAlert(msg){ this.toaster.show(msg); }

    render(){
        return (
            <div>
                <AlertContainer ref={ac => this.toaster = ac }  />
                {/* Step 2 and 4. Place top level containers within this div*/}


            </div>
        );
    }
}

export { App };
