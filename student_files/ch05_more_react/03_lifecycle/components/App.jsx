import React from 'react';

import Counter from './Counter.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.setCount = this.setCount.bind(this);
        this.state = { count: 0 };
    }

    setCount(count) {
        this.setState({count: this.state.count + 1});
    }

    render(){
        return (
            <div>
                <button onClick={this.setCount}>Count</button>
                <Counter count={this.state.count}/>
            </div>
        );
    }
}

export { App };