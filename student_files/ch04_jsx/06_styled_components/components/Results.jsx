import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  color: #fc4567;
  font-size: 2rem;
`;

export default class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <div id="resultsDiv">{this.props.msg}</div>
            </Wrapper>
        );
    }
}
