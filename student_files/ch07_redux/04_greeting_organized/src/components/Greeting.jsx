import React from "react";

export default class Greeting extends React.Component {
    render() {
        const { name, greeting, handleNameClick, handleGreetClick } = this.props;
        return (
            <div>
                <span onClick={handleGreetClick}>{greeting}, </span>
                <span onClick={handleNameClick}>{name}</span>
            </div>
        )
    }
}