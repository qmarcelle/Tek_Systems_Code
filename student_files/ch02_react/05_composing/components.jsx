import React from 'react';

class MainHeader extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

class Contact extends React.Component {
    render() {
        return (<div>
                   <span>{this.props.name}</span>
                   <span>{this.props.address}</span>
               </div>);
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <MainHeader title={this.props.title} />
                <Contact name={this.props.name} address={this.props.address}/>
            </div>
        );
    }
}

export { App };