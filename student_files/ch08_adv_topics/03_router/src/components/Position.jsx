import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Positions from '../utils/positions';


class Position extends React.Component{
    render(){
        let { pos, onClick } = this.props,
            [top, left] = Positions[pos];

        return <div onClick={onClick}
                     style={{top: top + 'px', left: left + 'px'}}
                     className={css(styles.layout)} />;
    }
}

const styles = StyleSheet.create({
    layout: {
        width: '100px',
        height: '100px',
        backgroundColor: '#cccccc',
        border: '2px dashed #333333',
        position: 'absolute'
    }
});

export default Position;
