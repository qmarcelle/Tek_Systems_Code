import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let divStyle = {
            fontSize: '2rem',
            color: '#515dd2'
        };

        return (
            <div id="resultsDiv" style={divStyle}>{this.props.msg}</div>
        );
    }
}

export { Results };