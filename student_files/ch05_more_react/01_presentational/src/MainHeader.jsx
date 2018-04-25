import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`  
    font-size: 1.2rem;
    color: '#CA9A5F'
`;


export default class MainHeader extends React.Component {
    render() {
        return (
            <StyledHeader>
                {this.props.title}
            </StyledHeader>
        );
    }
}

