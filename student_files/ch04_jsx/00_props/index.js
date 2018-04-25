import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class Greeting extends React.Component {
    render() {
        const { greet, name } = this.props;
        return (
            <div>
                <div>{greet}, {name}</div>
            </div>
        )
    }
}

Greeting.propTypes = {
    greet: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};


class App extends React.Component {
    render() {
        return (
            <Greeting greet='Hello' name='Sally'/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
