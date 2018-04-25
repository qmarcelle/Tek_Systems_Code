
import React from 'react';

export default class Results extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='results'><span>This value is published: </span><span>{this.props.message}</span></div>
        );
    }
}

