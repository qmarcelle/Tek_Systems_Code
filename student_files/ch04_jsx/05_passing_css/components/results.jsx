import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            fontSize: '2rem',
            color: this.props.msgColor
        };

        return (
            <div id="resultsDiv" style={style}>{this.props.msg}</div>
        );
    }
}

export { Results };