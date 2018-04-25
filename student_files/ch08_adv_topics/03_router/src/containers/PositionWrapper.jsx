import React from 'react';
import {withRouter} from "react-router-dom";

import Position from '../components/Position.jsx';
import Box from '../components/Box.jsx';

class PositionWrapper extends React.Component{
    constructor(props){
        super(props);
        this.state = { pos: 'position4' };

        this.props.history.push('/', this.state);
        this.props.history.listen((location, action) => {
            if(action === 'POP')
                this.setState(location.state);
        });
    }

    handleClick(pos){
        this.setState({ pos });
        this.props.history.push('/', {pos});

    }

    render(){
        let { pos } = this.state;

        return (
            <div>
                <Box pos={pos}/>
                <Position onClick={ this.handleClick.bind(this, 'position1') } pos='position1'/>
                <Position onClick={ this.handleClick.bind(this, 'position2') } pos='position2'/>
                <Position onClick={ this.handleClick.bind(this, 'position3') } pos='position3'/>
                <Position onClick={ this.handleClick.bind(this, 'position4') } pos='position4'/>
            </div>
        );
    }
}

export default withRouter(PositionWrapper);