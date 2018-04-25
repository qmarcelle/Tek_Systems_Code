import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="resultsDiv">{this.props.msg}</div>
        );
    }
}

export { Results };