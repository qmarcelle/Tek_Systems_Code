import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() { console.log('in componentWillMount'); }

    componentDidMount() { console.log('in componentDidMount'); }

    componentWillReceiveProps() { console.log('in componentWillReceiveProps'); }

    shouldComponentUpdate() { console.log('in shouldComponentUpdate'); return true; }

    componentWillUpdate() { console.log('in componentWillUpdate'); }

    componentDidUpdate() { console.log('in componentDidMount'); }

    componentWillUnmount() { console.log('in componentWillUnmount'); }

    render() {
        return (
            <div>{this.props.count}</div>
        );
    }
}