import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="resultsDiv"  className={css([styles.layout, styles.color])}>
                {this.props.msg}
            </div>
        );
    }
}


const styles = StyleSheet.create({
    layout: {
        width: '50%',
        flex: 1,
        fontSize: '1.5rem'
    },

    color: {
        color: 'firebrick',
        backgroundColor: '#ffffcc'
    }
});