import React, {Component} from 'react';

// class MainHeader extends React.Component {  // or you can simply say, extends Component due to the way we imported above
//     render() {
//         return <h1>{this.props.title}</h1>
//     }
// }

// alternate way to represent our component
function MainHeader(props) {
    return <h1>{props.title}</h1>;
}

export { MainHeader };
