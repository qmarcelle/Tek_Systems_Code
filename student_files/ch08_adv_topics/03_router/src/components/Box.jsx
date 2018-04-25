import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Positions from '../utils/positions';


class Box extends React.Component {
    render(){
        let { pos } = this.props,
            [top, left] = Positions[pos];

        return (
            <div style={{top: top + 'px', left: left + 'px'}}
                 className={css(styles.layout)} />
        );
    }
}


const styles = StyleSheet.create({
    layout: {
        width: '100px',
        height: '100px',
        backgroundColor: '#0e0e7e',
        border: '1px solid #0e0e7e',
        position: 'absolute',
        zIndex: '1000',
        transition: 'top 1s ease, left 1s ease'
    }
});

export default Box;