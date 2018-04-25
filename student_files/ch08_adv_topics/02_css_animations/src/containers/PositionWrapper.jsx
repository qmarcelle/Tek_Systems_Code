import React from 'react';

import Position from '../components/Position.jsx';
import Box from '../components/Box.jsx';

export default class PositionWrapper extends React.Component{
    render(){
        let { handleClickPos1, handleClickPos2,
              handleClickPos3, handleClickPos4, pos } = this.props;

        return (
            <div>
                <Box pos={pos}/>
                <Position onClick={ handleClickPos1 } pos='position1'/>
                <Position onClick={ handleClickPos2 } pos='position2'/>
                <Position onClick={ handleClickPos3 } pos='position3'/>
                <Position onClick={ handleClickPos4 } pos='position4'/>
            </div>
        );
    }
};